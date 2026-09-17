"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contrast } from "@/lib/content";

export default function ThesisContrast() {
  const [mode, setMode] = useState<"living" | "cellFree">("cellFree");
  const data = contrast[mode];

  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-sage">The shift</p>
            <h2 className="mt-3 max-w-[520px] font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-[2.6rem]">
              Manufacturing used to mean living with the cell. We don&rsquo;t.
            </h2>
            <p className="mt-5 max-w-[440px] text-[1.05rem] text-ink-dim">
              Fermentation locks chemistry inside biology. Cellarim moves
              enzymatic chemistry outside — so you control the cascade, not the
              organism.
            </p>

            <div className="mt-10 inline-flex rounded-full border border-hair p-1">
              {(
                [
                  { id: "living" as const, label: "Living cell" },
                  { id: "cellFree" as const, label: "Cell-free" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setMode(tab.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    mode === tab.id
                      ? "bg-green text-[#0d1610]"
                      : "text-ink-dim hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[280px] border-t border-hair pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <div
                  className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                    mode === "cellFree" ? "text-green" : "text-ink-faint"
                  }`}
                >
                  {data.title}
                </div>
                <ul className="mt-8 flex flex-col gap-6">
                  {data.points.map((point, i) => (
                    <li key={point} className="flex gap-4">
                      <span
                        className={`font-display text-sm font-extrabold ${
                          mode === "cellFree" ? "text-green" : "text-ink-faint"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[1.05rem] leading-snug text-ink">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
