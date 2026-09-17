import { contact } from "@/lib/content";

const rows = [
  { k: "Phone", v: contact.phone },
  { k: "Email", v: contact.email },
  { k: "Office", v: contact.office },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-charcoal to-[#101010] py-28"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-20 md:px-10">
        <div>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            Get in touch
          </div>
          <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.14] sm:text-[2.5rem] lg:text-[2.9rem]">
            Explore what we can make for you, or partner with us to co-create
            your next breakthrough ingredient.
          </h2>
          <p className="mt-5 max-w-[440px] text-[1.06rem] text-ink-dim">
            Whether you need a custom molecular weight, a new format, or an
            entirely new active — our platform team is ready to talk.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-block rounded-full bg-green px-7 py-4 text-[0.98rem] font-bold text-[#0d1610] transition-all hover:-translate-y-0.5 hover:bg-green-soft"
          >
            Partner with us
          </a>
        </div>

        <div className="flex flex-col">
          {rows.map((row, i) => (
            <div
              key={row.k}
              className={`pb-5 pt-5 ${i !== 0 ? "border-t border-hair" : ""}`}
            >
              <div className="text-sm text-ink-faint">{row.k}</div>
              <div className="mt-1.5 text-[1.02rem]">{row.v}</div>
            </div>
          ))}
          <div className="border-t border-hair pb-5 pt-5">
            <div className="text-sm text-ink-faint">Social</div>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-block border-b border-hair text-[1.02rem] transition-colors hover:border-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
