import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Workflow from "@/components/Workflow";
import CellFreeWins from "@/components/CellFreeWins";
import PlatformStages from "@/components/PlatformStages";
import Pipeline from "@/components/Pipeline";
import FacilityProof from "@/components/FacilityProof";
import PartnerCTA from "@/components/PartnerCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Platform — Cellarim Labs",
  description:
    "An AI-guided, cell-free enzyme engineering platform that turns renewable feedstock into high-purity biomolecules — no living cells, no fermentation.",
};

export default function PlatformPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="The platform"
          title="Enzymatic chemistry, engineered outside the cell."
          body="A modular, AI-guided system that converts renewable feedstock into high-purity biomolecules — without living cells or fermentation."
        />
        <Workflow />
        <CellFreeWins />
        <PlatformStages />
        <Pipeline />
        <FacilityProof />
        <PartnerCTA
          title="Want to put a molecule on this platform?"
          body="From custom actives to co-development partnerships — start a conversation with the team."
        />
      </main>
      <Footer />
    </>
  );
}
