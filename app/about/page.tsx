import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Story from "@/components/Story";
import Team from "@/components/Team";
import Backers from "@/components/Backers";
import PartnerCTA from "@/components/PartnerCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Cellarim Labs",
  description:
    "Cellarim Labs is a Bengaluru-based cell-free biomanufacturing company. Meet the founders building the platform.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="About Cellarim Labs"
          title="Built to remove the cell from the equation."
          body="A Bengaluru team turning enzymatic chemistry into a manufacturing platform for the next generation of biomolecules."
        />
        <Story />
        <Team />
        <Backers />
        <PartnerCTA />
      </main>
      <Footer />
    </>
  );
}
