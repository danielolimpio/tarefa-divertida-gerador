import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, GraduationCap, Palette, Brain, Printer, Download } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { getActivities } from "@/data/activities";
import { generateActivityHTML, downloadPDF } from "@/utils/pdfGenerator";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ActivityGenerator } from "@/components/ActivityGenerator";

const Index = () => {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedActivityType, setSelectedActivityType] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [exerciseCount, setExerciseCount] = useState("10");
  const [studentName, setStudentName] = useState("");

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

  const handleActivityTypeToggle = (value: string) => {
    setSelectedActivityType(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const handleSubjectToggle = (value: string) => {
    setSelectedSubjects(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const handleGeneratePDF = () => {
    if (!selectedGrade) {
      toast({
        title: "Atenção",
        description: "Por favor, selecione uma série escolar.",
        variant: "destructive"
      });
      return;
    }

    if (selectedActivityType.length === 0) {
      toast({
        title: "Atenção",
        description: "Por favor, selecione pelo menos um tipo de atividade.",
        variant: "destructive"
      });
      return;
    }

    if (selectedSubjects.length === 0) {
      toast({
        title: "Atenção",
        description: "Por favor, selecione pelo menos uma matéria.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Gerando PDF...",
      description: "Suas atividades estão sendo preparadas para impressão!",
    });

    // Aqui será implementada a lógica de geração do PDF
    setTimeout(() => {
      toast({
        title: "PDF Gerado com Sucesso!",
        description: "O download iniciará em instantes.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Gerador de Tarefas Escolares</h1>
                <p className="text-sm text-muted-foreground">Atividades educativas e lúdicas para impressão</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Brain className="mr-2 h-4 w-4" />
              Atividades Especiais
            </Button>
          </div>
        </div>
      </header>

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
                <CardDescription>Escolha os tipos de exercícios</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activityTypes.map((activity) => (
                    <div key={activity.value} className="flex items-start space-x-2">
                      <Checkbox
                        id={activity.value}
                        checked={selectedActivityType.includes(activity.value)}
                        onCheckedChange={() => handleActivityTypeToggle(activity.value)}
                      />
                      <div className="flex-1">
                        <Label 
                          htmlFor={activity.value}
                          className="cursor-pointer"
                        >
                          <div className="font-medium">{activity.label}</div>
                          <div className="text-xs text-muted-foreground">{activity.description}</div>
                        </Label>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Subjects */}
            <Card>
              <CardHeader>
                <CardTitle>Matérias e Habilidades</CardTitle>
                <CardDescription>Selecione as disciplinas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {subjects.map((subject) => (
                    <div key={subject.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={subject.value}
                        checked={selectedSubjects.includes(subject.value)}
                        onCheckedChange={() => handleSubjectToggle(subject.value)}
                      />
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
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Configuration and Generate */}
          <div className="lg:col-span-1 space-y-6">
            {/* Configuration */}
            <Card>
              <CardHeader>
                <CardTitle>Configurações</CardTitle>
                <CardDescription>Personalize suas atividades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student-name">Nome do Aluno (opcional)</Label>
                  <input
                    id="student-name"
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Digite o nome do aluno"
                    className="w-full px-3 py-2 border rounded-md bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="exercise-count">Quantidade de Exercícios</Label>
                  <Select value={exerciseCount} onValueChange={setExerciseCount}>
                    <SelectTrigger id="exercise-count">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 exercícios</SelectItem>
                      <SelectItem value="10">10 exercícios</SelectItem>
                      <SelectItem value="15">15 exercícios</SelectItem>
                      <SelectItem value="20">20 exercícios</SelectItem>
                      <SelectItem value="30">30 exercícios</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Formato de Impressão</Label>
                  <RadioGroup defaultValue="colorido">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="colorido" id="colorido" />
                      <Label htmlFor="colorido">Colorido</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pb" id="pb" />
                      <Label htmlFor="pb">Preto e Branco</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

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
                  <span className="font-medium">Tipos:</span>{" "}
                  {selectedActivityType.length > 0 ? `${selectedActivityType.length} selecionados` : "Nenhum"}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Matérias:</span>{" "}
                  {selectedSubjects.length > 0 ? `${selectedSubjects.length} selecionadas` : "Nenhuma"}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Quantidade:</span> {exerciseCount} exercícios
                </div>
              </CardContent>
            </Card>

            {/* Generate Buttons */}
            <div className="space-y-3">
              <Button 
                onClick={handleGeneratePDF}
                className="w-full" 
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Gerar PDF para Impressão
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => toast({ title: "Visualização", description: "Abrindo prévia das atividades..." })}
              >
                <Printer className="mr-2 h-4 w-4" />
                Visualizar Antes de Imprimir
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;