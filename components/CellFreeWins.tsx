"use client";

import { cellFreeAdvantages } from "@/lib/content";

export default function CellFreeWins() {
  return (
    <section className="border-y border-hair py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-sm font-semibold text-sage">Why cell-free wins</p>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-0 md:divide-x md:divide-hair">
          {cellFreeAdvantages.map((a) => (
            <div key={a.label} className="md:px-8 md:first:pl-0">
              <div className="font-display text-xl font-extrabold text-green sm:text-2xl">
                {a.metric}
              </div>
              <div className="mt-1.5 text-[0.95rem] font-semibold">{a.label}</div>
              <div className="mt-1 text-xs text-ink-faint">{a.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
