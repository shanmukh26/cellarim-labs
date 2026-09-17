"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { homeTeasers } from "@/lib/content";

export default function HomeTeasers() {
  return (
    <section className="pb-8 pt-8">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-sm font-semibold text-sage">Enter the stack</p>
        <div className="mt-8 divide-y divide-hair border-y border-hair">
          {homeTeasers.map((t, i) => (
            <motion.div
              key={t.href}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <Link
                href={t.href}
                className="group grid grid-cols-1 items-center gap-4 py-10 transition-colors sm:grid-cols-[140px_1fr_auto] sm:gap-8"
              >
                <span className="text-sm font-semibold text-ink-faint">
                  {t.tag}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight transition-colors group-hover:text-green sm:text-2xl">
                    {t.title}
                  </h3>
                  <p className="mt-2 max-w-[480px] text-[0.98rem] text-ink-dim">
                    {t.body}
                  </p>
                  {"uses" in t && t.uses ? (
                    <div className="mt-4">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-sage">
                        Used in
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-x-1 gap-y-1.5 text-[0.92rem] text-ink-dim">
                        {t.uses.map((use, ui) => (
                          <li key={use} className="flex items-center gap-1">
                            {ui > 0 ? (
                              <span
                                aria-hidden
                                className="mx-1 h-1 w-1 rounded-full bg-green/70"
                              />
                            ) : null}
                            <span className="font-medium text-ink">{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
                <ArrowUpRight className="h-5 w-5 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-green" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
