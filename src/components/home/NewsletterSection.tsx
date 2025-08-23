import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Gift, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas atividades semanais em breve.",
      });
      setEmail("");
    }
  };

  const benefits = [
    "Atividades exclusivas toda semana",
    "Material alinhado à BNCC",
    "Conteúdo para inclusão e AEE",
    "Dicas pedagógicas e novidades"
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-card p-8 lg:p-12 border-primary/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Gift className="w-8 h-8 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  100% Gratuito
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Receba Atividades Escolares Semanais no Seu Email
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Junte-se a mais de 50.000 educadores e pais. Receba gratuitamente 
                atividades de alfabetização, matemática, coordenação motora e muito mais!
              </p>

              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 h-12 text-base"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90"
                >
                  Receber Atividades Grátis
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Não enviamos spam. Você pode cancelar a qualquer momento.
                </p>
              </form>

              <div className="mt-8 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-center text-muted-foreground">
                  <span className="font-semibold text-foreground">🎁 Bônus:</span> Ao se inscrever, 
                  você recebe imediatamente nosso kit com 100 atividades de alfabetização!
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}