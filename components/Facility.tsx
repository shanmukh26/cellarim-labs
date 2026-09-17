"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { facility } from "@/lib/content";

function FacilityArt() {
  // Abstract bioreactor / cleanroom floor-plan style illustration
  return (
    <svg viewBox="0 0 400 320" className="w-full max-w-[420px]" aria-hidden="true">
      <rect x="8" y="8" width="384" height="304" rx="16" fill="none" stroke="#333331" strokeWidth="1.5" />
      {/* room dividers */}
      <line x1="8" y1="160" x2="392" y2="160" stroke="#333331" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="200" y1="8" x2="200" y2="160" stroke="#333331" strokeWidth="1" strokeDasharray="4 4" />
      {/* reactor tanks */}
      {[[80, 80], [280, 80]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="42" fill="none" stroke="#25b458" strokeWidth="1.5" opacity="0.55" />
          <circle cx={cx} cy={cy} r="28" fill="#25b458" opacity="0.14" />
          <circle cx={cx} cy={cy} r="5" fill="#25b458" />
        </g>
      ))}
      {/* cleanroom grid bottom */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={i}
          x1={8 + i * 48}
          y1="160"
          x2={8 + i * 48}
          y2="312"
          stroke="#2c2c2a"
          strokeWidth="1"
        />
      ))}
      <circle cx="120" cy="236" r="6" fill="#40745d" />
      <circle cx="280" cy="260" r="6" fill="#40745d" />
      <circle cx="200" cy="220" r="4" fill="#25b458" />
    </svg>
  );
}

export default function Facility() {
  return (
    <section id="facility" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-sage">
              <span className="h-1.5 w-1.5 rounded-full bg-green" />
              Manufacturing infrastructure
            </div>
            <h2 className="mt-3 font-display text-[1.9rem] font-extrabold leading-[1.12] sm:text-[2.3rem] lg:text-[2.6rem]">
              First-of-its-kind cell-free pilot facility.
            </h2>
            <p className="mt-5 max-w-[460px] text-[1.02rem] text-ink-dim">
              {facility.description}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-ink-dim">
              <MapPin className="h-4 w-4 text-green" />
              {facility.location}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3">
              {facility.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <div className="font-display text-xl font-extrabold text-green">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-ink-faint">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <FacilityArt />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
