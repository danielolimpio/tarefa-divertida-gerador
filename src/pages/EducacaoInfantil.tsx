import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Download, Star, BookOpen, Palette, Brain, Heart } from "lucide-react";

const EducacaoInfantil = () => {
  const categories = [
    {
      title: "Alfabetização Inicial",
      description: "Atividades com vogais, consoantes e formação de palavras",
      activities: ["Vogais ilustradas", "Alfabeto pontilhado", "Sílabas simples", "Palavras com imagens"],
      icon: "🔤",
      color: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      title: "Coordenação Motora",
      description: "Exercícios de psicomotricidade fina e grossa",
      activities: ["Tracejados", "Recorte e colagem", "Pintura dirigida", "Alinhavo"],
      icon: "✂️",
      color: "bg-green-50 dark:bg-green-950/20"
    },
    {
      title: "Matemática Básica",
      description: "Números, quantidades e formas geométricas",
      activities: ["Números de 0 a 10", "Maior e menor", "Formas geométricas", "Sequências"],
      icon: "🔢",
      color: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      title: "Atividades Lúdicas",
      description: "Jogos e brincadeiras educativas",
      activities: ["Ligar pontos", "Colorir", "Labirintos", "Jogo dos 7 erros"],
      icon: "🎨",
      color: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
      title: "Natureza e Sociedade",
      description: "Conhecimento do mundo ao redor",
      activities: ["Animais", "Plantas", "Família", "Profissões"],
      icon: "🌱",
      color: "bg-emerald-50 dark:bg-emerald-950/20"
    },
    {
      title: "Desenvolvimento Socioemocional",
      description: "Atividades de acolhimento e emoções",
      activities: ["Sentimentos", "Rotina escolar", "Amizade", "Identidade"],
      icon: "❤️",
      color: "bg-pink-50 dark:bg-pink-950/20"
    }
  ];

  const ageGroups = [
    { age: "2-3 anos", level: "Maternal I e II", focus: "Coordenação motora e cores" },
    { age: "4 anos", level: "Jardim I", focus: "Pré-alfabetização e números" },
    { age: "5 anos", level: "Jardim II", focus: "Alfabetização e raciocínio" },
    { age: "6 anos", level: "Pré-escola", focus: "Preparação para o fundamental" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4" variant="secondary">
                <Star className="w-3 h-3 mr-1" />
                Material Pedagógico Completo
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Atividades para Educação Infantil
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Mais de 5.000 atividades de alfabetização, coordenação motora, matemática básica 
                e desenvolvimento socioemocional para crianças de 2 a 6 anos, alinhadas à BNCC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                  <Link to="/gerador">
                    <Download className="mr-2 h-5 w-5" />
                    Gerar Atividades Grátis
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/explorar">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Ver Biblioteca Completa
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Age Groups */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Atividades por Faixa Etária</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ageGroups.map((group) => (
                <Card key={group.age} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-2">👶</div>
                    <h3 className="font-semibold text-lg mb-1">{group.age}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{group.level}</p>
                    <Badge variant="outline" className="text-xs">
                      {group.focus}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Categorias de Atividades</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore nossa coleção completa de atividades pedagógicas organizadas por área de desenvolvimento
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card key={category.title} className="hover:shadow-lg transition-all">
                  <CardHeader className={category.color}>
                    <div className="text-4xl mb-3 text-center">{category.icon}</div>
                    <CardTitle className="text-center">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="space-y-2 mb-4">
                      {category.activities.map((activity) => (
                        <div key={activity} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/gerador">
                        Acessar Atividades
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Palette className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Comece a Criar Atividades Personalizadas Agora
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Todas as atividades são gratuitas, prontas para imprimir e alinhadas à BNCC. 
                Ideal para professores, pais e educadores.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                <Link to="/gerador">
                  <Brain className="mr-2 h-5 w-5" />
                  Criar Minhas Atividades
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EducacaoInfantil;