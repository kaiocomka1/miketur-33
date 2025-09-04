import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Flame, Users } from "lucide-react";

const UrgenciaSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer when it reaches 0
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById('cotacao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white relative overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="w-full max-w-[100vw] px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-8 h-8 text-accent animate-pulse-slow" />
            <span className="text-accent font-semibold text-lg">OFERTA EXCLUSIVA</span>
            <Flame className="w-8 h-8 text-accent animate-pulse-slow" />
          </div>

          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
            Garanta prioridade na sua cotação!
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Vagas limitadas para embarque na alta temporada
          </p>

          {/* Timer */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-accent" />
              <span className="text-lg font-semibold">Tempo restante para garantir prioridade:</span>
            </div>
            
            <div className="flex justify-center gap-2 md:gap-4 text-center max-w-full overflow-x-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[80px] flex-shrink-0">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-white/80">Horas</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[80px] flex-shrink-0">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-white/80">Minutos</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[80px] flex-shrink-0">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-white/80">Segundos</div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="w-8 h-8 text-accent mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Atendimento Prioritário</h4>
              <p className="text-sm text-white/80">Suas solicitações serão priorizadas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Resposta em 2h</h4>
              <p className="text-sm text-white/80">Cotação expressa em até 2 horas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Flame className="w-8 h-8 text-accent mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Melhores Preços</h4>
              <p className="text-sm text-white/80">Acesso às melhores condições</p>
            </div>
          </div>

          {/* CTA */}
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToForm}
            className="px-8 py-4 text-lg font-bold bg-accent text-secondary hover:bg-accent/90 shadow-premium animate-float"
          >
            Solicitar minha cotação exclusiva
          </Button>

          <p className="text-sm text-white/70 mt-4">
            * Promoção válida por tempo limitado. Apenas 20 vagas disponíveis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgenciaSection;