"use client";

import { motion } from "framer-motion";
import { Leaf, FlaskConical, Microscope, ArrowRight } from "lucide-react";
import { problems, cellFreeAdvantages } from "@/lib/content";

const icons = [Leaf, FlaskConical, Microscope];

export default function Problem() {
  return (
    <section id="problem" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-[640px]">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            The problem
          </div>
          <h2 className="mt-3 font-display text-[1.9rem] font-extrabold leading-[1.12] sm:text-[2.3rem] lg:text-[2.7rem]">
            Every route to high-value molecules has hit a wall.
          </h2>
          <p className="mt-5 text-[1.02rem] text-ink-dim">
            Manufacturing high-value biomolecules economically and
            sustainably remains one of the largest unsolved problems in
            industrial biotechnology.
          </p>
        </div>

        <div className="mt-14 flex flex-col">
          {problems.map((p, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`grid grid-cols-1 gap-6 py-9 md:grid-cols-[auto_1fr_1.1fr] md:items-start md:gap-10 ${
                  i !== 0 ? "border-t border-hair" : ""
                }`}
              >
                <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                  <span className="font-display text-2xl font-extrabold text-ink-faint">
                    {p.n}
                  </span>
                  <Icon className="h-5 w-5 text-ink-faint" strokeWidth={1.6} />
                </div>

                <div>
                  <h3 className="font-display text-[1.2rem] font-bold">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] text-ink-dim">
                    {p.subtitle}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-faint">
                    {p.flow.map((step, si) => (
                      <span key={step} className="inline-flex items-center gap-2">
                        {step}
                        {si !== p.flow.length - 1 && (
                          <ArrowRight className="h-3 w-3" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="flex flex-col gap-2">
                  {p.issues.map((issue) => (
                    <li
                      key={issue}
                      className="flex items-start gap-2.5 text-[0.94rem] text-ink-dim"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink-faint" />
                      {issue}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl border border-green/30 bg-gradient-to-br from-green/10 to-charcoal-2 p-8 sm:p-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="font-display text-[1.3rem] font-bold text-green sm:max-w-[380px]">
              Cellarim removes the living cell entirely.
            </h3>
            <p className="max-w-[380px] text-[0.95rem] text-ink-dim">
              We use enzymes — not living cells — to transform renewable raw
              materials into biomolecules in a continuous production process.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {cellFreeAdvantages.map((a) => (
              <div key={a.label}>
                <div className="font-display text-xl font-extrabold text-green sm:text-2xl">
                  {a.metric}
                </div>
                <div className="mt-1 text-sm">{a.label}</div>
                <div className="text-xs text-ink-faint">{a.detail}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
