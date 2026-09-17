"use client";

import { CheckCircle2 } from "lucide-react";
import { pipeline } from "@/lib/content";

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-[520px]">
          <p className="text-sm font-semibold text-sage">Pipeline</p>
          <h2 className="mt-3 font-display text-[1.7rem] font-extrabold leading-[1.12] tracking-tight sm:text-[2.1rem]">
            HA first. Many biomolecules next.
          </h2>
          <p className="mt-4 text-[1.02rem] text-ink-dim">
            Every molecule reuses the same enzyme engineering, manufacturing,
            and quality systems.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-0 border-y border-hair md:grid-cols-3 md:divide-x md:divide-hair">
          <div className="border-b border-hair py-8 md:border-b-0 md:pr-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-green">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Validated
            </div>
            <h3 className="mt-3 font-display text-lg font-bold text-green">
              {pipeline.validated.name}
            </h3>
            <p className="mt-2 text-sm text-ink-dim">{pipeline.validated.note}</p>
          </div>

          <div className="border-b border-hair py-8 md:border-b-0 md:px-8">
            <div className="text-xs font-semibold text-sage">Phase 1</div>
            <ul className="mt-4 flex flex-col gap-2">
              {pipeline.nearTerm.map((m) => (
                <li key={m} className="text-[0.98rem]">
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="py-8 md:pl-8">
            <div className="text-xs font-semibold text-sage">Phase 2</div>
            <ul className="mt-4 flex flex-col gap-2">
              {pipeline.midTerm.map((m) => (
                <li key={m} className="text-[0.98rem] text-ink-dim">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
