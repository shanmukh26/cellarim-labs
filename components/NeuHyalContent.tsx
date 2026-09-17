"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import {
  formats,
  productBenefits,
  productValidation,
  applications,
} from "@/lib/content";
import Marquee from "./Marquee";

function MoleculeArt() {
  const points = [
    [160, 70],
    [238, 118],
    [238, 202],
    [160, 250],
    [82, 202],
    [82, 118],
  ];
  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-label="Molecular illustration of NeuHyal"
      className="w-full max-w-[320px]"
    >
      <g fill="none" stroke="#25b458" strokeWidth="1.3">
        <circle cx="160" cy="160" r="128" opacity="0.2" />
        <circle cx="160" cy="160" r="96" opacity="0.35" />
        <circle cx="160" cy="160" r="60" opacity="0.55" />
      </g>
      <circle cx="160" cy="160" r="19" fill="#25b458" />
      {points.map(([x, y], i) => (
        <line
          key={`l-${i}`}
          x1="160"
          y1="160"
          x2={x}
          y2={y}
          stroke="#40745d"
          strokeWidth="1.2"
          opacity="0.7"
        />
      ))}
      {points.map(([x, y], i) => (
        <circle key={`c-${i}`} cx={x} cy={y} r="9" fill="#40745d" />
      ))}
    </svg>
  );
}

export default function NeuHyalContent() {
  return (
    <>
      <section className="pb-12 pt-4">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {productBenefits.map((label) => (
                  <p
                    key={label}
                    className="border-l border-green/40 pl-4 text-[0.95rem] text-ink-dim"
                  >
                    {label}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-2 border-t border-hair pt-6">
                {productValidation.map((v) => (
                  <div
                    key={v}
                    className="flex items-start gap-2.5 text-[0.92rem] text-ink-dim"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green" />
                    {v}
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center"
            >
              <MoleculeArt />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <p className="text-sm font-semibold text-sage">Formats</p>
          <h2 className="mt-3 font-display text-[1.6rem] font-extrabold tracking-tight sm:text-[1.9rem]">
            Five ways to formulate from one platform.
          </h2>

          <div className="mt-8 divide-y divide-hair border-y border-hair">
            {formats.map((f) => (
              <div
                key={f.code}
                className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[180px_1fr] sm:items-baseline sm:gap-10"
              >
                <div className="font-display text-base font-extrabold text-green">
                  {f.code}
                </div>
                <p className="text-[0.95rem] text-ink-dim">{f.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            <Link
              href="/contact"
              className="rounded-full bg-green px-6 py-3.5 text-sm font-bold text-[#0d1610] transition-colors hover:bg-green-soft"
            >
              Request samples
            </Link>
            <Link
              href="/platform"
              className="border-b border-hair pb-0.5 text-sm transition-colors hover:border-ink"
            >
              See the platform behind it
            </Link>
          </div>
        </div>
      </section>

      <Marquee reverse items={applications} />
    </>
  );
}
