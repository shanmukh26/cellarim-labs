import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PartnerCTA({
  title = "Ready to co-create the next biomolecule?",
  body = "Custom molecular weights, new formats, or an entirely new active — our platform team is ready to talk.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="relative overflow-hidden border-y border-hair py-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 50% 80% at 90% 50%, rgba(37,180,88,0.18), transparent 70%)",
            }}
          />
          <div className="relative max-w-[560px]">
            <h2 className="font-display text-[1.9rem] font-extrabold leading-[1.15] tracking-tight sm:text-[2.4rem]">
              {title}
            </h2>
            <p className="mt-4 text-[1.05rem] text-ink-dim">{body}</p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-4 text-[0.98rem] font-bold text-[#0d1610] transition-all hover:-translate-y-0.5 hover:bg-green-soft"
            >
              Partner with us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
