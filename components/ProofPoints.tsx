"use client";

import { marketingProof } from "@/lib/content";

/** Legacy band — same markable set as the rest of the site. */
export default function ProofPoints() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="border-y border-hair py-10">
          <div className="mb-8 text-sm font-semibold text-sage">
            Proven on hyaluronic acid
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {marketingProof.map((p) => (
              <div key={p.label}>
                <div className="font-display text-2xl font-extrabold text-green sm:text-3xl">
                  {p.value}
                </div>
                <div className="mt-1.5 text-[0.95rem] font-semibold">
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
