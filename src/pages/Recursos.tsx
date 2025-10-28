import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  FileText, 
  Video, 
  BookOpen, 
  Palette, 
  Music, 
  Calculator,
  Globe,
  Heart,
  Brain,
  Users,
  Printer,
  Smartphone,
  Monitor
} from "lucide-react";
import { Link } from "react-router-dom";

const Recursos = () => {
  const recursos = [
    {
      title: "Guias BNCC",
      description: "Documentos completos da Base Nacional Comum Curricular organizados por área",
      icon: <FileText className="h-6 w-6" />,
      items: [
        "BNCC Educação Infantil",
        "BNCC Ensino Fundamental",
        "Competências Gerais",
        "Campos de Experiência"
      ],
      color: "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400"
    },
    {
      title: "Vídeo Aulas",
      description: "Tutoriais e explicações sobre metodologias de ensino e uso de atividades",
      icon: <Video className="h-6 w-6" />,
      items: [
        "Como aplicar atividades lúdicas",
        "Alfabetização na prática",
        "Inclusão em sala de aula",
        "Psicomotricidade infantil"
      ],
      color: "bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400"
    },
    {
      title: "Planejamentos",
      description: "Modelos de planejamento anual, mensal e semanal para diferentes níveis",
      icon: <BookOpen className="h-6 w-6" />,
      items: [
        "Plano Anual Ed. Infantil",
        "Plano Semanal 1º ao 5º ano",
        "Rotina Diária Maternal",
        "Projetos Pedagógicos"
      ],
      color: "bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400"
    },
    {
      title: "Material de Apoio",
      description: "Recursos complementares para enriquecer suas aulas",
      icon: <Palette className="h-6 w-6" />,
      items: [
        "Cartazes Educativos",
        "Flashcards",
        "Jogos Pedagógicos",
        "Murais Temáticos"
      ],
      color: "bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400"
    },
    {
      title: "Músicas e Cantigas",
      description: "Coletânea de músicas infantis e cantigas populares com atividades",
      icon: <Music className="h-6 w-6" />,
      items: [
        "Cantigas de Roda",
        "Músicas para Alfabetização",
        "Canções Temáticas",
        "Parlendas e Rimas"
      ],
      color: "bg-pink-50 dark:bg-pink-950/20 text-pink-600 dark:text-pink-400"
    },
    {
      title: "Avaliações",
      description: "Modelos de avaliações diagnósticas, formativas e somativas",
      icon: <Calculator className="h-6 w-6" />,
      items: [
        "Sondagem Diagnóstica",
        "Avaliação Formativa",
        "Relatórios Individuais",
        "Fichas de Acompanhamento"
      ],
      color: "bg-cyan-50 dark:bg-cyan-950/20 text-cyan-600 dark:text-cyan-400"
    }
  ];

  const ferramentas = [
    {
      title: "Gerador de Atividades",
      description: "Crie atividades personalizadas com nossa ferramenta inteligente",
      icon: <Brain className="h-8 w-8" />,
      link: "/gerador-atividade-escolar",
      featured: true
    },
    {
      title: "Banco de Imagens",
      description: "Milhares de ilustrações educativas para suas atividades",
      icon: <Globe className="h-8 w-8" />,
      link: "#"
    },
    {
      title: "Editor de PDF",
      description: "Edite e personalize atividades em PDF",
      icon: <Printer className="h-8 w-8" />,
      link: "#"
    },
    {
      title: "App Mobile",
      description: "Acesse todas as atividades pelo celular",
      icon: <Smartphone className="h-8 w-8" />,
      link: "#"
    }
  ];

  const cursosFormacao = [
    {
      title: "Alfabetização e Letramento",
      duration: "40 horas",
      level: "Básico",
      students: 1234
    },
    {
      title: "Educação Inclusiva",
      duration: "60 horas",
      level: "Intermediário",
      students: 890
    },
    {
      title: "Neuropsicopedagogia",
      duration: "80 horas",
      level: "Avançado",
      students: 567
    },
    {
      title: "Metodologias Ativas",
      duration: "30 horas",
      level: "Básico",
      students: 2103
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 py-16 border-b">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Badge className="mb-4" variant="secondary">
                <BookOpen className="w-3 h-3 mr-1" />
                Central de Recursos
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Recursos Pedagógicos Completos
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tudo que você precisa para tornar suas aulas mais dinâmicas e eficazes. 
                Materiais, ferramentas e formação continuada em um só lugar.
              </p>
            </div>
          </div>
        </section>

        {/* Recursos Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">Materiais Pedagógicos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recursos.map((recurso, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${recurso.color} flex items-center justify-center mb-3`}>
                      {recurso.icon}
                    </div>
                    <CardTitle className="text-lg">{recurso.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{recurso.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {recurso.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Acessar Recursos
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ferramentas */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">Ferramentas Educacionais</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ferramentas.map((ferramenta, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-lg transition-all ${ferramenta.featured ? 'border-primary shadow-md' : ''}`}
                >
                  <CardContent className="p-6 text-center">
                    {ferramenta.featured && (
                      <Badge className="mb-3" variant="default">
                        Destaque
                      </Badge>
                    )}
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {ferramenta.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{ferramenta.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {ferramenta.description}
                    </p>
                    <Button 
                      variant={ferramenta.featured ? "default" : "outline"} 
                      className="w-full"
                      asChild
                    >
                      <Link to={ferramenta.link}>
                        Acessar
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cursos e Formação */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Formação Continuada</h2>
              <p className="text-muted-foreground">
                Cursos online gratuitos com certificado para professores
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cursosFormacao.map((curso, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {curso.level}
                    </Badge>
                    <h3 className="font-semibold mb-2">{curso.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Monitor className="h-3 w-3 mr-2" />
                        <span>{curso.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-2" />
                        <span>{curso.students} alunos</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Inscrever-se
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
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Transforme Sua Prática Pedagógica
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Junte-se a mais de 50.000 educadores que já utilizam nossos recursos 
              para criar aulas mais engajadoras e inclusivas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/gerador-atividade-escolar">
                  Começar Agora
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Conhecer Planos Premium
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Recursos;