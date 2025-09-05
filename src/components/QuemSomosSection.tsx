import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Heart, Globe, Sun } from "lucide-react";

const QuemSomosSection = () => {
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
      image: "/lovable-uploads/71129e68-51bd-41fc-9f7c-032ed1392cf6.png",
      description: "Piscinas naturais cristalinas e vida marinha exuberante",
      icon: <Heart className="w-5 h-5 text-accent" />
    },
    {
      name: "Gramado",
      location: "Rio Grande do Sul, Brasil", 
      image: "/lovable-uploads/3a24fe1b-45e9-4783-9cf4-2c7055b301df.png",
      description: "Charme europeu com gastronomia e arquitetura únicas",
      icon: <Star className="w-5 h-5 text-accent" />
    },
    {
      name: "Maceió",
      location: "Alagoas, Brasil",
      image: "/lovable-uploads/4a9508ee-eb17-43cd-a02e-0fbabf64b336.png",
      description: "Praias paradisíacas com águas verde-esmeralda",
      icon: <MapPin className="w-5 h-5 text-accent" />
    },
    {
      name: "Chile",
      location: "América do Sul",
      image: "/lovable-uploads/377cf6d5-d1b7-4d37-aa81-05e662322eaf.png",
      description: "Paisagens dramáticas dos Andes à costa do Pacífico",
      icon: <Globe className="w-5 h-5 text-accent" />
    },
    {
      name: "Caraíva",
      location: "Bahia, Brasil",
      image: "/lovable-uploads/747d92c5-bf26-46c4-bc6d-cb8eadbbba5f.png",
      description: "Vila rústica com charme autêntico e praias preservadas",
      icon: <Heart className="w-5 h-5 text-accent" />
    },
    {
      name: "Natal",
      location: "Rio Grande do Norte, Brasil",
      image: "/lovable-uploads/cbde1531-f089-4405-afd4-d4e96e4149c5.png",
      description: "Dunas douradas e praias tropicais do nordeste brasileiro",
      icon: <Sun className="w-5 h-5 text-accent" />
    }
  ];

  return (
    <section id="quem-somos" className="py-20 gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Quem Somos Section */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Quem somos
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image on the left */}
            <div className="animate-scale-in">
              <div className="relative overflow-hidden rounded-2xl shadow-premium">
                <img
                  src="/lovable-uploads/e0b67da0-18c1-4603-bb33-77a3a541c8c6.png"
                  alt="Casal Miketur - Fundadores da agência"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text on the right */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Somos um casal apaixonado por viagens e também os criadores da Miketur. A nossa história começou em 2018, quando fizemos nossa primeira viagem de avião juntos. E alí, tudo mudou! Nos apaixonamos por viajar - pelas paisagens, pelos momentos e por tudo que cada lugar nos fez sentir... e desde então, nunca mais paramos.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Em 2022 decidimos dar um passo a mais: começamos a estudar tudo sobre milhas, passagens aéreas e hospedagens. Queríamos entender como viajar melhor e mais seguro. Nosso sonho sempre foi que outras pessoas também pudessem viver o que a gente viveu.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  E foi assim que, em 2023 nasceu a nossa missão: <strong className="text-secondary">Ajudar mais pessoas a descobrirem o mundo!</strong>
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  E essa é nossa história! E quem sabe ela não seja o começo da sua próxima viagem com a gente?
                </p>
                <p className="text-xl font-semibold text-primary">
                  MikeTur - Porque todo mundo merece viver essa experiência
                </p>
              </div>
            </div>
          </div>
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
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-secondary">
              Nossos Destinos
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conheça alguns dos destinos incríveis que já exploramos e que podemos ajudar você a descobrir
            </p>
          </div>

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

export default QuemSomosSection;