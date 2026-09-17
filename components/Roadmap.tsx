"use client";

import { roadmap } from "@/lib/content";

export default function Roadmap() {
  return (
    <section id="roadmap" className="border-t border-hair py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-sm font-semibold text-sage">Trajectory</p>
        <h2 className="mt-3 font-display text-[1.6rem] font-extrabold tracking-tight sm:text-[1.9rem]">
          From foundation to multi-molecule scale.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-hair">
          {roadmap.map((r) => (
            <div key={r.year} className="lg:px-6 lg:first:pl-0">
              <div
                className={`font-display text-xl font-extrabold ${
                  r.year === "Today" ? "text-green" : "text-ink"
                }`}
              >
                {r.year}
              </div>
              <div className="mt-1 text-sm font-semibold text-ink-dim">
                {r.label}
              </div>
              <ul className="mt-4 flex flex-col gap-1.5">
                {r.points.map((pt) => (
                  <li key={pt} className="text-sm text-ink-faint">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
