import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Download, Star, Clock, Users, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Favoritos = () => {
  const { toast } = useToast();
  const [favoritos, setFavoritos] = useState([
    {
      id: 1,
      title: "Alfabetização com Vogais",
      category: "Educação Infantil",
      grade: "4-5 anos",
      downloads: "15.234",
      rating: 4.9,
      image: "🔤",
      tags: ["Português", "Alfabetização", "BNCC"],
      color: "bg-blue-50 dark:bg-blue-950/20",
      savedAt: "2024-01-15"
    },
    {
      id: 2,
      title: "Coordenação Motora Fina",
      category: "Psicomotricidade",
      grade: "3-4 anos",
      downloads: "10.892",
      rating: 4.9,
      image: "✏️",
      tags: ["Motor", "Desenvolvimento", "Inclusão"],
      color: "bg-purple-50 dark:bg-purple-950/20",
      savedAt: "2024-01-14"
    },
    {
      id: 3,
      title: "Atividades Adaptadas para Autismo",
      category: "Inclusão e AEE",
      grade: "Todas",
      downloads: "8.567",
      rating: 5.0,
      image: "🧩",
      tags: ["Autismo", "TEA", "Inclusão"],
      color: "bg-pink-50 dark:bg-pink-950/20",
      savedAt: "2024-01-13"
    }
  ]);

  const handleRemoveFavorito = (id: number) => {
    setFavoritos(favoritos.filter(f => f.id !== id));
    toast({
      title: "Removido dos favoritos",
      description: "A atividade foi removida da sua lista de favoritos.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Meus Favoritos | Atividades Escolares Salvas" description="Acesse rapidamente as atividades escolares que você salvou para usar em suas aulas." />
      <Header />
      
      <main className="pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 py-16 border-b">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Badge className="mb-4" variant="secondary">
                <Heart className="w-3 h-3 mr-1" />
                Meus Favoritos
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Suas Atividades Favoritas
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Acesse rapidamente as atividades que você salvou para usar em suas aulas
              </p>
            </div>
          </div>
        </section>

        {/* Favoritos Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {favoritos.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-8">
                  <p className="text-muted-foreground">
                    {favoritos.length} {favoritos.length === 1 ? 'atividade salva' : 'atividades salvas'}
                  </p>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar Todas
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoritos.map((activity) => (
                    <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-all">
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
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Download className="h-3 w-3" />
                              <span>{activity.downloads}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                              <span>{activity.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span className="text-xs">Salvo em {new Date(activity.savedAt).toLocaleDateString('pt-BR')}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1" variant="outline" size="sm" asChild>
                            <Link to="/gerador-atividade-escolar">
                              <Download className="mr-2 h-4 w-4" />
                              Baixar
                            </Link>
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleRemoveFavorito(activity.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Nenhuma atividade favorita ainda
                </h2>
                <p className="text-muted-foreground mb-6">
                  Explore nossa biblioteca e salve suas atividades preferidas para acessá-las rapidamente
                </p>
                <Button size="lg" asChild>
                  <Link to="/explorar">
                    Explorar Atividades
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Favoritos;