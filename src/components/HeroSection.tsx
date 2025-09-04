import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/5517996663853?text=Olá,%20Vim%20pelo%20site%20e%20quero%20fazer%20uma%20cotação";

  const scrollToForm = () => {
    const element = document.getElementById('cotacao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen w-full max-w-[100vw] flex items-center justify-center overflow-hidden hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full">
        <img 
          src={heroImage} 
          alt="Destino paradisíaco" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[100vw] px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Sua viagem começa com</span>
            <span className="block gradient-cta bg-clip-text text-transparent">
              atendimento exclusivo
            </span>
            e personalizado
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
            Transformamos seus desejos em experiências sob medida, com cotações exclusivas e suporte humano do início ao fim.
          </p>

          <div className="flex justify-center animate-scale-in">
            <Button 
              variant="hero"
              size="lg"
              onClick={scrollToForm}
              className="px-8 py-4 text-lg font-semibold shadow-premium animate-float"
            >
              Quero minha cotação personalizada
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>Atendimento 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💳</span>
              <span>Parcelamento em 12x sem juros</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        {/* Desktop Mouse Indicator */}
        <div className="hidden md:flex flex-col items-center animate-pulse-slow">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
          <div className="text-white/70 text-xs mt-2">Role para baixo</div>
        </div>
        {/* Mobile Touch Indicator */}
        <div className="md:hidden flex flex-col items-center animate-pulse-slow">
          <div className="w-8 h-8 border-2 border-white/50 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white/70 rounded-full animate-bounce"></div>
          </div>
          <div className="text-white/70 text-xs mt-2">Role para baixo</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;