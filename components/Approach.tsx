"use client";

import { motion } from "framer-motion";
import { approaches } from "@/lib/content";

export default function Approach() {
  return (
    <section id="approach" className="relative py-28">
      <div className="relative z-[1] mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-[560px]">
          <p className="text-sm font-semibold text-sage">What we do</p>
          <p className="mt-4 text-[1rem] leading-relaxed text-ink-dim">
            Most beauty ingredients are extracted, fermented, or chemically
            made.
          </p>
          <h2 className="mt-3 font-display text-[1.55rem] font-extrabold leading-snug tracking-tight sm:text-[1.85rem]">
            We do it better — with enzymes and precision.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {approaches.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative py-8 pl-5 md:py-10 md:pl-6 ${
                item.final
                  ? "rounded-sm bg-gradient-to-br from-green/10 to-transparent"
                  : "border-t border-hair"
              }`}
            >
              {item.final ? (
                <span
                  aria-hidden
                  className="absolute bottom-8 left-0 top-8 w-[2px] bg-green md:bottom-10 md:top-10"
                />
              ) : null}
              <span
                className={`font-display text-sm font-extrabold tracking-wide ${
                  item.final ? "text-green" : "text-ink-faint"
                }`}
              >
                {item.n}
              </span>
              <h3 className="mt-5 font-display text-[1.3rem] font-bold leading-snug text-ink sm:text-[1.4rem]">
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
