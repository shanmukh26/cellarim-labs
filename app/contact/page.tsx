import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import { contact } from "@/lib/content";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Cellarim Labs",
  description:
    "Partner with Cellarim Labs to co-create your next biomolecule — custom actives, formats, and platform collaborations.",
};

const rows = [
  { k: "Phone", v: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { k: "Email", v: contact.email, href: `mailto:${contact.email}` },
  { k: "Office", v: contact.office },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="Get in touch"
          title="Let’s build the next biomolecule together."
          body="Whether you need a custom molecular weight, a new format, or an entirely new active — our platform team is ready to talk."
        />

        <section className="pb-28 pt-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-20 md:px-10">
            <div>
              <a
                href={`mailto:${contact.email}?subject=Partnership inquiry — Cellarim Labs`}
                className="inline-block rounded-full bg-green px-7 py-4 text-[0.98rem] font-bold text-[#0d1610] transition-all hover:-translate-y-0.5 hover:bg-green-soft"
              >
                Email the founders
              </a>
              <p className="mt-6 max-w-[400px] text-sm text-ink-faint">
                For partnerships, samples, and platform collaborations. We
                typically reply within a few business days.
              </p>
            </div>

            <div className="flex flex-col border-t border-hair md:border-t-0">
              {rows.map((row, i) => (
                <div
                  key={row.k}
                  className={`pb-5 pt-5 ${i !== 0 ? "border-t border-hair" : ""}`}
                >
                  <div className="text-sm text-ink-faint">{row.k}</div>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="mt-1.5 inline-block text-[1.02rem] transition-colors hover:text-green"
                    >
                      {row.v}
                    </a>
                  ) : (
                    <div className="mt-1.5 text-[1.02rem]">{row.v}</div>
                  )}
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
      </main>
      <Footer />
    </>
  );
}
