import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import UrgenciaSection from "@/components/UrgenciaSection";
import CotacaoSection from "@/components/CotacaoSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <Header />
      <main className="w-full">
        <HeroSection />
        <QuemSomosSection />
        <DepoimentosSection />
        <DiferenciaisSection />
        <UrgenciaSection />
        <CotacaoSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
