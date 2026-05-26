import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen, GraduationCap, Palette, Eye, Brain } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { getActivities } from "@/data/activities";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

// Função para criar slug amigável para SEO
const createSlug = (grade: string, type: string, subject: string) => {
  return `${grade}-${type}-${subject}`;
};

const Index = () => {
  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedActivityType, setSelectedActivityType] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const grades = [
    { value: "maternal", label: "Maternal", icon: "🍼" },
    { value: "pre-escola", label: "Pré-escola", icon: "🎨" },
    { value: "1-ano", label: "1º Ano", icon: "📚" },
    { value: "2-ano", label: "2º Ano", icon: "📖" },
    { value: "3-ano", label: "3º Ano", icon: "✏️" },
    { value: "4-ano", label: "4º Ano", icon: "📝" },
    { value: "5-ano", label: "5º Ano", icon: "📊" },
    { value: "6-ano", label: "6º Ano", icon: "🔬" },
    { value: "7-ano", label: "7º Ano", icon: "🌍" },
    { value: "8-ano", label: "8º Ano", icon: "⚗️" },
    { value: "9-ano", label: "9º Ano", icon: "🎓" },
    { value: "1-medio", label: "1º Médio", icon: "🏆" },
    { value: "2-medio", label: "2º Médio", icon: "🚀" },
    { value: "3-medio", label: "3º Médio", icon: "🎯" },
  ];

  const activityTypes = [
    { value: "exercicios", label: "Exercícios Tradicionais", description: "Questões e problemas" },
    { value: "cruzadinhas", label: "Cruzadinhas", description: "Palavras cruzadas" },
    { value: "ligar-pontos", label: "Ligar Pontos", description: "Formar figuras" },
    { value: "colorir", label: "Colorir", description: "Figuras e letras" },
    { value: "7-erros", label: "Jogo dos 7 Erros", description: "Encontrar diferenças" },
    { value: "sequencias", label: "Sequências Lógicas", description: "Padrões e lógica" },
    { value: "labirintos", label: "Labirintos", description: "Encontrar o caminho" },
    { value: "adaptadas", label: "Atividades Adaptadas", description: "Para crianças autistas" },
  ];

  const subjects = [
    { value: "portugues", label: "Português", icon: "📝" },
    { value: "matematica", label: "Matemática", icon: "🔢" },
    { value: "ciencias", label: "Ciências", icon: "🔬" },
    { value: "historia", label: "História", icon: "📜" },
    { value: "geografia", label: "Geografia", icon: "🌍" },
    { value: "ingles", label: "Inglês", icon: "🇬🇧" },
    { value: "artes", label: "Artes", icon: "🎨" },
    { value: "ed-fisica", label: "Educação Física", icon: "⚽" },
    { value: "logica", label: "Lógica", icon: "🧩" },
    { value: "memoria", label: "Memória", icon: "🧠" },
  ];

  const handleViewActivities = () => {
    if (!selectedGrade) {
      toast({
        title: "Atenção",
        description: "Por favor, selecione uma série escolar.",
        variant: "destructive"
      });
      return;
    }

    if (!selectedActivityType) {
      toast({
        title: "Atenção",
        description: "Por favor, selecione um tipo de atividade.",
        variant: "destructive"
      });
      return;
    }

    if (!selectedSubject) {
      toast({
        title: "Atenção",
        description: "Por favor, selecione uma matéria.",
        variant: "destructive"
      });
      return;
    }

    // Verificar se existem atividades
    const activities = getActivities({
      grade: selectedGrade,
      subjects: [selectedSubject],
      types: [selectedActivityType],
      count: 10,
    });

    if (activities.length === 0) {
      toast({
        title: "Nenhuma atividade encontrada",
        description: "Ainda não temos atividades para esta combinação. Tente outras opções.",
        variant: "destructive"
      });
      return;
    }

    // Criar slug e navegar
    const slug = createSlug(selectedGrade, selectedActivityType, selectedSubject);
    navigate(`/atividades/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <SEO
        title="Gerador de Atividade Escolar | Crie Tarefas Personalizadas"
        description="Crie atividades escolares personalizadas por série, tipo e matéria. Gere e imprima tarefas em poucos cliques."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Gerador de Atividades Escolares",
          applicationCategory: "EducationalApplication",
          operatingSystem: "Web",
          url: "https://tarefa-divertida-gerador.lovable.app/gerador-atividade-escolar",
          offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
          description: "Crie atividades escolares personalizadas por série, tipo e matéria.",
        }}
      />
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Grade Selection */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Série Escolar
                </CardTitle>
                <CardDescription>Selecione o ano ou série do aluno</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedGrade} onValueChange={setSelectedGrade}>
                  <div className="grid gap-2">
                    {grades.map((grade) => (
                      <div key={grade.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={grade.value} id={grade.value} />
                        <Label 
                          htmlFor={grade.value} 
                          className="flex items-center gap-2 cursor-pointer flex-1 p-2 rounded-md hover:bg-muted transition-colors"
                        >
                          <span className="text-lg">{grade.icon}</span>
                          {grade.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Activity Types and Subjects */}
          <div className="lg:col-span-1 space-y-6">
            {/* Activity Types */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Tipo de Atividade
                </CardTitle>
                <CardDescription>Escolha um tipo de exercício</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedActivityType} onValueChange={setSelectedActivityType}>
                  <div className="space-y-3">
                    {activityTypes.map((activity) => (
                      <div key={activity.value} className="flex items-start space-x-2">
                        <RadioGroupItem value={activity.value} id={activity.value} />
                        <Label 
                          htmlFor={activity.value}
                          className="cursor-pointer flex-1"
                        >
                          <div className="font-medium">{activity.label}</div>
                          <div className="text-xs text-muted-foreground">{activity.description}</div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Subjects */}
            <Card>
              <CardHeader>
                <CardTitle>Matérias e Habilidades</CardTitle>
                <CardDescription>Selecione uma disciplina</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedSubject} onValueChange={setSelectedSubject}>
                  <div className="grid grid-cols-2 gap-3">
                    {subjects.map((subject) => (
                      <div key={subject.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={subject.value} id={subject.value} />
                        <Label 
                          htmlFor={subject.value}
                          className="cursor-pointer flex items-center gap-1 text-sm"
                        >
                          <span>{subject.icon}</span>
                          {subject.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Summary and Generate */}
          <div className="lg:col-span-1 space-y-6">

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle>Resumo da Atividade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Série:</span>{" "}
                  {grades.find(g => g.value === selectedGrade)?.label || "Não selecionada"}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Tipo:</span>{" "}
                  {selectedActivityType ? activityTypes.find(t => t.value === selectedActivityType)?.label : "Não selecionado"}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Matéria:</span>{" "}
                  {selectedSubject ? subjects.find(s => s.value === selectedSubject)?.label : "Não selecionada"}
                </div>
              </CardContent>
            </Card>

            {/* Generate Button */}
            <Button 
              onClick={handleViewActivities}
              className="w-full" 
              size="lg"
            >
              <Eye className="mr-2 h-5 w-5" />
              Ver Atividades
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;