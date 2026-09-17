import type { ReactNode } from "react";

/**
 * Seamless infinite marquee.
 * Repeats items enough to fill wide viewports, then duplicates the track
 * so translateX(-50%) loops without a blank gap.
 */
export default function Marquee({
  items,
  reverse = false,
}: {
  items: ReactNode[];
  reverse?: boolean;
}) {
  if (items.length === 0) return null;

  // One "lap" should be long enough that the viewport is always full
  const repeats = Math.max(4, Math.ceil(12 / items.length));
  const lap = Array.from({ length: repeats }, () => items).flat();
  const track = [...lap, ...lap];

  return (
    <div className="overflow-hidden border-y border-hair py-6">
      <div
        className={`flex w-max will-change-transform ${
          reverse ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        {track.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-5 whitespace-nowrap px-7 font-display text-[1.15rem] font-semibold text-ink-dim"
          >
            {item}
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" />
          </div>
        ))}
      </div>
    </div>
  );
}
