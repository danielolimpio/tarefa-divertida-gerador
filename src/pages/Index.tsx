import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code2, Palette, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Bem-vindo ao Seu Projeto
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Uma aplicação moderna construída com React, TypeScript e Tailwind CSS
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Começar Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Recursos Principais</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Rápido e Eficiente</CardTitle>
              <CardDescription>
                Construído com as tecnologias mais modernas para máxima performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Vite como bundler para desenvolvimento rápido e builds otimizadas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code2 className="h-10 w-10 text-primary mb-4" />
              <CardTitle>TypeScript</CardTitle>
              <CardDescription>
                Type safety e melhor experiência de desenvolvimento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Código mais confiável e manutenível com tipagem estática
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Palette className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Design Moderno</CardTitle>
              <CardDescription>
                Interface bonita e responsiva com Tailwind CSS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Componentes reutilizáveis e design system consistente
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-muted rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comece a construir sua aplicação agora mesmo com todos os recursos necessários
          </p>
          <Button size="lg" className="px-8">
            Iniciar Projeto
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
