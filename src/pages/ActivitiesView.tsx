import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Printer, ArrowLeft, FileDown } from "lucide-react";
import { getActivities } from "@/data/activities";
import { generateActivityHTML, downloadPDF, printPDF } from "@/utils/pdfGenerator";
import { toast } from "@/components/ui/use-toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

// Função para converter slug em parâmetros
const parseSlug = (slug: string) => {
  const parts = slug.split('-');
  
  // Identificar série (maternal, pre-escola, 1-ano, etc)
  const grade = parts[0];
  
  // Identificar tipo (exercicios, cruzadinhas, etc)
  const typeKeywords = ['exercicios', 'cruzadinhas', 'ligar', 'pontos', 'colorir', '7', 'erros', 'sequencias', 'labirintos', 'adaptadas'];
  let type = '';
  let typeEndIndex = 1;
  
  for (let i = 1; i < parts.length; i++) {
    if (typeKeywords.includes(parts[i])) {
      if (parts[i] === 'ligar' && parts[i + 1] === 'pontos') {
        type = 'ligar-pontos';
        typeEndIndex = i + 2;
        break;
      } else if (parts[i] === '7' && parts[i + 1] === 'erros') {
        type = '7-erros';
        typeEndIndex = i + 2;
        break;
      } else if (parts[i] === 'exercicios') {
        type = 'exercicios';
        typeEndIndex = i + 1;
        break;
      } else {
        type = parts[i];
        typeEndIndex = i + 1;
        break;
      }
    }
  }
  
  // O resto é a matéria
  const subject = parts.slice(typeEndIndex).join('-');
  
  // Mapear nomes amigáveis para IDs internos
  const subjectMap: Record<string, string> = {
    'portugues': 'portugues',
    'matematica': 'matematica',
    'ciencias': 'ciencias',
    'historia': 'historia',
    'geografia': 'geografia',
    'ingles': 'ingles',
    'artes': 'artes',
    'ed-fisica': 'ed-fisica',
    'educacao-fisica': 'ed-fisica',
    'logica': 'logica',
    'memoria': 'memoria',
  };
  
  return {
    grade,
    type,
    subject: subjectMap[subject] || subject
  };
};

// Função para gerar nome legível
const getReadableName = (slug: string) => {
  const gradeMap: Record<string, string> = {
    'maternal': 'Maternal',
    'pre-escola': 'Pré-escola',
    '1-ano': '1º Ano',
    '2-ano': '2º Ano',
    '3-ano': '3º Ano',
    '4-ano': '4º Ano',
    '5-ano': '5º Ano',
    '6-ano': '6º Ano',
    '7-ano': '7º Ano',
    '8-ano': '8º Ano',
    '9-ano': '9º Ano',
    '1-medio': '1º Médio',
    '2-medio': '2º Médio',
    '3-medio': '3º Médio',
  };
  
  const typeMap: Record<string, string> = {
    'exercicios': 'Exercícios Tradicionais',
    'cruzadinhas': 'Cruzadinhas',
    'ligar-pontos': 'Ligar Pontos',
    'colorir': 'Colorir',
    '7-erros': 'Jogo dos 7 Erros',
    'sequencias': 'Sequências Lógicas',
    'labirintos': 'Labirintos',
    'adaptadas': 'Atividades Adaptadas',
  };
  
  const subjectMap: Record<string, string> = {
    'portugues': 'Português',
    'matematica': 'Matemática',
    'ciencias': 'Ciências',
    'historia': 'História',
    'geografia': 'Geografia',
    'ingles': 'Inglês',
    'artes': 'Artes',
    'ed-fisica': 'Educação Física',
    'logica': 'Lógica',
    'memoria': 'Memória',
  };
  
  const { grade, type, subject } = parseSlug(slug);
  
  return {
    grade: gradeMap[grade] || grade,
    type: typeMap[type] || type,
    subject: subjectMap[subject] || subject
  };
};

export default function ActivitiesView() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [names, setNames] = useState({ grade: '', type: '', subject: '' });

  useEffect(() => {
    if (!slug) {
      navigate('/gerador-atividade-escolar');
      return;
    }

    const { grade, type, subject } = parseSlug(slug);
    const readableNames = getReadableName(slug);
    setNames(readableNames);

    // Buscar atividades
    const fetchedActivities = getActivities({
      grade,
      subjects: [subject],
      types: [type],
      count: 10,
    });

    if (fetchedActivities.length === 0) {
      toast({
        title: "Nenhuma atividade encontrada",
        description: "Não encontramos atividades para esta combinação.",
        variant: "destructive"
      });
      navigate('/gerador-atividade-escolar');
      return;
    }

    setActivities(fetchedActivities);
    setLoading(false);
  }, [slug, navigate]);

  const handleDownloadSheet = async (activity: any, index: number) => {
    const htmlContent = generateActivityHTML([activity], '', 'colorido');
    await downloadPDF(htmlContent, `folha_${index + 1}.html`);
    
    toast({
      title: "Download iniciado",
      description: `Folha ${index + 1} baixada com sucesso.`,
    });
  };

  const handlePrintSheet = async (activity: any, index: number) => {
    const htmlContent = generateActivityHTML([activity], '', 'colorido');
    await printPDF(htmlContent);
    
    toast({
      title: "Impressão iniciada",
      description: `Folha ${index + 1} preparada para impressão.`,
    });
  };

  const handleDownloadAll = async () => {
    const htmlContent = generateActivityHTML(activities, '', 'colorido');
    await downloadPDF(htmlContent, `${slug}_todas_atividades.html`);
    
    toast({
      title: "Download iniciado",
      description: `Todas as ${activities.length} folhas baixadas com sucesso.`,
    });
  };

  const handlePrintAll = async () => {
    const htmlContent = generateActivityHTML(activities, '', 'colorido');
    await printPDF(htmlContent);
    
    toast({
      title: "Impressão iniciada",
      description: `Todas as ${activities.length} folhas preparadas para impressão.`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando atividades...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <SEO title={`${activities[0]?.subject || "Atividades"} - ${activities[0]?.grade || ""} | Atividades para Imprimir`} description={`Folhas de atividade de ${activities[0]?.subject || "ensino"} para ${activities[0]?.grade || "alunos"}. Baixe e imprima gratuitamente.`} />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header da página */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/gerador-atividade-escolar')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Gerador
          </Button>

          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {names.grade} - {names.type}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Matéria: {names.subject}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {activities.length} folhas de atividades disponíveis para impressão
            </p>
            
            <div className="flex gap-3 flex-wrap">
              <Button
                onClick={handleDownloadAll}
                size="lg"
                className="bg-gradient-primary"
              >
                <FileDown className="mr-2 h-5 w-5" />
                Baixar Todas as Folhas ({activities.length})
              </Button>
              
              <Button
                onClick={handlePrintAll}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Printer className="mr-2 h-5 w-5" />
                Imprimir Todas as Folhas ({activities.length})
              </Button>
            </div>
          </div>
        </div>

        {/* Lista de atividades */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {activities.map((activity, index) => (
            <Card key={activity.id} className="p-4 bg-background shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    Folha {index + 1}: {activity.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Dificuldade: {activity.difficulty}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleDownloadSheet(activity, index)}
                    variant="outline"
                    size="sm"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Baixar Folha {index + 1}
                  </Button>
                  
                  <Button
                    onClick={() => handlePrintSheet(activity, index)}
                    variant="outline"
                    size="sm"
                  >
                    <Printer className="mr-2 h-4 w-4" />
                    Imprimir Folha {index + 1}
                  </Button>
                </div>
              </div>

              {/* Conteúdo da atividade */}
              <div className="bg-white rounded-lg overflow-hidden border border-dashed flex justify-center p-2">
                {activity.content.imageUrl ? (
                  <img 
                    src={activity.content.imageUrl} 
                    alt={activity.title}
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="p-6 min-h-[400px]">
                    {activity.content.instructions && (
                      <p className="font-medium text-base mb-4">{activity.content.instructions}</p>
                    )}
                    
                    {/* Exercícios com letters (vogais, consoantes) */}
                    {activity.content.letters && (
                      <div className="flex gap-3 flex-wrap justify-center">
                        {activity.content.letters.map((letter: string, idx: number) => (
                          <div key={idx} className="w-16 h-16 border-2 border-gray-400 rounded-lg flex items-center justify-center">
                            <span className="text-3xl font-bold">{letter}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Exercícios com items (contar objetos) */}
                    {activity.content.items && (
                      <div className="space-y-3">
                        {activity.content.items.map((item: any, idx: number) => (
                          <div key={idx} className="flex items-center gap-4 text-2xl">
                            <span>{item.objects}</span>
                            <span>= _____</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Exercícios com palavras */}
                    {activity.content.words && (
                      <div className="space-y-2">
                        {activity.content.words.map((item: any, idx: number) => (
                          <div key={idx} className="text-base">
                            {typeof item === 'string' ? item : item.word}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Exercícios de matemática */}
                    {activity.content.problems && (
                      <div className="space-y-2">
                        {activity.content.problems.map((item: any, idx: number) => (
                          <div key={idx} className="text-base">
                            {item.problem}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Questões */}
                    {activity.content.questions && (
                      <div className="space-y-4">
                        {activity.content.text && (
                          <div className="p-4 bg-muted rounded-lg">
                            <p className="text-sm">{activity.content.text}</p>
                          </div>
                        )}
                        {activity.content.questions.map((q: any, idx: number) => (
                          <div key={idx} className="space-y-2">
                            <p className="font-medium">{idx + 1}. {q.question}</p>
                            <div className="grid grid-cols-2 gap-2 ml-4">
                              {q.options.map((opt: string, optIdx: number) => (
                                <label key={optIdx} className="flex items-center gap-2">
                                  <input type="radio" name={`q${idx}-${activity.id}`} />
                                  <span>{opt}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Rodapé com marca d'água */}
              <div className="mt-4 pt-4 border-t text-center">
                <p className="text-xs text-muted-foreground">
                  Copyright 2025 | Todos direitos reservados |{' '}
                  <a 
                    href="https://atividadeseducacaoinfantil.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://atividadeseducacaoinfantil.com
                  </a>
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Botões fixos para baixar e imprimir todas */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
          <Button
            onClick={handleDownloadAll}
            size="lg"
            className="shadow-lg bg-gradient-primary"
          >
            <FileDown className="mr-2 h-5 w-5" />
            Baixar Todas
          </Button>
          
          <Button
            onClick={handlePrintAll}
            size="lg"
            variant="outline"
            className="shadow-lg bg-background border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Printer className="mr-2 h-5 w-5" />
            Imprimir Todas
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
