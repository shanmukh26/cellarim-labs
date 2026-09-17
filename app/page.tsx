import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HomeProof from "@/components/HomeProof";
import Approach from "@/components/Approach";
import HomeTeasers from "@/components/HomeTeasers";
import PartnerCTA from "@/components/PartnerCTA";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import { impactStats } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HomeProof />
        <Approach />
        <Marquee
          reverse
          items={impactStats.map((s) => (
            <>
              <b className="text-green">{s.value}</b>&nbsp;{s.label}
            </>
          ))}
        />
        <HomeTeasers />
        <PartnerCTA />
      </main>
      <Footer />
    </>
  );
}
