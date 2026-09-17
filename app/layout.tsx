import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "Cellarim Labs — Cell-free biomanufacturing",
  description:
    "Enzymatic chemistry outside the cell. A modular, AI-guided platform that turns renewable feedstock into high-purity biomolecules — engineered in Bengaluru, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${plex.variable}`}>
      <body className="bg-charcoal text-ink antialiased">{children}</body>
    </html>
  );
}
