import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { ArticleCard, ArticleProps } from "components/ArticleCard";
import {
  fitnessArticles,
  nutritionArticles,
  mentalHealthArticles,
  selfCareArticles,
  spiritualArticles,
  environmentalArticles,
  healthConditionsArticles,
  lifestyleArticles,
  filterArticles
} from "utils/sample-articles";

export default function Articles() {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [filter, setFilter] = useState<string>("latest");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // Combine all article arrays into a single array
  useEffect(() => {
    const allArticles = [
      ...fitnessArticles,
      ...nutritionArticles,
      ...mentalHealthArticles,
      ...selfCareArticles,
      ...spiritualArticles,
      ...environmentalArticles,
      ...healthConditionsArticles,
      ...lifestyleArticles
    ];

    let filteredArticles = allArticles;
    
    // Apply category filter if not "all"
    if (categoryFilter !== "all") {
      filteredArticles = allArticles.filter(article => article.category === categoryFilter);
    }
    
    // Apply sort filter
    filteredArticles = filterArticles(filteredArticles, filter);
    
    setArticles(filteredArticles);
  }, [filter, categoryFilter]);

  const categoryOptions = [
    { value: "all", label: "All Categories" },
    { value: "fitness", label: "Fitness & Exercise" },
    { value: "nutrition", label: "Nutrition & Diet" },
    { value: "mental-health", label: "Mental Health" },
    { value: "self-care", label: "Self-Care" },
    { value: "spiritual", label: "Spiritual Wellness" },
    { value: "environmental", label: "Environmental Wellness" },
    { value: "health-conditions", label: "Health Conditions" },
    { value: "lifestyle", label: "Lifestyle Tips" }
  ];

  const sortOptions = [
    { value: "latest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
    { value: "popular", label: "Popular" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-4">Latest Articles</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of wellness articles covering a range of topics to help you on your journey to better health.
              </p>
            </div>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <select 
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="border border-input rounded-md px-3 py-2 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {categoryOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="border border-input rounded-md px-3 py-2 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              
              <div className="text-sm text-muted-foreground w-full sm:w-auto text-center sm:text-right">
                Showing {articles.length} articles
              </div>
            </div>
            
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            
            {articles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No articles found. Try changing your filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}