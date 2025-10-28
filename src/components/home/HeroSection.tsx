import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Star, Users, FileText, Award } from "lucide-react";
import { Link } from "react-router-dom";
export function HeroSection() {
  const stats = [{
    icon: Users,
    value: "50.000+",
    label: "Professores"
  }, {
    icon: FileText,
    value: "10.000+",
    label: "Atividades"
  }, {
    icon: Star,
    value: "4.9/5",
    label: "Avaliação"
  }, {
    icon: Award,
    value: "100%",
    label: "Gratuito"
  }];
  return <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1">
                <Star className="w-3 h-3 mr-1" />
                Plataforma #1 em Atividades Escolares
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Gerador de <span className="text-primary">Atividades Escolares</span> para Imprimir
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Crie atividades personalizadas para educação infantil, fundamental e médio. 
                Material pedagógico alinhado à BNCC com exercícios adaptados para inclusão.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                <Link to="/gerador-atividade-escolar">
                  <Download className="mr-2 h-5 w-5" />
                  Gerar Atividades Grátis
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/explorar">
                  Explorar Biblioteca
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t">
              {stats.map(stat => <div key={stat.label} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <stat.icon className="h-4 w-4 text-primary" />
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>)}
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative lg:pl-8">
            <div className="relative bg-gradient-card rounded-2xl p-8 shadow-xl animate-bounce-in">
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-3 shadow-lg">
                <Award className="h-6 w-6" />
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg">📚</span>
                    </div>
                    <div>
                      <p className="font-semibold text-3xl">Atividade de Alfabetização</p>
                      <p className="text-muted-foreground text-xl">1º Ano - Português</p>
                    </div>
                  </div>
                  
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-3 rounded-2xl">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg">🔢</span>
                    </div>
                    <div>
                      <p className="font-semibold text-2xl">Exercícios de Matemática</p>
                      <p className="text-muted-foreground text-xl">3º Ano - Multiplicação</p>
                    </div>
                  </div>
                  
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-lg">🎨</span>
                    </div>
                    <div>
                      <p className="font-semibold text-2xl">Atividade Lúdica</p>
                      <p className="text-muted-foreground text-xl">Educação Infantil - Colorir</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}