import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Star, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function PopularActivitiesSection() {
  const activities = [
    {
      title: "Alfabetização com Vogais",
      category: "Educação Infantil",
      grade: "4-5 anos",
      downloads: "15.234",
      rating: 4.9,
      image: "🔤",
      tags: ["Português", "Alfabetização", "BNCC"],
      color: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      title: "Tabuada Divertida",
      category: "Matemática",
      grade: "2º-3º ano",
      downloads: "12.456",
      rating: 4.8,
      image: "🔢",
      tags: ["Matemática", "Multiplicação", "Lúdico"],
      color: "bg-green-50 dark:bg-green-950/20"
    },
    {
      title: "Coordenação Motora Fina",
      category: "Psicomotricidade",
      grade: "3-4 anos",
      downloads: "10.892",
      rating: 4.9,
      image: "✏️",
      tags: ["Motor", "Desenvolvimento", "Inclusão"],
      color: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      title: "Sequências Lógicas",
      category: "Raciocínio",
      grade: "5-6 anos",
      downloads: "9.567",
      rating: 4.7,
      image: "🧩",
      tags: ["Lógica", "Cognitivo", "Adaptada"],
      color: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
      title: "Meio Ambiente BNCC",
      category: "Ciências",
      grade: "1º-2º ano",
      downloads: "8.234",
      rating: 4.8,
      image: "🌱",
      tags: ["Ciências", "Natureza", "BNCC"],
      color: "bg-emerald-50 dark:bg-emerald-950/20"
    },
    {
      title: "Atividades de Acolhimento",
      category: "Socioemocional",
      grade: "Todas",
      downloads: "7.891",
      rating: 5.0,
      image: "❤️",
      tags: ["Acolhimento", "Adaptação", "Inclusão"],
      color: "bg-pink-50 dark:bg-pink-950/20"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            <Star className="w-3 h-3 mr-1" />
            Mais Baixadas
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            Atividades Escolares Mais Populares
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milhares de professores já baixaram estas atividades pedagógicas alinhadas à BNCC
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className={`h-32 ${activity.color} flex items-center justify-center text-6xl`}>
                {activity.image}
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{activity.category}</p>
                    <h3 className="font-semibold text-lg text-foreground">{activity.title}</h3>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {activity.grade}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {activity.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Download className="h-3 w-3" />
                    <span>{activity.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                    <span>{activity.rating}</span>
                  </div>
                </div>

                <Button className="w-full" variant="outline" size="sm" asChild>
                  <Link to="/gerador-atividade-escolar">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar Grátis
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" asChild>
            <Link to="/gerador-atividade-escolar">
              Ver Todas as Atividades
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}