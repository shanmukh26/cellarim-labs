import { MapPin } from "lucide-react";
import { facility, marketingProof, processDetail } from "@/lib/content";

/**
 * Public proof band:
 * - Lead with markable claims (purity, first-in-India, reactor liters)
 * - Keep 20 L pilot as quiet process context, not a brag number
 */
export default function FacilityProof() {
  return (
    <section id="facility" className="border-t border-hair py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[520px]">
            <p className="text-sm font-semibold text-sage">Manufacturing</p>
            <h2 className="mt-3 font-display text-[1.7rem] font-extrabold leading-[1.15] tracking-tight sm:text-[2.1rem]">
              Built for real production — not a lab demo.
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 text-sm text-ink-dim">
            <MapPin className="h-4 w-4 text-green" />
            {facility.location}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-hair pt-10 md:grid-cols-4 md:gap-0 md:divide-x md:divide-hair">
          {marketingProof.map((p) => (
            <div key={p.label} className="md:px-8 md:first:pl-0">
              <div className="font-display text-2xl font-extrabold text-green">
                {p.value}
              </div>
              <div className="mt-1 text-sm text-ink-dim">{p.label}</div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-[560px] text-sm leading-relaxed text-ink-faint">
          {processDetail.pilotNote} Enzyme cascades run in{" "}
          {facility.stats[0].value} production and{" "}
          {facility.stats[1].value} HA manufacturing reactors under ISO 8
          cleanroom conditions.
        </p>
      </div>
    </section>
  );
}
