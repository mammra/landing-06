import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { NuvraBadge } from './components/NuvraBadge';
function App() {
  const sectionsData = [
    {
      "type": "hero",
      "headline": "Revolutionize Your Workflow",
      "sub": "Streamline your tasks and boost productivity with our innovative solution.",
      "cta_text": "Get Started",
      "image_url": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];
  const heroSectionData = sectionsData.find(section => section.type === "hero");
  return (
  <>
    <NuvraBadge />
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <Header />
      <main className="flex-grow">
        {heroSectionData && (
          <HeroSection
            headline={heroSectionData.headline}
            sub={heroSectionData.sub}
            cta_text={heroSectionData.cta_text}
            image_url={heroSectionData.image_url}
          />
        )}
      </main>
      <Footer />
    </div>
  
  </>
);
}
export default App;