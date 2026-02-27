'use client';

import { Twitter, Instagram, Facebook, Dribbble, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative px-6 pt-24 pb-10 text-black">
      {/* Subtle top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="mx-auto max-w-7xl">
        {/* Top row */}
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          {/* Brand */}
          <div className="flex items-center gap-3 text-xl font-medium text-zinc-400">
            <span className="flex h-9 w-9 items-center justify-center rounded-full ">
              ✦
            </span>
            “The first step is to establish that something is possible then probability will occur.” — Elon Musk
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6 text-black/70 dark:text-white">
            <a href="https://x.com/AlokPandey37305" target="*" className="transition hover:text-black">
              <Twitter size={20} />
            </a>
            <a href="https://github.com/AlokPy1484" target="*" className="transition hover:text-black">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/alok-p-5648341b3/" target="*" className="transition hover:text-black">
              <Linkedin size={20} />
            </a>
            <a href="https://dribbble.com/" target="*" className="transition hover:text-black">
              <Dribbble size={20} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-16">
          <ul className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-black/60 dark:text-white">
            {['Services', 'Projects', 'Profile', 'Reviews', 'Contact'].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition hover:text-black"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Bottom row */}
        <div className="mt-20 flex flex-col gap-6 border-t border-black/10 dark:border-white/10 pt-6 text-sm text-black/50 dark:text-white md:flex-row md:items-center md:justify-between">
          <span>© 2025 India</span>
{/* 
          <div className="flex gap-6">
            <span>Made by Framebase</span>
            <span>Built in Framer</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
