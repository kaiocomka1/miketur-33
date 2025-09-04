import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  console.log('Footer component loading...');
  
  const scrollToForm = () => {
    console.log('scrollToForm called in Footer');
    const element = document.getElementById('cotacao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="bg-secondary text-white py-16 w-full max-w-[100vw] overflow-x-hidden">
      <div className="w-full max-w-[100vw] px-4 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center lg:items-start">
               <img 
                 src="/lovable-uploads/52a81929-9898-4f44-b3c2-5e10e17ae8da.png" 
                 alt="Miketur" 
                 className="h-24 w-auto mb-4"
               />
              <p className="text-white/80 text-sm leading-relaxed mb-6 text-center lg:text-left">
                Transformamos seus sonhos de viagem em realidade, com atendimento 
                personalizado e experiências únicas que ficam para sempre na memória.
              </p>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/miketur_/#" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5517996663853"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-smooth"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-white/80 hover:text-accent transition-smooth text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experiencias')}
                  className="text-white/80 hover:text-accent transition-smooth text-sm"
                >
                  Experiências
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('depoimentos')}
                  className="text-white/80 hover:text-accent transition-smooth text-sm"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cotacao')}
                  className="text-white/80 hover:text-accent transition-smooth text-sm"
                >
                  Solicitar Cotação
                </button>
              </li>
            </ul>
          </div>

          {/* Destinos Populares */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Destinos Populares</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-smooth text-sm">
                  Porto de Galinhas
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-smooth text-sm">
                  Gramado
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-smooth text-sm">
                  Maceió
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-smooth text-sm">
                  Chile
                </a>
              </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-accent transition-smooth text-sm">
                    Natal
                  </a>
                </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">WhatsApp</p>
                  <button 
                    onClick={scrollToForm}
                    className="text-white hover:text-accent transition-smooth text-sm font-medium"
                  >
                    (17) 99666-3853
                  </button>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">E-mail</p>
                  <a 
                    href="mailto:contato@miketur.com.br"
                    className="text-white hover:text-accent transition-smooth text-sm font-medium"
                  >
                    contato@miketur.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">Atendimento</p>
                  <p className="text-white text-sm">
                    Atendimento todos os dias das 09h às 22h
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="hero"
              className="w-full mt-6 bg-accent text-secondary hover:bg-accent/90 font-semibold"
              onClick={scrollToForm}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © 2024 Miketur. Todos os direitos reservados. 
              Experiências personalizadas e momentos inesquecíveis.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;