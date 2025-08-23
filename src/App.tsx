import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import EducacaoInfantil from "./pages/EducacaoInfantil";
import Explorar from "./pages/Explorar";
import Favoritos from "./pages/Favoritos";
import Blog from "./pages/Blog";
import Recursos from "./pages/Recursos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gerador" element={<Index />} />
          <Route path="/educacao-infantil" element={<EducacaoInfantil />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/recursos" element={<Recursos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
