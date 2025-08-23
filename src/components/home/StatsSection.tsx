import { Card } from "@/components/ui/card";
import { Users, FileText, Download, Award, Star, School, Clock, Heart } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "50.000+",
      label: "Professores Ativos",
      description: "Educadores usando diariamente",
      color: "text-blue-500"
    },
    {
      icon: FileText,
      value: "10.000+",
      label: "Atividades Disponíveis",
      description: "Material pedagógico completo",
      color: "text-green-500"
    },
    {
      icon: Download,
      value: "2M+",
      label: "Downloads Realizados",
      description: "PDFs baixados mensalmente",
      color: "text-purple-500"
    },
    {
      icon: School,
      value: "5.000+",
      label: "Escolas Parceiras",
      description: "Instituições cadastradas",
      color: "text-orange-500"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Avaliação Média",
      description: "Satisfação dos usuários",
      color: "text-yellow-500"
    },
    {
      icon: Award,
      value: "100%",
      label: "Alinhado à BNCC",
      description: "Conteúdo atualizado",
      color: "text-emerald-500"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Acesso Ilimitado",
      description: "Disponível sempre",
      color: "text-indigo-500"
    },
    {
      icon: Heart,
      value: "100%",
      label: "Gratuito",
      description: "Sem custos ocultos",
      color: "text-pink-500"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            Números que Fazem a Diferença na Educação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A maior plataforma de atividades escolares do Brasil, transformando a educação infantil e fundamental
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all group hover:-translate-y-1">
              <div className={`inline-flex p-3 rounded-full bg-background mb-4 ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}