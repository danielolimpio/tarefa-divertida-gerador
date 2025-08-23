import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, ChevronDown, Search, BookOpen, Users, Heart, Download } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationItems = [
    {
      title: "Educação Infantil",
      href: "/educacao-infantil",
      description: "Atividades para maternal, jardim e pré-escola",
      items: [
        { title: "Maternal", href: "/atividades-maternal" },
        { title: "Jardim 1 e 2", href: "/atividades-jardim" },
        { title: "Pré-escola", href: "/atividades-pre-escola" },
        { title: "Alfabetização", href: "/atividades-alfabetizacao" },
      ]
    },
    {
      title: "Ensino Fundamental",
      href: "/ensino-fundamental",
      description: "Atividades do 1º ao 9º ano",
      items: [
        { title: "1º ao 3º Ano", href: "/atividades-1-3-ano" },
        { title: "4º e 5º Ano", href: "/atividades-4-5-ano" },
        { title: "6º ao 9º Ano", href: "/atividades-6-9-ano" },
        { title: "Reforço Escolar", href: "/reforco-escolar" },
      ]
    },
    {
      title: "Por Matéria",
      href: "/materias",
      description: "Atividades organizadas por disciplina",
      items: [
        { title: "Português", href: "/atividades-portugues" },
        { title: "Matemática", href: "/atividades-matematica" },
        { title: "Ciências", href: "/atividades-ciencias" },
        { title: "História e Geografia", href: "/atividades-historia-geografia" },
      ]
    },
    {
      title: "Inclusão",
      href: "/inclusao",
      description: "Atividades adaptadas e AEE",
      items: [
        { title: "Autismo", href: "/atividades-autismo" },
        { title: "TDAH", href: "/atividades-tdah" },
        { title: "Deficiência Intelectual", href: "/atividades-deficiencia-intelectual" },
        { title: "AEE", href: "/atividades-aee" },
      ]
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none text-foreground">
                Tarefas Escolares
              </span>
              <span className="text-xs text-muted-foreground">Gerador de Atividades</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="h-auto px-3 py-2">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4">
                        <div className="text-sm font-medium text-muted-foreground">
                          {item.description}
                        </div>
                        {item.items.map((subItem) => (
                          <NavigationMenuLink key={subItem.href} asChild>
                            <Link
                              to={subItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {subItem.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/recursos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </Link>
            <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:bg-accent"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/favoritos">
                <Heart className="mr-2 h-4 w-4" />
                Favoritos
              </Link>
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90" asChild>
              <Link to="/gerador">
                <Download className="mr-2 h-4 w-4" />
                Gerar Atividades
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigationItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <Link
                      to={item.href}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                    <div className="pl-4 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t space-y-3">
                  <Link
                    to="/recursos"
                    className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Recursos
                  </Link>
                  <Link
                    to="/blog"
                    className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Button className="w-full bg-gradient-primary" asChild>
                    <Link to="/gerador" onClick={() => setIsOpen(false)}>
                      <Download className="mr-2 h-4 w-4" />
                      Gerar Atividades
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Search Bar (when open) */}
        {isSearchOpen && (
          <div className="border-t py-3 animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar atividades, matérias, séries..."
                  className="pl-10 pr-4"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}