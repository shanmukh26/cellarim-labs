"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/platform", label: "Platform" },
  { href: "/neuhyal", label: "NeuHyal™" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || open
          ? "bg-charcoal/95 backdrop-blur-md shadow-[0_1px_0_var(--hair)]"
          : "bg-gradient-to-b from-charcoal/90 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-icon-twotone.png"
            alt="Cellarim Labs"
            width={62}
            height={38}
            priority
          />
          <span className="font-display text-[1.05rem] font-bold">
            Cellarim Labs
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.slice(0, 3).map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  active ? "text-ink" : "text-ink-dim hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-[#0d1610] transition-colors hover:bg-green-soft"
          >
            Partner with us
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-hair px-6 pb-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block border-b border-hair py-4 text-[1.05rem] ${
                pathname === l.href ? "text-green" : "text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
