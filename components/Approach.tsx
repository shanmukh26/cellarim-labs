"use client";

import { motion } from "framer-motion";
import { approaches } from "@/lib/content";

export default function Approach() {
  return (
    <section id="approach" className="relative py-28">
      <div className="relative z-[1] mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-[640px]">
          <p className="text-sm font-semibold text-sage">What we do</p>
          <h2 className="mt-3 font-display text-[1.9rem] font-extrabold leading-[1.12] sm:text-[2.3rem] lg:text-[2.7rem]">
            Most beauty ingredients are extracted, fermented, or chemically
            made. We do it better — with enzymes and precision.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-0 border-t border-hair md:grid-cols-3 md:divide-x md:divide-hair">
          {approaches.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-b border-hair py-10 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0 md:py-12"
            >
              <span
                className={`font-display text-sm font-extrabold tracking-wide ${
                  item.final ? "text-green" : "text-ink-faint"
                }`}
              >
                {item.n}
              </span>
              <h3
                className={`mt-5 font-display text-[1.35rem] font-bold leading-snug sm:text-[1.45rem] ${
                  item.final ? "text-green" : "text-ink"
                }`}
              >
                {item.title}
              </h3>
              <p className="mt-4 max-w-[280px] text-[1rem] leading-relaxed text-ink-dim">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
