"use client";

import { motion } from "framer-motion";
import { homeProof } from "@/lib/content";

/** Homepage strip — only markable claims. */
export default function HomeProof() {
  return (
    <section className="border-y border-hair py-10">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-hair">
          {homeProof.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <div className="font-display text-2xl font-extrabold tracking-tight text-green sm:text-[1.85rem]">
                {p.value}
              </div>
              <div className="mt-1.5 text-sm text-ink-dim">{p.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
