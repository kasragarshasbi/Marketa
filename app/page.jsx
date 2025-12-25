import Header from "@/components/Sections/header";
import Hero from "@/components/Sections/hero";
import Features from "@/components/Sections/features";
import TrustSection from "@/components/Sections/trustsection";
// import CTASection from "@/components/CTASection";
import Footer from "@/components/Sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <TrustSection />
      {/* <CTASection /> */}
      <Footer />
    </main>
  );
}
