import React, { useState, useEffect, startTransition } from "react";
import { Toaster } from "sonner";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { HeroSection } from "components/HeroSection";
import { LatestArticlesSection } from "components/CategoriesSection";
import { FeaturedArticles } from "components/FeaturedArticles";
import { TestimonialSection } from "components/TestimonialSection";
import { FirestoreInitializer } from "components/FirestoreInitializer";
import { DatabaseTester } from "components/DatabaseTester";
import { DatabaseGuide } from "components/DatabaseGuide";
import { useCategoryStore, useArticleStore } from "utils/stores";

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);
  const { fetchCategories } = useCategoryStore();
  const { fetchFeaturedArticles } = useArticleStore();
  
  // Load data when database is initialized
  useEffect(() => {
    if (dbInitialized) {
      // Use startTransition to prevent suspension during synchronous updates
      startTransition(() => {
        fetchCategories();
        fetchFeaturedArticles();
      });
    }
  }, [dbInitialized, fetchCategories, fetchFeaturedArticles]);
  
  // Handle database initialization
  const handleDbInitialized = () => {
    setDbInitialized(true);
    console.log("Database initialized");
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Initialize Firestore with sample data if needed */}
      <FirestoreInitializer onInitialized={handleDbInitialized} />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <LatestArticlesSection />
        <FeaturedArticles />
        <TestimonialSection />
        
        {/* Database documentation and testing section (for development) */}
        {/* Database documentation section hidden for production
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-2xl font-serif font-semibold mb-8 text-center">Database Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DatabaseGuide />
              <DatabaseTester />
            </div>
          </div>
        </section>
        */}
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
