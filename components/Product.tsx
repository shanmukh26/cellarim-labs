"use client";

import { motion } from "framer-motion";
import { Atom, ShieldCheck, Leaf, Beaker, CheckCircle2 } from "lucide-react";
import { formats, productValidation } from "@/lib/content";

const benefits = [
  { icon: Atom, label: "Customizable molecular weights" },
  { icon: ShieldCheck, label: "Ultra-pure and endotoxin-free" },
  { icon: Leaf, label: "Fully vegan, animal-free" },
  { icon: Beaker, label: "Customizable for any formulation" },
];

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
    <svg viewBox="0 0 320 320" role="img" aria-label="Molecular illustration of NeuHyal" className="w-full max-w-[380px]">
      <g fill="none" stroke="#25b458" strokeWidth="1.3">
        <circle cx="160" cy="160" r="128" opacity="0.2" />
        <circle cx="160" cy="160" r="96" opacity="0.35" />
        <circle cx="160" cy="160" r="60" opacity="0.55" />
      </g>
      <circle cx="160" cy="160" r="19" fill="#25b458" />
      {points.map(([x, y], i) => (
        <line key={i} x1="160" y1="160" x2={x} y2={y} stroke="#40745d" strokeWidth="1.2" opacity="0.7" />
      ))}
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="9" fill="#40745d" />
      ))}
    </svg>
  );
}

export default function Product() {
  return (
    <section id="neuhyal" className="relative py-10">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-sage">
              <span className="h-1.5 w-1.5 rounded-full bg-green" />
              Star product
            </div>
            <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.1] sm:text-[2.5rem] lg:text-[2.9rem]">
              India&rsquo;s first cell-free hyaluronic acid
            </h2>
            <p className="mt-5 max-w-[460px] text-[1.06rem] text-ink-dim">
              The next generation of hyaluronic acid — crafted without
              microbes, fermentation, or compromise. Powered by precision
              enzymes, NeuHyal™ delivers unmatched purity, consistency, and
              sustainability for clean-label beauty. A complete molecular
              weight portfolio, 5 kDa to 5,000 kDa, from a single platform.
            </p>

            <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8">
              {benefits.map(({ icon: Icon, label }) => (
                <div key={label}>
                  <Icon className="h-6 w-6 text-green" strokeWidth={1.6} />
                  <p className="mt-3 max-w-[190px] text-[0.95rem] text-ink-dim">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-2.5 border-t border-hair pt-8">
              {productValidation.map((v) => (
                <div key={v} className="flex items-start gap-2.5 text-[0.92rem] text-ink-dim">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green" />
                  {v}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <MoleculeArt />
          </motion.div>
        </div>

        <div className="mt-24">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            Format options
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {formats.map((f) => (
              <div
                key={f.code}
                className="rounded-2xl border border-hair p-6 transition-all hover:-translate-y-1 hover:border-green/50"
              >
                <div className="font-display text-lg font-extrabold text-green">
                  {f.code}
                </div>
                <p className="mt-2.5 text-sm text-ink-dim">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
