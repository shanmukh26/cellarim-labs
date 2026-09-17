import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import NeuHyalContent from "@/components/NeuHyalContent";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NeuHyal™ — Cellarim Labs",
  description:
    "India’s first cell-free hyaluronic acid. Ultra-pure, vegan, customizable molecular weights — crafted with enzymes, not microbes.",
};

export default function NeuHyalPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="Star product · NeuHyal™"
          title="India’s first cell-free hyaluronic acid."
          body="Crafted without microbes or fermentation — precision enzymes, tunable molecular weight, clean-label beauty."
        />
        <NeuHyalContent />
      </main>
      <Footer />
    </>
  );
}
