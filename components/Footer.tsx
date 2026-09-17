import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/platform", label: "Platform" },
  { href: "/neuhyal", label: "NeuHyal™" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-icon-twotone.png"
              alt="Cellarim Labs"
              width={49}
              height={30}
            />
            <span className="font-display font-bold">Cellarim Labs</span>
          </div>
          <div className="flex flex-wrap gap-6">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-ink-dim transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-9 flex flex-wrap justify-between gap-2.5 border-t border-hair pt-6 text-sm text-ink-dim">
          <span>© 2026 Cellarim Labs. Bengaluru, India.</span>
          <span>founders@cellarimlabs.com</span>
        </div>
      </div>
    </footer>
  );
}
