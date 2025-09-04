import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienciasSection from "@/components/ExperienciasSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import UrgenciaSection from "@/components/UrgenciaSection";
import CotacaoSection from "@/components/CotacaoSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LogoProcessor from "@/components/LogoProcessor";

const Index = () => {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <Header />
      <main className="w-full">
        <HeroSection />
        <ExperienciasSection />
        <DepoimentosSection />
        <DiferenciaisSection />
        <UrgenciaSection />
        <CotacaoSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <LogoProcessor />
    </div>
  );
};

export default Index;
