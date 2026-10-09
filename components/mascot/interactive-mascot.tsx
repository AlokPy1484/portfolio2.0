"use client";

// Direction tracking and boop behavior adapted from page-mascot, MIT.
// Copyright (c) 2026 Kamran Ahmed. See LICENSE.page-mascot.
import { useEffect, useId, useRef, useState, type PointerEvent } from "react";
import { createPortal } from "react-dom";
import { FishTreat } from "./fish-treat";
import styles from "./interactive-mascot.module.css";

const SHEETS = ["/mascots/cat-directions.webp", "/mascots/cat-reactions.webp", "/mascots/cat-eating.webp"];
const CLOCKWISE = [5, 8, 7, 6, 3, 0, 1, 2];
const SECTOR = Math.PI / 4;
const CHEW = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 6, 7, 8];
const EATING_MS = CHEW.length * 130;
const FEEDING_MS = EATING_MS + 650;
const COOLDOWN_MS = 10_000;
type Point = { x: number; y: number };
type Drag = Point & { id: number; start: Point; moved: boolean; offset: Point };
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function InteractiveMascot() {
  const frameRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLSpanElement>(null);
  const dragRef = useRef<Drag | null>(null);
  const busyRef = useRef(false);
  const cooldownDeadline = useRef(0);
  const treatRef = useRef<HTMLButtonElement>(null);
  const tooltipId = useId();
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reactionTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const boops = useRef({ count: 0, at: 0 });
  const [ready, setReady] = useState(false);
  const [direction, setDirection] = useState(4);
  const [reaction, setReaction] = useState<number | null>(null);
  const [eatingFrame, setEatingFrame] = useState<number | null>(null);
  const [cooldownUntil, setCooldownUntil] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [feeding, setFeeding] = useState(false);
  const [dragAttempted, setDragAttempted] = useState(false);
  const [drag, setDrag] = useState<Drag | null>(null);
  const [over, setOver] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const isDragging = drag !== null;
  const coolingDown = cooldownUntil !== 0;
  const showTooltip = coolingDown && !feeding && dragAttempted;

  useEffect(() => {
    if (!cooldownUntil) return;
    let animation = 0;
    const update = () => {
      const milliseconds = Math.max(0, cooldownUntil - Date.now());
      if (treatRef.current) treatRef.current.style.opacity = String(Math.max(0, 1 - milliseconds / (COOLDOWN_MS - FEEDING_MS)));
      setRemaining(Math.ceil(milliseconds / 1000));
      if (!milliseconds) {
        cancelAnimationFrame(animation);
        setCooldownUntil(0);
        setDragAttempted(false);
        setAnnouncement("A fresh fish is ready.");
        return;
      }
      animation = requestAnimationFrame(update);
    };
    animation = requestAnimationFrame(update);
    // The deadline also completes the cooldown when animation frames are paused.
    const timeout = setTimeout(() => { cancelAnimationFrame(animation); update(); }, Math.max(0, cooldownUntil - Date.now()));
    return () => { cancelAnimationFrame(animation); clearTimeout(timeout); };
  }, [cooldownUntil]);

  useEffect(() => {
    let cancelled = false;
    const scheduledTimers = timers.current;
    Promise.all(SHEETS.map(src => new Promise<void>((resolve, reject) => {
      const image = new window.Image();
      image.onload = () => resolve();
      image.onerror = reject;
      image.src = src;
    }))).then(() => { if (!cancelled) setReady(true); }).catch(() => {
      if (!cancelled) setAnnouncement("Treats are unavailable. Please reload to try again.");
    });
    return () => {
      cancelled = true;
      scheduledTimers.forEach(clearTimeout);
      reactionTimers.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let pointer: Point | null = null;
    let sector = -1;
    const aim = () => {
      const box = frameRef.current?.getBoundingClientRect();
      if (!box || !pointer) return;
      const dx = pointer.x - box.left - box.width / 2;
      const dy = pointer.y - box.top - box.height / 2;
      if (Math.hypot(dx, dy) < 70) { sector = -1; setDirection(4); return; }
      const angle = Math.atan2(dy, dx);
      const delta = angle - sector * SECTOR;
      if (sector !== -1 && Math.abs(Math.atan2(Math.sin(delta), Math.cos(delta))) < SECTOR / 2 + 0.12) return;
      sector = (Math.round(angle / SECTOR) + 8) % 8;
      setDirection(CLOCKWISE[sector]);
    };
    const move = (event: globalThis.PointerEvent) => { pointer = { x: event.clientX, y: event.clientY }; aim(); };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", aim, { passive: true });
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("scroll", aim); };
  }, []);

  const isInside = (point: Point) => {
    const box = frameRef.current?.getBoundingClientRect();
    return !!box && point.x >= box.left && point.x <= box.right && point.y >= box.top && point.y <= box.bottom;
  };

  // Edge scrolling lets a captured touch drag travel beyond the current viewport.
  useEffect(() => {
    if (!isDragging) return;
    let animation: number;
    let previous = 0;
    const tick = (now: number) => {
      const point = dragRef.current;
      if (!point) return;
      const seconds = previous ? Math.min((now - previous) / 1000, 0.05) : 0;
      previous = now;
      const edge = 48;
      const speed = point.y < edge ? -480 * (1 - Math.max(0, point.y) / edge)
        : point.y > window.innerHeight - edge ? 480 * (1 - Math.max(0, window.innerHeight - point.y) / edge) : 0;
      if (speed) window.scrollBy({ top: speed * seconds, behavior: "instant" });
      setOver(isInside(point));
      animation = requestAnimationFrame(tick);
    };
    animation = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animation);
    // Start one loop per drag, not per pointer movement.
  }, [isDragging]);

  const later = (callback: () => void, delay: number) => { timers.current.push(setTimeout(callback, delay)); };
  const feed = () => {
    if (!ready || busyRef.current || Date.now() < cooldownDeadline.current) return;
    // A new treat is only available after all previous feeding timers have fired.
    timers.current.length = 0;
    busyRef.current = true;
    cooldownDeadline.current = Date.now() + COOLDOWN_MS;
    setCooldownUntil(cooldownDeadline.current);
    setRemaining(COOLDOWN_MS / 1000);
    setFeeding(true);
    setDragAttempted(false);
    if (treatRef.current) treatRef.current.style.opacity = "0";
    reactionTimers.current.forEach(clearTimeout);
    reactionTimers.current = [];
    bodyRef.current?.getAnimations().forEach(animation => animation.cancel());
    setReaction(null);
    setEatingFrame(reducedMotion() ? 6 : CHEW[0]);
    setAnnouncement("Yum! Your cat is eating. Another fish will be ready in ten seconds.");
    if (!reducedMotion()) CHEW.slice(1).forEach((cell, i) => later(() => setEatingFrame(cell), (i + 1) * 130));
    later(() => { setEatingFrame(null); setReaction(8); }, EATING_MS);
    later(() => { setReaction(null); busyRef.current = false; setFeeding(false); }, FEEDING_MS);
  };

  const boop = () => {
    if (busyRef.current || dragRef.current) return;
    reactionTimers.current.forEach(clearTimeout);
    reactionTimers.current = [];
    const laterReaction = (cell: number | null, delay: number) => reactionTimers.current.push(setTimeout(() => setReaction(cell), delay));
    const now = Date.now();
    boops.current.count = now - boops.current.at < 1600 ? boops.current.count + 1 : 1;
    boops.current.at = now;
    if (boops.current.count >= 4) { boops.current.count = 0; setReaction(7); laterReaction(null, 1100); }
    else { setReaction(0); laterReaction([1, 2, 8][boops.current.count - 1], 120); laterReaction(null, 560); }
    if (!reducedMotion()) bodyRef.current?.animate([
      { transform: "scale(1, 1)" }, { transform: "scale(1.1, .86)", offset: .18 },
      { transform: "scale(.95, 1.08)", offset: .45 }, { transform: "scale(1.03, .97)", offset: .72 },
      { transform: "scale(1, 1)" },
    ], { duration: 420, easing: "ease-in-out" });
  };

  const cancelDrag = () => { dragRef.current = null; setDrag(null); setOver(false); };
  const startDrag = (event: PointerEvent<HTMLButtonElement>) => {
    if (!event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.focus({ preventScroll: true });
    if (Date.now() < cooldownDeadline.current) { setDragAttempted(true); return; }
    if (busyRef.current) return;
    const box = event.currentTarget.getBoundingClientRect();
    const point = { x: event.clientX, y: event.clientY };
    const next = { ...point, id: event.pointerId, start: point, moved: false, offset: { x: point.x - box.left, y: point.y - box.top } };
    dragRef.current = next; setDrag(next);
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const moveDrag = (event: PointerEvent<HTMLButtonElement>) => {
    const current = dragRef.current;
    if (!current || current.id !== event.pointerId) return;
    const next = { ...current, x: event.clientX, y: event.clientY, moved: current.moved || Math.hypot(event.clientX - current.start.x, event.clientY - current.start.y) > 4 };
    dragRef.current = next; setDrag(next); setOver(isInside(next));
  };
  const endDrag = (event: PointerEvent<HTMLButtonElement>) => {
    const current = dragRef.current;
    if (!current || current.id !== event.pointerId) return;
    const valid = current.moved && isInside({ x: event.clientX, y: event.clientY });
    cancelDrag();
    if (valid) feed();
  };

  const sheet = eatingFrame !== null ? 2 : reaction !== null ? 1 : 0;
  const cell = eatingFrame ?? reaction ?? direction;
  return (
    <div ref={frameRef} className={`${styles.frame} ${over ? styles.target : ""}`} data-mascot-state={eatingFrame !== null ? "eating" : reaction !== null ? "reacting" : "idle"}>
      <button type="button" className={styles.cat} onClick={boop} aria-label="Boop the cat" aria-disabled={eatingFrame !== null}>
        <span ref={bodyRef} className={styles.body}>
          {SHEETS.map((src, index) => <span key={src} aria-hidden="true" className={styles.sprite} style={{ backgroundImage: `url(${src})`, backgroundPosition: `${(cell % 3) * 50}% ${Math.floor(cell / 3) * 50}%`, opacity: sheet === index ? 1 : 0 }} />)}
        </span>
      </button>
      {ready && <button ref={treatRef} type="button" className={styles.treat} aria-label="Feed the cat a fish. Drag onto the cat, or press Enter." aria-disabled={coolingDown} aria-describedby={showTooltip ? tooltipId : undefined} style={{ opacity: drag || coolingDown ? 0 : 1, visibility: feeding ? "hidden" : "visible" }} onPointerLeave={() => setDragAttempted(false)} onBlur={() => setDragAttempted(false)} onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={cancelDrag} onLostPointerCapture={cancelDrag} onKeyDown={event => { if (event.key === "Escape") { cancelDrag(); setDragAttempted(false); } }} onClick={event => { if (event.detail === 0) { cancelDrag(); feed(); } }}>
        <FishTreat />
      </button>}
      {showTooltip && <span id={tooltipId} role="tooltip" className={styles.cooldownTooltip}>next treat in {remaining} sec</span>}
      {drag && createPortal(<div className={styles.ghost} aria-hidden="true" style={{ transform: `translate3d(${drag.x - drag.offset.x}px, ${drag.y - drag.offset.y}px, 0)` }}><FishTreat /></div>, document.body)}
      <span className="sr-only" role="status" aria-live="polite">{announcement}</span>
    </div>
  );
}
