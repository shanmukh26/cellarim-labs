import { backers, moat } from "@/lib/content";

export default function Backers() {
  return (
    <section className="border-t border-hair py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-sm font-semibold text-sage">Backed by</p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {[...backers.investors, ...backers.industry].map((name) => (
                <span
                  key={name}
                  className="font-display text-[1.02rem] font-bold text-ink-dim"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-sage">Why it compounds</p>
            <ul className="mt-5 space-y-3">
              {moat.slice(0, 3).map((m) => (
                <li key={m} className="text-[0.95rem] text-ink-dim">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
