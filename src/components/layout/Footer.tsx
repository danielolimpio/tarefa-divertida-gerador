import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const footerLinks = {
    "Educação Infantil": [
      { label: "Atividades Maternal", href: "/atividades-maternal" },
      { label: "Atividades Pré-escola", href: "/atividades-pre-escola" },
      { label: "Alfabetização 5 anos", href: "/atividades-alfabetizacao" },
      { label: "Coordenação Motora", href: "/atividades-coordenacao-motora" },
      { label: "Atividades Lúdicas", href: "/atividades-ludicas" },
    ],
    "Ensino Fundamental": [
      { label: "Reforço 1º ao 5º ano", href: "/reforco-escolar" },
      { label: "Atividades 6º ao 9º ano", href: "/atividades-6-9-ano" },
      { label: "Exercícios Português", href: "/atividades-portugues" },
      { label: "Exercícios Matemática", href: "/atividades-matematica" },
      { label: "Atividades Ciências", href: "/atividades-ciencias" },
    ],
    "Inclusão e AEE": [
      { label: "Atividades Autismo", href: "/atividades-autismo" },
      { label: "Atividades TDAH", href: "/atividades-tdah" },
      { label: "Deficiência Intelectual", href: "/atividades-deficiencia-intelectual" },
      { label: "Atividades Adaptadas", href: "/atividades-adaptadas" },
      { label: "Material AEE", href: "/atividades-aee" },
    ],
    "Recursos": [
      { label: "Gerador de Atividades", href: "/gerador" },
      { label: "Atividades para Imprimir", href: "/atividades-para-imprimir" },
      { label: "Material Pedagógico", href: "/material-pedagogico" },
      { label: "Planejamento Escolar", href: "/planejamento-escolar" },
      { label: "BNCC Atividades", href: "/bncc-atividades" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/50 border-t">
      {/* Newsletter Section */}
      <div className="bg-gradient-primary py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold text-primary-foreground mb-2">
              Receba Atividades Semanais Grátis
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Cadastre-se e receba material pedagógico exclusivo toda semana
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-white/95 border-white/20 placeholder:text-muted-foreground"
              />
              <Button 
                type="submit" 
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Cadastrar Grátis
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none">
                  Tarefas Escolares
                </span>
                <span className="text-xs text-muted-foreground">Gerador de Atividades</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Plataforma completa de atividades escolares para educação infantil, fundamental e médio. 
              Material pedagógico gratuito para imprimir.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 Tarefas Escolares. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </Link>
            <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">
              Contato
            </Link>
            <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
              Sobre Nós
            </Link>
          </div>
        </div>

        {/* SEO Text */}
        <div className="mt-8 pt-8 border-t">
          <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto">
            Site de atividades escolares com gerador de tarefas para imprimir. Oferecemos atividades educação infantil, 
            atividades de alfabetização, reforço escolar 1º ao 9º ano, atividades para alunos especiais, atividades 
            adaptadas para autismo, material AEE, atividades de coordenação motora, atividades lúdicas para educação 
            infantil, exercícios de português e matemática, atividades BNCC, material pedagógico gratuito para professores 
            e pais. Milhares de atividades escolares para imprimir organizadas por série, matéria e habilidade.
          </p>
        </div>
      </div>
    </footer>
  );
}