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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card w-full max-w-[100vw]">
      <div className="w-full max-w-[100vw] px-4 lg:px-8">
        {/* Mobile Layout */}
        <div className="flex items-center justify-between h-16 md:h-20 w-full md:hidden">
          {/* Mobile Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
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
                    className="w-full shadow-button"
                  >
                    Solicite sua cotação exclusiva
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Mobile Logo - Centered and Larger */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img 
              src="/lovable-uploads/e7ee80fe-0b4d-4bc9-bac9-bb39ad439302.png" 
              alt="Miketur" 
              className="h-14 w-auto transition-smooth hover:scale-105"
            />
          </div>

          {/* Spacer for layout balance */}
          <div className="w-10"></div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center h-20 w-full">
          {/* Desktop Navigation - Left side */}
          <nav className="flex items-center space-x-8 flex-1">
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

          {/* Desktop Logo - Centered */}
          <div className="flex items-center justify-center flex-shrink-0">
            <img 
              src="/lovable-uploads/e7ee80fe-0b4d-4bc9-bac9-bb39ad439302.png" 
              alt="Miketur" 
              className="h-16 w-auto transition-smooth hover:scale-105"
            />
          </div>

          {/* Desktop CTA - Right side */}
          <div className="flex items-center justify-end flex-1">
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