import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { PopularActivitiesSection } from "@/components/home/PopularActivitiesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { StatsSection } from "@/components/home/StatsSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Atividades Escolares para Imprimir | Gerador de Tarefas"
        description="Gerador gratuito de atividades escolares para imprimir: educação infantil, alfabetização, reforço escolar e material adaptado."
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Tarefa Divertida",
            url: "https://tarefa-divertida-gerador.lovable.app/",
            inLanguage: "pt-BR",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://tarefa-divertida-gerador.lovable.app/explorar?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Tarefa Divertida",
            url: "https://tarefa-divertida-gerador.lovable.app/",
            description: "Plataforma de atividades escolares para educação infantil, fundamental e médio.",
          },
        ]}
      />
      <Header />
      
      <main>
        <HeroSection />
        <StatsSection />
        <CategoriesSection />
        <FeaturesSection />
        <BenefitsSection />
        <PopularActivitiesSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;