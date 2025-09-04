import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, MapPin, Calendar, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CotacaoSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    destino: "",
    localSaida: "",
    mesFerias: "",
    pessoas: "",
    observacoes: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.telefone || !formData.destino) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha pelo menos nome, telefone e destino.",
        variant: "destructive"
      });
      return;
    }

    const message = `Olá! Vim pelo site e gostaria de fazer uma cotação personalizada:

🏷️ *Nome:* ${formData.nome}
📧 *Email:* ${formData.email || 'Não informado'}
📱 *Telefone:* ${formData.telefone}
🌍 *Destino:* ${formData.destino}
📍 *Local de saída:* ${formData.localSaida || 'A definir'}
📅 *Mês de férias:* ${formData.mesFerias || 'A definir'}
👥 *Número de pessoas:* ${formData.pessoas || 'A definir'}
📝 *Observações:* ${formData.observacoes || 'Nenhuma observação adicional'}

Aguardo contato para mais detalhes!`;

    const whatsappUrl = `https://wa.me/5517996663853?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para finalizar sua cotação via WhatsApp.",
    });

    // Reset form
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      destino: "",
      localSaida: "",
      mesFerias: "",
      pessoas: "",
      observacoes: ""
    });
  };

  const destinos = [
    "Porto de Galinhas, PE",
    "Gramado, RS",
    "Maceió, AL",
    "Chile",
    "Caraíva, BA",
    "Fernando de Noronha, PE",
    "Jericoacoara, CE",
    "Europa",
    "Nordeste Brasileiro",
    "Outro destino"
  ];

  return (
    <section id="cotacao" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Solicite sua Cotação Personalizada
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 2 horas 
              com uma proposta exclusiva para você.
            </p>
          </div>

          <Card className="shadow-premium">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-playfair text-secondary">
                Conte-nos sobre sua viagem dos sonhos
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome completo *</Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="telefone">WhatsApp *</Label>
                    <Input
                      id="telefone"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="destino">Destino desejado *</Label>
                    <Select onValueChange={(value) => handleInputChange('destino', value)} required>
                      <SelectTrigger>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <SelectValue placeholder="Escolha seu destino" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {destinos.map((destino) => (
                          <SelectItem key={destino} value={destino}>
                            {destino}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="localSaida">Local de saída</Label>
                    <Input
                      id="localSaida"
                      value={formData.localSaida}
                      onChange={(e) => handleInputChange('localSaida', e.target.value)}
                      placeholder="Cidade de partida"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mesFerias">Mês de férias</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Select onValueChange={(value) => handleInputChange('mesFerias', value)}>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Escolha o mês" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Janeiro">Janeiro</SelectItem>
                          <SelectItem value="Fevereiro">Fevereiro</SelectItem>
                          <SelectItem value="Março">Março</SelectItem>
                          <SelectItem value="Abril">Abril</SelectItem>
                          <SelectItem value="Maio">Maio</SelectItem>
                          <SelectItem value="Junho">Junho</SelectItem>
                          <SelectItem value="Julho">Julho</SelectItem>
                          <SelectItem value="Agosto">Agosto</SelectItem>
                          <SelectItem value="Setembro">Setembro</SelectItem>
                          <SelectItem value="Outubro">Outubro</SelectItem>
                          <SelectItem value="Novembro">Novembro</SelectItem>
                          <SelectItem value="Dezembro">Dezembro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pessoas">Número de pessoas</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Select onValueChange={(value) => handleInputChange('pessoas', value)}>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Quantas pessoas?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 pessoa</SelectItem>
                          <SelectItem value="2">2 pessoas</SelectItem>
                          <SelectItem value="3">3 pessoas</SelectItem>
                          <SelectItem value="4">4 pessoas</SelectItem>
                          <SelectItem value="5">5 pessoas</SelectItem>
                          <SelectItem value="6+">6+ pessoas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="observacoes">Observações e preferências</Label>
                  <Textarea
                    id="observacoes"
                    value={formData.observacoes}
                    onChange={(e) => handleInputChange('observacoes', e.target.value)}
                    placeholder="Conte-nos sobre suas preferências, tipo de hospedagem, atividades de interesse, orçamento aproximado, ou qualquer informação relevante..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    variant="premium"
                    size="lg"
                    className="w-full md:w-auto px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold shadow-button"
                  >
                    <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Enviar Cotação via WhatsApp
                  </Button>
                  <p className="text-xs md:text-sm text-muted-foreground mt-4">
                    * Campos obrigatórios. Resposta garantida em até 2 horas.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2 text-secondary">Resposta Rápida</h4>
              <p className="text-sm text-muted-foreground">Retorno garantido em até 2 horas úteis</p>
            </div>
            <div className="p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2 text-secondary">Proposta Exclusiva</h4>
              <p className="text-sm text-muted-foreground">Cotação personalizada só para você</p>
            </div>
            <div className="p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2 text-secondary">Sem Compromisso</h4>
              <p className="text-sm text-muted-foreground">Cotação gratuita e sem obrigações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CotacaoSection;