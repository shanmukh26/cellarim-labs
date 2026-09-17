"use client";

import { motion } from "framer-motion";
import Lattice from "./Lattice";

export default function PageHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40">
      <Lattice />
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 62% 58% at 22% 35%, rgba(28,28,28,0.95) 8%, rgba(28,28,28,0.6) 55%, rgba(28,28,28,0.15) 100%)",
        }}
      />
      <div className="relative z-[3] mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-sage"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            {eyebrow}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-display text-[2.3rem] font-extrabold leading-[1.08] sm:text-[3rem] lg:text-[3.6rem]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-[520px] text-[1.05rem] text-ink-dim"
          >
            {body}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
