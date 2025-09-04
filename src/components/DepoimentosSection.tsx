import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const DepoimentosSection = () => {
  const testimonials = [
    {
      name: "Giovana Santos",
      location: "Votuporanga, SP",
      rating: 5,
      comment: "Excelente atendimento, foi minha primeira viagem e tive um apoio perfeito, Sempre me acompanhando durante o processo da viagem, tirou todas as minhas dúvidas, indico de olhos fechados.",
      avatar: "/lovable-uploads/f8b40745-def1-4844-9570-8922916672fa.png"
    },
    {
      name: "Monique Borges",
      location: "São Paulo, SP", 
      rating: 5,
      comment: "Foi ótimo, o cuidado em passar todas as informações pra gente , atenção em tirar todas as dúvidas e nos deixar tranquilos sem preocupações, apenas curtir a viagem!! Super recomendo!!",
      avatar: "/lovable-uploads/1c0dc3b3-39d4-4ea8-9c18-43c4dedc65d3.png"
    },
    {
      name: "Tiago Nogueira",
      location: "Presidente Prudente, SP",
      rating: 5,
      comment: "Com certeza uma das melhores experiências que já tive em viagens, e todo apoio e suporte que a Miketur prestou facilitou muito e só agregou para que fosse tudo mais incrível!!",
      avatar: "/lovable-uploads/49a72753-2d87-4a7b-acdc-96b8df1f469c.png"
    },
    {
      name: "Rafaela Betini",
      location: "Votuporanga, SP",
      rating: 5,
      comment: "Sensacional essa experiência de vivenciar lugares incríveis ao lado da minha família. Proporcionado-nos momentos de muita felicidade e alegria!",
      avatar: "/lovable-uploads/d2e46b9e-bdab-4e0d-a86c-72e89617fae9.png"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Clientes que viveram experiências inesquecíveis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra o que nossos clientes falam sobre suas jornadas personalizadas conosco
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="shadow-card hover:shadow-premium transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Experiências Personalizadas</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5★</div>
            <p className="text-muted-foreground">Avaliação Média</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">98%</div>
            <p className="text-muted-foreground">Satisfação dos Clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;