import React from 'react';
import { Activity } from '@/data/activities';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ActivityGeneratorProps {
  activities: Activity[];
  studentName?: string;
  className?: string;
}

export const ActivityGenerator: React.FC<ActivityGeneratorProps> = ({
  activities,
  studentName,
  className
}) => {
  const renderActivity = (activity: Activity) => {
    switch (activity.type) {
      case 'exercicios':
        return <ExerciseActivity activity={activity} />;
      case 'colorir':
        return <ColoringActivity activity={activity} />;
      case 'ligar-pontos':
        return <ConnectDotsActivity activity={activity} />;
      case 'cruzadinhas':
        return <CrosswordActivity activity={activity} />;
      case '7-erros':
        return <FindDifferencesActivity activity={activity} />;
      case 'sequencias':
        return <SequenceActivity activity={activity} />;
      case 'labirintos':
        return <MazeActivity activity={activity} />;
      case 'adaptadas':
        return <AdaptedActivity activity={activity} />;
      default:
        return <DefaultActivity activity={activity} />;
    }
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {studentName && (
        <div className="text-center p-4 bg-primary/10 rounded-lg">
          <h2 className="text-2xl font-bold">Atividades para {studentName}</h2>
          <p className="text-sm text-muted-foreground">Data: {new Date().toLocaleDateString('pt-BR')}</p>
        </div>
      )}
      
      {activities.map((activity, index) => (
        <Card key={activity.id} className="break-inside-avoid">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">
                {index + 1}. {activity.title}
              </CardTitle>
              <Badge variant={activity.difficulty === 'facil' ? 'secondary' : activity.difficulty === 'medio' ? 'default' : 'destructive'}>
                {activity.difficulty}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {renderActivity(activity)}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Componente para exercícios tradicionais
const ExerciseActivity: React.FC<{ activity: Activity }> = ({ activity }) => {
  const { content } = activity;
  
  if (content.instructions) {
    return (
      <div className="space-y-4">
        <p className="font-medium text-base">{content.instructions}</p>
        
        {/* Exercícios de completar palavras */}
        {content.words && (
          <div className="grid grid-cols-2 gap-4">
            {content.words.map((item: any, idx: number) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-lg font-mono">{item.word}</span>
                <span className="text-muted-foreground">___________</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Exercícios de matemática */}
        {content.problems && (
          <div className="grid grid-cols-2 gap-4">
            {content.problems.map((item: any, idx: number) => (
              <div key={idx} className="text-lg">
                {item.problem} _____
              </div>
            ))}
          </div>
        )}
        
        {/* Questões de múltipla escolha */}
        {content.questions && (
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm">{content.text}</p>
            </div>
            {content.questions.map((q: any, idx: number) => (
              <div key={idx} className="space-y-2">
                <p className="font-medium">{idx + 1}. {q.question}</p>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  {q.options.map((opt: string, optIdx: number) => (
                    <label key={optIdx} className="flex items-center gap-2">
                      <input type="radio" name={`q${idx}`} />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Contar objetos */}
        {content.items && (
          <div className="space-y-3">
            {content.items.map((item: any, idx: number) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="text-2xl">{item.objects}</span>
                <span className="text-lg">= _____</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  return <div>Conteúdo do exercício</div>;
};

// Componente para atividades de colorir
const ColoringActivity: React.FC<{ activity: Activity }> = ({ activity }) => {
  const { content } = activity;
  
  return (
    <div className="space-y-4">
      <p className="font-medium">{content.instructions}</p>
      <div className="flex gap-4 justify-center">
        {content.letters && content.letters.map((letter: string, idx: number) => (
          <div key={idx} className="w-20 h-20 border-4 border-dashed border-gray-400 rounded-lg flex items-center justify-center">
            <span className="text-4xl font-bold text-gray-300">{letter}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente para ligar pontos
const ConnectDotsActivity: React.FC<{ activity: Activity }> = ({ activity }) => {
  const { content } = activity;
  
  return (
    <div className="space-y-4">
      <p className="font-medium">{content.instructions}</p>
      <div className="h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">
          Pontos numerados de 1 a {content.maxNumber} formando: {content.shape}
        </p>
      </div>
    </div>
  );
};

// Componente para cruzadinhas
const CrosswordActivity: React.FC<{ activity: Activity }> = ({ activity }) => {
  const { content } = activity;
  const { grid } = content;
  
  return (
    <div className="space-y-4">
      <p className="font-medium">{content.instructions}</p>
      
      <div className="grid grid-cols-10 gap-0 max-w-md mx-auto">
        {Array.from({ length: grid.size.height * grid.size.width }).map((_, idx) => (
          <div key={idx} className="w-8 h-8 border border-gray-300"></div>
        ))}
      </div>
      
      <div className="space-y-2">
        <p className="font-medium text-sm">Dicas:</p>
        {grid.words.map((word: any, idx: number) => (
          <p key={idx} className="text-sm">
            {idx + 1}. {word.hint} ({word.direction === 'horizontal' ? '→' : '↓'})
          </p>
        ))}
      </div>
    </div>
  );
};

// Componente para encontrar diferenças
const FindDifferencesActivity: React.FC<{ activity: Activity }> = ({ activity }) => {
  const { content } = activity;
  
  return (
    <div className="space-y-4">
      <p className="font-medium">{content.instructions}</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-48 border-2 border-gray-300 rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Imagem 1: {content.imageType}</p>
        </div>
        <div className="h-48 border-2 border-gray-300 rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Imagem 2: {content.imageType} (com {content.differences} diferenças)</p>
        </div>
      </div>
    </div>
  );
};

// Componente para sequências
const SequenceActivity: React.FC<{ activity: Activity }> = ({ activity }) => {
  const { content } = activity;
  
  return (
    <div className="space-y-4">
      <p className="font-medium">{content.instructions}</p>
      {content.sequences.map((seq: any, idx: number) => (
        <div key={idx} className="flex items-center gap-2">
          {seq.pattern.map((item: string, itemIdx: number) => (
            <div key={itemIdx} className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center">
              <span className="text-xl">{item === '?' ? '?' : item}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Componente para labirintos
const MazeActivity: React.FC<{ activity: Activity }> = ({ activity }) => {
  const { content } = activity;
  
  return (
    <div className="space-y-4">
      <p className="font-medium">{content.instructions}</p>
      <div className="h-64 border-2 border-gray-300 rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Labirinto {content.mazeSize}: {content.theme}</p>
      </div>
    </div>
  );
};

// Componente para atividades adaptadas
const AdaptedActivity: React.FC<{ activity: Activity }> = ({ activity }) => {
  const { content } = activity;
  
  return (
    <div className="space-y-4">
      <p className="font-medium text-lg">{content.instructions}</p>
      
      {/* Cartões de rotina */}
      {content.cards && (
        <div className="grid grid-cols-2 gap-4">
          {content.cards.map((card: any, idx: number) => (
            <div key={idx} className="p-4 border-4 border-primary/20 rounded-lg text-center">
              <div className="text-4xl mb-2">{card.image}</div>
              <p className="font-bold text-lg">{card.text}</p>
              <div className="mt-2 w-8 h-8 border-2 border-gray-400 rounded mx-auto"></div>
            </div>
          ))}
        </div>
      )}
      
      {/* Associação de cores */}
      {content.pairs && (
        <div className="space-y-3">
          {content.pairs.map((pair: any, idx: number) => (
            <div key={idx} className="flex items-center justify-between max-w-md mx-auto">
              <div className="text-3xl">{pair.left}</div>
              <div className="flex-1 border-b-2 border-dashed border-gray-400 mx-4"></div>
              <div className="text-3xl">{pair.right}</div>
            </div>
          ))}
        </div>
      )}
      
      {/* Sequência visual */}
      {content.sequence && (
        <div className="space-y-4">
          <div className="flex gap-3 justify-center">
            {content.sequence.map((item: string, idx: number) => (
              <div key={idx} className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Observe por {content.showTime / 1000} segundos e depois repita
          </p>
        </div>
      )}
    </div>
  );
};

// Componente padrão
const DefaultActivity: React.FC<{ activity: Activity }> = ({ activity }) => {
  return (
    <div className="p-4 bg-muted rounded-lg">
      <p className="text-muted-foreground">Atividade: {activity.type}</p>
      <pre className="text-xs mt-2">{JSON.stringify(activity.content, null, 2)}</pre>
    </div>
  );
};