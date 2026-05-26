import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download, Star, Clock, Users, BookOpen, Trophy, Heart, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Explorar = () => {
  const categories = [
    { name: "Alfabetização", count: 234, icon: "🔤", color: "bg-blue-50 dark:bg-blue-950/20" },
    { name: "Matemática", count: 189, icon: "🔢", color: "bg-green-50 dark:bg-green-950/20" },
    { name: "Psicomotricidade", count: 156, icon: "✏️", color: "bg-purple-50 dark:bg-purple-950/20" },
    { name: "Inclusão e AEE", count: 98, icon: "❤️", color: "bg-pink-50 dark:bg-pink-950/20" },
    { name: "Ciências", count: 134, icon: "🔬", color: "bg-cyan-50 dark:bg-cyan-950/20" },
    { name: "Artes", count: 167, icon: "🎨", color: "bg-orange-50 dark:bg-orange-950/20" },
    { name: "Educação Física", count: 89, icon: "⚽", color: "bg-yellow-50 dark:bg-yellow-950/20" },
    { name: "Socioemocional", count: 112, icon: "😊", color: "bg-rose-50 dark:bg-rose-950/20" },
  ];

  const activities = [
    {
      title: "Alfabetização com Vogais",
      description: "Atividades completas para introdução às vogais com exercícios lúdicos e coloridos",
      category: "Alfabetização",
      grade: "4-5 anos",
      downloads: 15234,
      rating: 4.9,
      tags: ["BNCC", "Vogais", "Alfabetização"],
      difficulty: "Fácil"
    },
    {
      title: "Tabuada Divertida - Multiplicação",
      description: "Exercícios interativos para aprender tabuada de forma divertida e eficaz",
      category: "Matemática",
      grade: "2º-3º ano",
      downloads: 12456,
      rating: 4.8,
      tags: ["Matemática", "Multiplicação", "Lúdico"],
      difficulty: "Médio"
    },
    {
      title: "Coordenação Motora Fina - Tracejados",
      description: "Atividades de tracejado para desenvolvimento da coordenação motora fina",
      category: "Psicomotricidade",
      grade: "3-4 anos",
      downloads: 10892,
      rating: 4.9,
      tags: ["Motor", "Desenvolvimento", "Inclusão"],
      difficulty: "Fácil"
    },
    {
      title: "Atividades Adaptadas para Autismo",
      description: "Material especializado com atividades estruturadas para crianças com TEA",
      category: "Inclusão e AEE",
      grade: "Todas",
      downloads: 8567,
      rating: 5.0,
      tags: ["Autismo", "TEA", "Inclusão", "AEE"],
      difficulty: "Adaptável"
    },
    {
      title: "Sequências Lógicas - Raciocínio",
      description: "Desenvolva o raciocínio lógico com sequências numéricas e de figuras",
      category: "Raciocínio",
      grade: "5-6 anos",
      downloads: 9567,
      rating: 4.7,
      tags: ["Lógica", "Cognitivo", "BNCC"],
      difficulty: "Médio"
    },
    {
      title: "Meio Ambiente - Reciclagem",
      description: "Conscientização ambiental através de atividades sobre reciclagem",
      category: "Ciências",
      grade: "1º-2º ano",
      downloads: 7234,
      rating: 4.8,
      tags: ["Meio Ambiente", "Reciclagem", "BNCC"],
      difficulty: "Fácil"
    },
    {
      title: "Atividades de Acolhimento",
      description: "Material para os primeiros dias de aula com foco em adaptação e socialização",
      category: "Socioemocional",
      grade: "Todas",
      downloads: 11891,
      rating: 5.0,
      tags: ["Acolhimento", "Adaptação", "Socioemocional"],
      difficulty: "Fácil"
    },
    {
      title: "Arte com Materiais Recicláveis",
      description: "Projetos artísticos utilizando materiais recicláveis do cotidiano",
      category: "Artes",
      grade: "6-8 anos",
      downloads: 6789,
      rating: 4.6,
      tags: ["Arte", "Reciclagem", "Criatividade"],
      difficulty: "Médio"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Explorar Atividades Escolares | Biblioteca Completa"
        description="Explore a biblioteca completa de atividades escolares por categoria, série e tipo. Material pedagógico gratuito."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Biblioteca de Atividades Escolares",
          url: "https://tarefa-divertida-gerador.lovable.app/explorar",
          inLanguage: "pt-BR",
          description: "Coleção de atividades pedagógicas organizadas por categoria, série e tipo.",
        }}
      />
      <Header />
      
      <main className="pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 py-16 border-b">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4" variant="secondary">
                <BookOpen className="w-3 h-3 mr-1" />
                Biblioteca Completa
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Explore Nossa Biblioteca de Atividades
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Mais de 1000 atividades pedagógicas alinhadas à BNCC, organizadas por categoria, 
                idade e nível de dificuldade. Encontre o material perfeito para suas aulas.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-lg shadow-lg p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Buscar atividades... Ex: alfabetização, matemática, autismo" 
                      className="pl-10"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-full lg:w-[180px]">
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="alfabetizacao">Alfabetização</SelectItem>
                      <SelectItem value="matematica">Matemática</SelectItem>
                      <SelectItem value="inclusao">Inclusão</SelectItem>
                      <SelectItem value="artes">Artes</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full lg:w-[180px]">
                      <SelectValue placeholder="Idade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="2-3">2-3 anos</SelectItem>
                      <SelectItem value="4-5">4-5 anos</SelectItem>
                      <SelectItem value="6-7">6-7 anos</SelectItem>
                      <SelectItem value="8+">8+ anos</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <Filter className="mr-2 h-4 w-4" />
                    Filtrar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">Categorias Populares</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Card key={category.name} className="hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="p-4">
                    <div className={`${category.color} rounded-lg p-3 text-3xl text-center mb-3`}>
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-sm">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">{category.count} atividades</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Activities List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">Todas as Atividades</h2>
              <div className="flex items-center gap-2">
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Mais Populares</SelectItem>
                    <SelectItem value="recent">Mais Recentes</SelectItem>
                    <SelectItem value="rating">Melhor Avaliadas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">{activity.category}</Badge>
                        <h3 className="font-semibold text-lg text-foreground mb-2">{activity.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{activity.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {activity.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{activity.grade}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          <span>{activity.downloads.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                          <span>{activity.rating}</span>
                        </div>
                      </div>
                      <Badge variant={
                        activity.difficulty === "Fácil" ? "secondary" :
                        activity.difficulty === "Médio" ? "default" :
                        activity.difficulty === "Difícil" ? "destructive" : "outline"
                      }>
                        {activity.difficulty}
                      </Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1" variant="outline" size="sm" asChild>
                        <Link to="/gerador-atividade-escolar">
                          <Download className="mr-2 h-4 w-4" />
                          Baixar
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Carregar Mais Atividades
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">1000+</p>
                <p className="text-sm text-muted-foreground">Atividades</p>
              </div>
              <div>
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">50k+</p>
                <p className="text-sm text-muted-foreground">Professores</p>
              </div>
              <div>
                <Download className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">500k+</p>
                <p className="text-sm text-muted-foreground">Downloads</p>
              </div>
              <div>
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground">Avaliação</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explorar;