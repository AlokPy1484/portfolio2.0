"use client"
import { CodeBlock } from "@/components/ui/code-block";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"



export default function page() {

    const Prompt = `
You are a senior web performance engineer auditing this project. Your job is to
measure, diagnose, and plan. Do NOT modify any source code in this task. The only
files you may create are the report outputs and the plan document described below.

## Step 1: Run the Lighthouse audit

1. Detect the framework and package manager from package.json (this looks like
   Next.js). Install dependencies if needed.
2. Create a production build and start it locally (e.g. \`npm run build && npm run start\`).
   Do NOT audit the dev server, because dev-mode bundles are unminified and skew every metric.
3. Run Lighthouse against the key routes (at minimum "/", plus any other
   major pages you find in the routing structure) in two configurations:
   - Mobile (default throttling)
   - Desktop (\`--preset=desktop\`)
4. Run each configuration 3 times and use the median to reduce variance.
5. Save the outputs in the project root with clear names, as both JSON and HTML:
   \`lighthouse-mobile-<route>.report.json/html\`, \`lighthouse-desktop-<route>.report.json/html\`.
6. If Lighthouse or Chrome is missing, install \`lighthouse\` as a dev tool
   (npx is fine) and tell me what you installed. If something fails, report the
   exact error instead of guessing.

## Step 2: Analyze the reports

Read the JSON reports (not just the scores) and extract the actual audit data. For every
finding, cite the Lighthouse audit ID, the affected element/selector or URL, and the
measured value. Then map it back to the exact source file and line in this repo.

### A. First Contentful Paint (FCP)
- Render-blocking CSS/JS, font loading behavior (font-display, preload, FOIT/FOUT)
- Server response time (TTFB), redirects, and large HTML payloads
- Unused or oversized CSS/JS loaded in the critical path
- Third-party scripts that delay first paint

### B. Largest Contentful Paint (LCP)
- Identify the exact LCP element on each route and its type (image, text, video)
- Break LCP down into TTFB, resource load delay, resource load time, and render delay
- For images: format, dimensions vs rendered size, missing \`priority\`/\`fetchpriority\`,
  lazy-loading applied wrongly to above-the-fold images, missing preload, and
  whether \`next/image\` \`sizes\` is set correctly (especially for \`fill\` images)
- Client-side rendering or data-fetching waterfalls that delay the LCP element

### C. Cumulative Layout Shift (CLS)
- List every element that shifted (from the layout-shift-elements and
  layout-shifts audits) with its individual shift score
- Root causes: images/videos without width/height or aspect-ratio, \`fill\` images
  inside containers without a defined size, late-loading fonts, injected banners/
  ads/embeds, content that renders after hydration, animations that move layout
  properties instead of using transform/opacity

### D. Total Blocking Time (TBT) / main-thread work
- Use the long-tasks, mainthread-work-breakdown, bootup-time, and
  unused-javascript audits
- Identify the specific scripts, bundles, and functions/components responsible for
  long tasks (over 50ms), with their durations
- Look for: heavy synchronous work during hydration, large client components that
  could be server components, expensive useEffect/useLayoutEffect logic, large
  libraries imported in full, unnecessary polyfills, heavy third-party scripts,
  and un-memoized expensive computations or re-render loops
- Run a bundle analysis (e.g. @next/bundle-analyzer) if it's available or
  installable, and include the largest modules

### E. Other issues
Briefly list any remaining high-impact opportunities (cache headers, image
compression, unused code, accessibility/SEO items that are cheap to fix).
Keep this short, since the focus is the four metrics above.

## Step 3: Write the plan

Create \`PERFORMANCE_PLAN.md\` in the project root with:

1. **Summary table**: the current value of each metric (FCP, LCP, CLS, TBT, Speed Index,
   overall score) for mobile and desktop, and a realistic target for each.
2. **Findings**: one section per metric (A to D), each finding listing:
   - Evidence (audit ID, measured value, element/URL)
   - Source location (file path and line)
   - Why it hurts the metric
3. **Action plan**, split into two clearly separated groups:

   **Non-breaking changes** (safe: no visual, behavioral, API, or dependency-contract changes)
   Examples: adding width/height or aspect-ratio, adding \`priority\` to the LCP image,
   \`font-display: swap\`, preloading critical assets, adding \`sizes\`, compressing/converting
   images, dynamic-importing below-the-fold components, removing unused code.

   **Breaking / risky changes** (could alter UI, behavior, SEO, data flow, or require
   regression testing)
   Examples: converting client components to server components, restructuring
   data fetching, replacing or removing a library or third-party script, changing
   rendering strategy (CSR to SSR/SSG/ISR), changing the layout or markup structure,
   upgrading major dependency versions.

   For each change include: what to change, the exact file(s), expected metric
   impact (which metric, rough size of improvement), effort (S/M/L), risk, and
   for breaking changes, what could break and how to test it.
4. **Recommended order of execution**: sorted by (impact / effort), with the
   non-breaking quick wins first.
5. **Verification checklist**: how to re-run the same Lighthouse commands after
   each batch of changes and compare against the baseline.

## Rules
- Base every claim on the report data or the code. If you can't confirm something,
  label it as a hypothesis and say how to verify it.
- Don't give generic advice ("optimize images") without naming the specific file
  and the measured cost.
- Don't change any source files. Wait for my approval of the plan before
  implementing anything.
- When done, give me a 5 to 10 line summary: the top 3 biggest wins, and the
  location of the report files and the plan.
`;

    const [isCopied, setIsCopied] = useState<boolean>(false)

    const handleCopyButton = () => {
        navigator.clipboard.writeText(Prompt);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    }

    return (
        <div className="flex flex-col justify-start items-center h-screen w-screen">
            <div className="relative flex flex-col justify-start items-center mt-20 max-w-4xl w-full">
                <div className="z-50 absolute top-2 right-2 flex justify-end w-full">
                    <button className="bg-neutral-800 border border border-neutral-700/30 border-[1px] rounded-md px-2 cursor-pointer" onClick={handleCopyButton}>
                        {isCopied ?
                            <AnimatePresence mode="wait">
                                <motion.a initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 1, type: "spring", stiffness: 200 }} >Copied!</motion.a>
                            </AnimatePresence>
                            :
                            <AnimatePresence mode="wait">
                                <motion.a initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 1, type: "spring", stiffness: 200 }} >Copy Prompt</motion.a>
                            </AnimatePresence>
                        }
                    </button>
                </div>
                <CodeBlock
                    language="html"
                    filename="Web Vitals Prompt"
                    tabs={[
                        { name: "DummyComponent.html", code: Prompt, language: "html" },
                    ]}
                />
            </div>

        </div>

    )
}