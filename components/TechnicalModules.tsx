"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { technicalModules } from "@/lib/content";

export default function TechnicalModules() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-sage">Engineering stack</p>
            <h2 className="mt-3 font-display text-[1.9rem] font-extrabold leading-[1.12] tracking-tight sm:text-[2.4rem]">
              The modules behind every molecule.
            </h2>
            <p className="mt-4 max-w-[380px] text-ink-dim">
              Eight tightly coupled capabilities — from enzyme design to reactor
              integration — reused across the pipeline.
            </p>
          </div>

          <div className="divide-y divide-hair border-y border-hair">
            {technicalModules.map((m, i) => {
              const isOpen = open === i;
              return (
                <div key={m.title}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-display text-sm font-extrabold text-ink-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[1.05rem] font-bold">
                        {m.title}
                      </span>
                    </span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 flex-shrink-0 text-green" />
                    ) : (
                      <Plus className="h-4 w-4 flex-shrink-0 text-ink-faint" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pl-12 text-[0.95rem] text-ink-dim">
                          {m.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
