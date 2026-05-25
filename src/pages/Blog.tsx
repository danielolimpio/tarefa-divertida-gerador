import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ChevronRight, BookOpen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "Como Implementar Atividades de Inclusão em Sala de Aula",
    excerpt: "Descubra estratégias práticas e eficazes para criar um ambiente escolar inclusivo, com atividades adaptadas para alunos com diferentes necessidades de aprendizagem.",
    author: "Prof. Maria Silva",
    date: "15 de Janeiro, 2024",
    readTime: "8 min de leitura",
    category: "Inclusão",
    image: "🌈"
  };

  const posts = [
    {
      title: "10 Atividades de Alfabetização Alinhadas à BNCC",
      excerpt: "Conheça atividades práticas e lúdicas para auxiliar no processo de alfabetização seguindo as diretrizes da Base Nacional Comum Curricular.",
      author: "Prof. João Santos",
      date: "14 de Janeiro, 2024",
      readTime: "5 min",
      category: "Alfabetização",
      image: "📚"
    },
    {
      title: "Desenvolvimento da Coordenação Motora na Educação Infantil",
      excerpt: "Entenda a importância da psicomotricidade e confira atividades para desenvolver a coordenação motora fina e grossa.",
      author: "Prof. Ana Costa",
      date: "13 de Janeiro, 2024",
      readTime: "6 min",
      category: "Psicomotricidade",
      image: "✏️"
    },
    {
      title: "Atividades Lúdicas para Ensinar Matemática",
      excerpt: "Transforme o ensino de matemática em uma experiência divertida com jogos e atividades práticas para diferentes idades.",
      author: "Prof. Carlos Lima",
      date: "12 de Janeiro, 2024",
      readTime: "7 min",
      category: "Matemática",
      image: "🔢"
    },
    {
      title: "Adaptação Escolar: Primeiras Semanas de Aula",
      excerpt: "Dicas e atividades para tornar o período de adaptação mais tranquilo e acolhedor para alunos e famílias.",
      author: "Prof. Paula Mendes",
      date: "11 de Janeiro, 2024",
      readTime: "5 min",
      category: "Socioemocional",
      image: "❤️"
    },
    {
      title: "Educação Ambiental: Projetos para Sala de Aula",
      excerpt: "Inspire seus alunos com projetos práticos sobre sustentabilidade e preservação do meio ambiente.",
      author: "Prof. Roberto Dias",
      date: "10 de Janeiro, 2024",
      readTime: "6 min",
      category: "Ciências",
      image: "🌱"
    },
    {
      title: "TEA: Estratégias para Inclusão de Alunos Autistas",
      excerpt: "Compreenda o Transtorno do Espectro Autista e aprenda técnicas para promover a inclusão efetiva em sala de aula.",
      author: "Dra. Fernanda Oliveira",
      date: "9 de Janeiro, 2024",
      readTime: "10 min",
      category: "Inclusão",
      image: "🧩"
    }
  ];

  const categories = [
    { name: "Alfabetização", count: 45 },
    { name: "Matemática", count: 38 },
    { name: "Inclusão", count: 32 },
    { name: "Psicomotricidade", count: 28 },
    { name: "BNCC", count: 25 },
    { name: "Socioemocional", count: 22 },
    { name: "Ciências", count: 18 },
    { name: "Artes", count: 15 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Blog Educacional | Artigos e Dicas para Educadores" description="Artigos sobre educação infantil, metodologias de ensino, inclusão escolar, alfabetização e desenvolvimento pedagógico." />
      <Header />
      
      <main className="pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 py-16 border-b">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Badge className="mb-4" variant="secondary">
                <BookOpen className="w-3 h-3 mr-1" />
                Blog Educacional
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Artigos e Dicas para Educadores
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Conteúdo especializado sobre educação infantil, metodologias de ensino, 
                inclusão escolar e desenvolvimento pedagógico
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 flex items-center justify-center text-8xl">
                  {featuredPost.image}
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="mb-4 w-fit">{featuredPost.category}</Badge>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="w-fit">
                    Ler Artigo Completo
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Posts */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-8">Artigos Recentes</h2>
                <div className="space-y-6">
                  {posts.map((post, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                      <div className="flex">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-32 flex items-center justify-center text-5xl">
                          {post.image}
                        </div>
                        <CardContent className="flex-1 p-6">
                          <Badge variant="outline" className="mb-2">{post.category}</Badge>
                          <h3 className="font-semibold text-lg text-foreground mb-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span>{post.author}</span>
                              <span>•</span>
                              <span>{post.date}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              Ler mais
                              <ChevronRight className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
                
                {/* Load More */}
                <div className="text-center mt-8">
                  <Button variant="outline" size="lg">
                    Carregar Mais Artigos
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Categories */}
                <Card>
                  <CardHeader>
                    <h3 className="font-semibold text-lg">Categorias</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.name} className="flex items-center justify-between p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                          <span className="text-sm">{category.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Newsletter Semanal</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Receba os melhores artigos e atividades toda semana
                    </p>
                    <input
                      type="email"
                      placeholder="Seu e-mail"
                      className="w-full px-3 py-2 rounded-lg border bg-background mb-3"
                    />
                    <Button className="w-full">
                      Inscrever-se
                    </Button>
                  </CardContent>
                </Card>

                {/* Trending */}
                <Card>
                  <CardHeader>
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Mais Lidos
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {posts.slice(0, 3).map((post, index) => (
                        <div key={index} className="pb-3 border-b last:border-0">
                          <h4 className="text-sm font-medium hover:text-primary cursor-pointer">
                            {post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {post.readTime} • {post.date}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;