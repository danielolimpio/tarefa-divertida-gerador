import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Baby, School, GraduationCap, Heart, Palette, Brain, BookOpen, Calculator } from "lucide-react";

export function CategoriesSection() {
  const categories = [
    {
      icon: Baby,
      title: "Educação Infantil",
      description: "Maternal, Pré-escola e Alfabetização",
      href: "/educacao-infantil",
      color: "bg-primary/10 text-primary",
      items: ["Maternal 1 e 2", "Jardim", "Pré-escola", "Alfabetização"]
    },
    {
      icon: School,
      title: "Ensino Fundamental",
      description: "1º ao 9º ano - Todas as matérias",
      href: "/ensino-fundamental",
      color: "bg-secondary/10 text-secondary",
      items: ["Português", "Matemática", "Ciências", "História"]
    },
    {
      icon: GraduationCap,
      title: "Ensino Médio",
      description: "Preparação para ENEM e vestibulares",
      href: "/ensino-medio",
      color: "bg-accent/10 text-accent",
      items: ["Redação", "Física", "Química", "Biologia"]
    },
    {
      icon: Heart,
      title: "Educação Inclusiva",
      description: "Atividades adaptadas e AEE",
      href: "/inclusao",
      color: "bg-success/10 text-success",
      items: ["Autismo", "TDAH", "Deficiência Intelectual", "AEE"]
    },
    {
      icon: Palette,
      title: "Atividades Lúdicas",
      description: "Jogos e brincadeiras educativas",
      href: "/atividades-ludicas",
      color: "bg-warning/10 text-warning",
      items: ["Colorir", "Cruzadinhas", "Labirintos", "7 Erros"]
    },
    {
      icon: Brain,
      title: "Desenvolvimento Cognitivo",
      description: "Raciocínio lógico e memória",
      href: "/desenvolvimento-cognitivo",
      color: "bg-info/10 text-info",
      items: ["Lógica", "Memória", "Atenção", "Concentração"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            Atividades Escolares por Categoria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa biblioteca com mais de 10.000 atividades organizadas por série, matéria e habilidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <Link to={category.href} className="block p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${category.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {category.items.map((item) => (
                          <span key={item} className="text-xs bg-muted px-2 py-1 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}