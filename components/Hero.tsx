"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Lattice from "./Lattice";

const word = (text: string, delay: number) => (
  <motion.span
    className="inline-block"
    initial={{ opacity: 0, y: "0.4em" }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.3, 1] }}
  >
    {text}
  </motion.span>
);

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32"
    >
      <Lattice />
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 18% 42%, rgba(28,28,28,0.97) 6%, rgba(28,28,28,0.55) 48%, rgba(28,28,28,0.08) 100%)",
        }}
      />

      <div className="relative z-[3] mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-[760px]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-6 text-sm font-semibold tracking-wide text-sage"
          >
            Cell-free · Bengaluru
          </motion.p>

          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[3.5rem] lg:text-[4.5rem]">
            {word("The", 0.08)} {word("future", 0.16)} {word("of", 0.24)}
            <br />
            {word("beauty", 0.36)} {word("ingredients.", 0.48)}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.7 }}
            className="mt-7 max-w-[480px] text-lg leading-relaxed text-ink-dim"
          >
            Clean, high-performance actives made the way nature intended.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.85 }}
            className="mt-3 max-w-[480px] text-[1.05rem] leading-relaxed text-ink"
          >
            No cells. No harsh chemicals. No shortcuts.{" "}
            <span className="text-green">Just pure ingredients.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 1 }}
            className="mt-10 flex flex-wrap items-center gap-8"
          >
            <Link
              href="/platform"
              className="group inline-flex items-center gap-2 rounded-full bg-green px-7 py-4 text-[0.98rem] font-bold text-[#0d1610] transition-all hover:-translate-y-0.5 hover:bg-green-soft"
            >
              Explore the platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/neuhyal"
              className="border-b border-hair pb-0.5 text-[0.98rem] transition-colors hover:border-ink"
            >
              See NeuHyal™
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
