import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Professora de Educação Infantil",
      location: "São Paulo, SP",
      content: "As atividades adaptadas para crianças autistas são incríveis! Facilitou muito meu trabalho de inclusão na sala de aula. Material de qualidade e alinhado à BNCC.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "João Santos",
      role: "Coordenador Pedagógico",
      location: "Rio de Janeiro, RJ",
      content: "Uso o gerador há 2 anos. A variedade de atividades de alfabetização e matemática é impressionante. Recomendo para todos os educadores!",
      rating: 5,
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      role: "Mãe e Educadora",
      location: "Belo Horizonte, MG",
      content: "Perfeito para reforço escolar em casa! Meus filhos adoram as atividades lúdicas e os jogos educativos. O PDF sai pronto para imprimir.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Pedro Oliveira",
      role: "Professor de AEE",
      location: "Porto Alegre, RS",
      content: "As atividades de psicomotricidade e coordenação motora são excelentes. O material adaptado para educação especial é muito bem elaborado.",
      rating: 5,
      avatar: "PO"
    },
    {
      name: "Carla Mendes",
      role: "Diretora Escolar",
      location: "Brasília, DF",
      content: "Implementamos o uso do gerador em toda a escola. Os professores economizam tempo e os alunos recebem atividades personalizadas. Excelente!",
      rating: 5,
      avatar: "CM"
    },
    {
      name: "Roberto Lima",
      role: "Pai e Professor",
      location: "Salvador, BA",
      content: "As cruzadinhas e jogos dos 7 erros são ótimos para desenvolver atenção e concentração. Uso tanto em casa quanto na escola.",
      rating: 5,
      avatar: "RL"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Quote className="w-12 h-12 text-primary/20 mx-auto mb-4" />
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            O Que Dizem os Educadores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 50.000 professores e pais confiam em nossas atividades escolares
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}