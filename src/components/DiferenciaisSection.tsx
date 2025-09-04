import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Sparkles, 
  Award, 
  CreditCard, 
  MessageCircle, 
  Heart,
  Shield,
  Clock
} from "lucide-react";

const DiferenciaisSection = () => {
  const diferenciais = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Atendimento Humano e Acolhedor",
      description: "Nossa equipe se dedica a entender seus sonhos e transformá-los em realidade, com um toque pessoal que faz toda a diferença."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Cotações Personalizadas Exclusivas",
      description: "Cada proposta é única e criada especialmente para você. Não trabalhamos com pacotes prontos - sua viagem é exclusiva."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Consultoria Exclusiva Premium",
      description: "Selecionamos cuidadosamente cada detalhe para garantir experiências de qualidade excepcional e momentos inesquecíveis."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Parcelamento Facilitado até 12x",
      description: "Realize seus sonhos hoje e pague de forma facilitada, com condições especiais sem comprometer seu orçamento."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Suporte Rápido via WhatsApp",
      description: "Atendimento ágil 7 dias por semana através do WhatsApp, para tirar dúvidas e dar todo o suporte necessário."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Experiência Única para Cada Perfil",
      description: "Entendemos que cada viajante é único. Criamos experiências sob medida para casais, famílias, grupos e viajantes solo."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança e Confiabilidade",
      description: "Parceiros certificados e processos seguros para garantir que sua viagem aconteça sem preocupações."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Acompanhamento Completo",
      description: "Do primeiro contato até o retorno da viagem, estamos com você em cada etapa da sua jornada."
    }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Por que escolher a Miketur?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos mais que uma agência de viagens. Somos seus parceiros na criação de memórias inesquecíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((diferencial, index) => (
            <Card 
              key={diferencial.title}
              className="text-center p-6 shadow-card hover:shadow-premium transition-smooth group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-smooth">
                  <div className="text-primary group-hover:text-white transition-smooth">
                    {diferencial.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-secondary">
                  {diferencial.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {diferencial.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-premium max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4 text-secondary">
              Pronto para viver uma experiência única?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para criar a viagem dos seus sonhos, 
              com toda a atenção e cuidado que você merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5517996663853?text=Olá,%20Vim%20pelo%20site%20e%20quero%20fazer%20uma%20cotação"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 gradient-cta text-secondary font-semibold rounded-md shadow-button hover:scale-105 transition-bounce"
              >
                Falar com Especialista
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('cotacao');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-smooth"
              >
                Solicitar Cotação
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;