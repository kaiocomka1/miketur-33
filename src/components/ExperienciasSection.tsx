import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Heart, Globe, Sun } from "lucide-react";
import portoImage from "@/assets/porto-galinhas.jpg";
import gramadoImage from "@/assets/gramado.jpg";
import maceioImage from "@/assets/maceio.jpg";
import chileImage from "@/assets/chile.jpg";
import caraivaImage from "@/assets/caraiva.jpg";
import natalImage from "@/assets/natal.jpg";

const ExperienciasSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('cotacao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const destinations = [
    {
      name: "Porto de Galinhas",
      location: "Pernambuco, Brasil",
      image: portoImage,
      description: "Piscinas naturais cristalinas e vida marinha exuberante",
      icon: <Heart className="w-5 h-5 text-accent" />
    },
    {
      name: "Gramado",
      location: "Rio Grande do Sul, Brasil", 
      image: gramadoImage,
      description: "Charme europeu com gastronomia e arquitetura únicas",
      icon: <Star className="w-5 h-5 text-accent" />
    },
    {
      name: "Maceió",
      location: "Alagoas, Brasil",
      image: maceioImage,
      description: "Praias paradisíacas com águas verde-esmeralda",
      icon: <MapPin className="w-5 h-5 text-accent" />
    },
    {
      name: "Chile",
      location: "América do Sul",
      image: chileImage,
      description: "Paisagens dramáticas dos Andes à costa do Pacífico",
      icon: <Globe className="w-5 h-5 text-accent" />
    },
    {
      name: "Caraíva",
      location: "Bahia, Brasil",
      image: caraivaImage,
      description: "Vila rústica com charme autêntico e praias preservadas",
      icon: <Heart className="w-5 h-5 text-accent" />
    },
    {
      name: "Natal",
      location: "Rio Grande do Norte, Brasil",
      image: natalImage,
      description: "Dunas douradas e praias tropicais do nordeste brasileiro",
      icon: <Sun className="w-5 h-5 text-accent" />
    }
  ];

  return (
    <section id="experiencias" className="py-20 gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Experiências Personalizadas
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Na Miketur, cada cliente recebe uma proposta exclusiva, feita sob medida. 
            Nosso foco é qualidade, segurança e curadoria de experiências únicas — 
            sempre buscando o melhor custo-benefício, mas sem competir por preço.
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 animate-scale-in">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-secondary">Não vendemos pacotes prontos</h3>
            <p className="text-muted-foreground">Cada proposta é única e personalizada para você</p>
          </div>
          
          <div className="text-center p-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-secondary">Consultoria Exclusiva</h3>
            <p className="text-muted-foreground">Selecionamos apenas experiências de qualidade excepcional</p>
          </div>
          
          <div className="text-center p-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-secondary">Atendimento Exclusivo</h3>
            <p className="text-muted-foreground">Suporte humano e personalizado do início ao fim</p>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.name} 
              className="overflow-hidden shadow-card hover:shadow-premium transition-smooth group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  {destination.icon}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{destination.location}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-secondary">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {destination.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={scrollToForm}
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  Solicitar Cotação
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <Button 
            variant="premium"
            size="lg"
            onClick={scrollToForm}
            className="px-8 py-4 text-lg font-semibold shadow-button"
          >
            Quero uma experiência personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienciasSection;