import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Laxhjalp from "./pages/Laxhjalp";
import Tjanster from "./pages/Tjanster";
import Coaching from "./pages/Coaching";
import Ovrigt from "./pages/Ovrigt";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/tjanster">
            <Route index element={<Tjanster />} />
            <Route path="laxhjalp" element={<Laxhjalp />} />
            <Route path="coaching" element={<Coaching />} />
            <Route path="ovrigt" element={<Ovrigt />} />
          </Route>

          <Route path="/kontakt" element={<Kontakt />} />

          <Route path="/laxhjalp" element={<Navigate to="/tjanster/laxhjalp" replace />} />
          <Route path="/coaching" element={<Navigate to="/tjanster/coaching" replace />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
