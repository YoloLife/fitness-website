import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArticleCard, ArticleProps } from "./ArticleCard";
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
} from "../utils/sample-articles";

export interface Props {
  className?: string;
}

export function LatestArticlesSection({ className = "" }: Props) {
  const [latestArticles, setLatestArticles] = useState<ArticleProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setIsLoading(true);
    
    // Combine all article arrays into a single array
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
    
    // Sort by latest and take first 6
    const sortedArticles = filterArticles(allArticles, "latest").slice(0, 6);
    
    // Add a small delay to simulate loading
    setTimeout(() => {
      setLatestArticles(sortedArticles);
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Latest Articles</h2>
          <p className="mt-4 text-muted-foreground">
            Stay up to date with our newest content covering all aspects of wellness
          </p>
        </div>
        
        {isLoading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6).fill(0).map((_, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden shadow-md h-64 animate-pulse">
                <div className="absolute inset-0 bg-muted"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <div className="h-6 bg-white/30 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-white/20 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Link
            to="/articles"
            className="inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-6 py-3 text-base font-medium text-primary shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
