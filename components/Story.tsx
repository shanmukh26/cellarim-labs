export default function Story() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <p className="text-sm font-semibold text-sage">Thesis</p>
            <h2 className="mt-3 font-display text-[1.7rem] font-extrabold leading-[1.14] tracking-tight sm:text-[2.1rem]">
              The living cell is the bottleneck. We removed it.
            </h2>
          </div>
          <div className="text-[1.05rem] leading-relaxed text-ink-dim">
            <p>
              Founded in Bengaluru in 2023, Cellarim builds cell-free enzyme
              cascades that turn renewable feedstock into high-purity
              biomolecules — proved first on hyaluronic acid with NeuHyal™.
            </p>
            <p className="mt-4 text-sm text-ink-faint">
              Engineered &amp; manufactured in India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
