import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Target, 
  Sparkles, 
  Users, 
  BookOpen, 
  Palette,
  Brain,
  Heart,
  Shield,
  Printer,
  Smartphone,
  Globe
} from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Economize Tempo",
      description: "Atividades prontas em segundos, sem perder horas planejando aulas",
      color: "text-blue-500 bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Target,
      title: "Alinhado à BNCC",
      description: "Todo conteúdo segue as diretrizes da Base Nacional Comum Curricular",
      color: "text-green-500 bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: Sparkles,
      title: "Personalização Total",
      description: "Adapte as atividades para cada aluno e necessidade específica",
      color: "text-purple-500 bg-purple-50 dark:bg-purple-950/20"
    },
    {
      icon: Users,
      title: "Educação Inclusiva",
      description: "Material adaptado para crianças autistas e com necessidades especiais",
      color: "text-orange-500 bg-orange-50 dark:bg-orange-950/20"
    },
    {
      icon: BookOpen,
      title: "Variedade Completa",
      description: "Mais de 10.000 atividades de todas as matérias e séries",
      color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20"
    },
    {
      icon: Palette,
      title: "Atividades Lúdicas",
      description: "Jogos, cruzadinhas e exercícios divertidos para engajar os alunos",
      color: "text-pink-500 bg-pink-50 dark:bg-pink-950/20"
    },
    {
      icon: Brain,
      title: "Desenvolvimento Cognitivo",
      description: "Exercícios de raciocínio lógico, memória e concentração",
      color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20"
    },
    {
      icon: Heart,
      title: "Socioemocional",
      description: "Atividades de acolhimento e desenvolvimento emocional",
      color: "text-red-500 bg-red-50 dark:bg-red-950/20"
    },
    {
      icon: Shield,
      title: "Conteúdo Verificado",
      description: "Material revisado por pedagogos e especialistas em educação",
      color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-950/20"
    },
    {
      icon: Printer,
      title: "Pronto para Imprimir",
      description: "PDFs otimizados em alta qualidade para impressão",
      color: "text-amber-500 bg-amber-50 dark:bg-amber-950/20"
    },
    {
      icon: Smartphone,
      title: "Acesso em Qualquer Lugar",
      description: "Use no computador, tablet ou celular quando precisar",
      color: "text-teal-500 bg-teal-50 dark:bg-teal-950/20"
    },
    {
      icon: Globe,
      title: "100% Gratuito",
      description: "Todas as funcionalidades sem custo algum para educadores",
      color: "text-lime-500 bg-lime-50 dark:bg-lime-950/20"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            Por que escolher nossa plataforma?
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            Benefícios para Professores e Pais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforme a forma como você prepara e aplica atividades escolares
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}