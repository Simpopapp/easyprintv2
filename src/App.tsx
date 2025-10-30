import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NoticiaWhatsapp from "./pages/NoticiaWhatsapp";
import NoticiaNovembroAzul from "./pages/NoticiaNovembroAzul";
import NoticiaOutubroRosa from "./pages/NoticiaOutubroRosa";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/noticia/whatsapp" element={<NoticiaWhatsapp />} />
          <Route path="/noticia/novembro-azul" element={<NoticiaNovembroAzul />} />
          <Route path="/noticia/outubro-rosa" element={<NoticiaOutubroRosa />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
