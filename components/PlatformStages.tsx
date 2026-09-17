"use client";

import { Sparkles, FlaskConical, Factory } from "lucide-react";
import { platformStages } from "@/lib/content";

const icons = [Sparkles, FlaskConical, Factory];

/** Three-beat thesis: discover → build → scale. Short on purpose. */
export default function PlatformStages() {
  return (
    <section id="stages" className="py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-sm font-semibold text-sage">The system</p>
        <h2 className="mt-3 max-w-[520px] font-display text-[1.7rem] font-extrabold leading-[1.12] tracking-tight sm:text-[2.1rem]">
          One stack. From enzyme design to commercial production.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-0 border-y border-hair md:grid-cols-3 md:divide-x md:divide-hair">
          {platformStages.map((stage, i) => {
            const Icon = icons[i];
            return (
              <div
                key={stage.n}
                className="border-b border-hair py-9 last:border-b-0 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0"
              >
                <Icon className="h-5 w-5 text-green" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg font-bold">
                  {stage.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-dim">
                  {stage.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
