import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card w-full">
      <div className="w-full px-4 lg:px-6 max-w-full">
        {/* Mobile Layout */}
        <div className="flex items-center justify-between h-16 md:h-20 w-full md:hidden">
          {/* Mobile Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="flex-shrink-0">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px]">
              <nav className="flex flex-col space-y-6 mt-6">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-left text-foreground hover:text-primary transition-smooth font-medium text-lg"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('experiencias')}
                  className="text-left text-foreground hover:text-primary transition-smooth font-medium text-lg"
                >
                  Experiências
                </button>
                <button 
                  onClick={() => scrollToSection('depoimentos')}
                  className="text-left text-foreground hover:text-primary transition-smooth font-medium text-lg"
                >
                  Depoimentos
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-left text-foreground hover:text-primary transition-smooth font-medium text-lg"
                >
                  Contato
                </button>
                <div className="pt-4 border-t">
                  <Button 
                    variant="premium"
                    onClick={scrollToForm}
                    className="w-full shadow-button text-sm"
                  >
                    Cotação exclusiva
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Mobile Logo - Centered and Constrained */}
          <div className="flex-1 flex justify-center px-2">
            <img 
              src="/lovable-uploads/52a81929-9898-4f44-b3c2-5e10e17ae8da.png" 
              alt="Miketur" 
              className="h-16 w-auto max-w-[180px] transition-smooth hover:scale-105"
            />
          </div>

          {/* Spacer for layout balance */}
          <div className="w-10 flex-shrink-0"></div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center h-20 w-full max-w-full">
          {/* Desktop Navigation - Left side */}
          <nav className="flex items-center space-x-6 lg:space-x-8 flex-1 min-w-0">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-smooth font-medium text-sm lg:text-base whitespace-nowrap"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('experiencias')}
              className="text-foreground hover:text-primary transition-smooth font-medium text-sm lg:text-base whitespace-nowrap"
            >
              Experiências
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-foreground hover:text-primary transition-smooth font-medium text-sm lg:text-base whitespace-nowrap"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-smooth font-medium text-sm lg:text-base whitespace-nowrap"
            >
              Contato
            </button>
          </nav>

          {/* Desktop Logo - Centered and Constrained */}
          <div className="flex items-center justify-center flex-shrink-0 px-4">
            <img 
              src="/lovable-uploads/52a81929-9898-4f44-b3c2-5e10e17ae8da.png" 
              alt="Miketur" 
              className="h-20 lg:h-24 w-auto max-w-[250px] transition-smooth hover:scale-105"
            />
          </div>

          {/* Desktop CTA - Right side */}
          <div className="flex items-center justify-end flex-1 min-w-0">
            <Button 
              variant="premium"
              onClick={scrollToForm}
              className="shadow-button text-xs lg:text-sm xl:text-base px-3 lg:px-4 py-2 whitespace-nowrap"
            >
              <span className="hidden xl:inline">Solicite sua cotação exclusiva</span>
              <span className="xl:hidden">Cotação exclusiva</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;