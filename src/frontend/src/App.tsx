import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { CoursesSection } from "./components/CoursesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { WhyUsSection } from "./components/WhyUsSection";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background font-body">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <CoursesSection />
          <WhyUsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}
