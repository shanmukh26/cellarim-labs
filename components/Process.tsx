import { Atom, ShieldCheck, Leaf, Beaker } from "lucide-react";
import { processSteps } from "@/lib/content";

const features = [
  {
    icon: Atom,
    title: "Customizable molecular weights",
    body: "Tuned precisely to the formulation you're building.",
  },
  {
    icon: ShieldCheck,
    title: "High consistency and purity",
    body: "Batch after batch, without fermentation's variability.",
  },
  {
    icon: Leaf,
    title: "No animal sources or microbial residues",
    body: "Fully vegan, cell-free from first step to last.",
  },
  {
    icon: Beaker,
    title: "Tailored conjugates and derivatives",
    body: "Built to spec for the formulation problem you're solving.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-[600px]">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            Our process
          </div>
          <h2 className="mt-3 font-display text-[1.9rem] font-extrabold sm:text-[2.3rem] lg:text-[2.7rem]">
            A recipe of perfection.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-7">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon className="mt-0.5 h-5.5 w-5.5 flex-shrink-0 text-green" strokeWidth={1.6} />
                <div>
                  <h4 className="font-display text-[1.02rem] font-bold">
                    {title}
                  </h4>
                  <p className="mt-1.5 text-[0.94rem] text-ink-dim">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {processSteps.map((step, i) => (
              <div
                key={step}
                className={`flex gap-5 py-5 ${
                  i !== 0 ? "border-t border-hair" : ""
                }`}
              >
                <div className="min-w-[34px] font-display text-xl font-extrabold text-ink-faint">
                  {i + 1}
                </div>
                <p className="pt-0.5 text-base">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
