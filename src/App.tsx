import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Shop from "./pages/Shop";
import Reviews from "./pages/Reviews";
import ReviewDetail from "./pages/ReviewDetail";
import Guides from "./pages/Guides";
import GuideDetail from "./pages/GuideDetail";
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
          <Route path="/nyheter" element={<News />} />
          <Route path="/nyheter/:newsId" element={<NewsDetail />} />
          <Route path="/butikk" element={<Shop />} />
          <Route path="/anmeldelser" element={<Reviews />} />
          <Route path="/anmeldelser/:bikeId" element={<ReviewDetail />} />
          <Route path="/guider" element={<Guides />} />
          <Route path="/guider/:guideId" element={<GuideDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
