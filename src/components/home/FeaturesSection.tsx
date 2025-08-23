import { Card } from "@/components/ui/card";
import { Printer, Smartphone, Shield, Zap, Globe, Users } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Printer,
      title: "Pronto para Imprimir",
      description: "PDFs otimizados em alta qualidade para impressão colorida ou preto e branco"
    },
    {
      icon: Shield,
      title: "Alinhado à BNCC",
      description: "Todo conteúdo segue as diretrizes da Base Nacional Comum Curricular"
    },
    {
      icon: Zap,
      title: "Geração Instantânea",
      description: "Crie atividades personalizadas em segundos com nosso gerador inteligente"
    },
    {
      icon: Globe,
      title: "100% Gratuito",
      description: "Acesso completo a todas as atividades sem custos ou assinaturas"
    },
    {
      icon: Smartphone,
      title: "Multiplataforma",
      description: "Funciona em computadores, tablets e smartphones"
    },
    {
      icon: Users,
      title: "Inclusão Total",
      description: "Atividades adaptadas para alunos com necessidades especiais"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            Por que Escolher Nossa Plataforma?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas profissionais para educadores e pais criarem atividades escolares de qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
                <Icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}