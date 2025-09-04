import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  console.log('Header component loading...');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToForm = () => {
    console.log('scrollToForm called in Header');
    const element = document.getElementById('cotacao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card w-full max-w-[100vw]">
      <div className="w-full max-w-[100vw] px-4 lg:px-8">
        {/* Mobile Layout */}
        <div className="flex items-center h-16 md:h-20 w-full">
          {/* Mobile Navigation - Left side */}
          <nav className="md:hidden flex items-center space-x-1 text-xs flex-1">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-smooth font-medium px-1 py-1 whitespace-nowrap"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('experiencias')}
              className="text-foreground hover:text-primary transition-smooth font-medium px-1 py-1 whitespace-nowrap"
            >
              Experiências
            </button>
          </nav>

          {/* Desktop Navigation - Left side */}
          <nav className="hidden md:flex items-center space-x-8 flex-1">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('experiencias')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Experiências
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Logo - Centered */}
          <div className="flex items-center justify-center flex-shrink-0">
            <img 
              src="/lovable-uploads/e7ee80fe-0b4d-4bc9-bac9-bb39ad439302.png" 
              alt="Miketur" 
              className="h-12 md:h-16 w-auto transition-smooth hover:scale-105"
            />
          </div>

          {/* Mobile CTA - Right side */}
          <div className="md:hidden flex items-center justify-end flex-1">
            <button 
              onClick={scrollToForm}
              className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium hover:bg-primary/90 transition-smooth whitespace-nowrap"
            >
              Cotação
            </button>
          </div>

          {/* Desktop CTA - Right side */}
          <div className="hidden md:flex items-center justify-end flex-1">
            <Button 
              variant="premium"
              onClick={scrollToForm}
              className="shadow-button"
            >
              Solicite sua cotação exclusiva
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;