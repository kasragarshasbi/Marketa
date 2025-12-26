import Hero from "@/components/Sections/hero";
import Features from "@/components/Sections/features";
import TrustSection from "@/components/Sections/trustsection";
import CryptoTable from "@/components/Sections/cryptosection";
import Banner from "@/components/Sections/banner";
import FaqSection from "@/components/Sections/faq";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustSection />
      <Features />
      <CryptoTable />
      <Banner />
      <FaqSection />
    </main>
  );
}
