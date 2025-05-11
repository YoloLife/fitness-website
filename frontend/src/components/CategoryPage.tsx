import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArticleCard, ArticleProps } from "components/ArticleCard";
import { FilterBar, FilterOption } from "components/FilterBar";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { getCategoryTitle, filterArticles } from "utils/sample-articles";


export interface Props {
  categoryId: string;
  articles: ArticleProps[];
  className?: string;
}

export function CategoryPage({ categoryId, articles, className = "" }: Props) {
  const [filter, setFilter] = useState<FilterOption>("latest");
  const [filteredArticles, setFilteredArticles] = useState<ArticleProps[]>(articles);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  
  // Extract query params if any
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get("filter") as FilterOption | null;
    
    if (filterParam && (filterParam === "latest" || filterParam === "popular" || filterParam === "oldest")) {
      setFilter(filterParam);
    }
  }, [location]);
  
  // Apply filter when filter changes and simulate loading
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate network delay for better UX demonstration
    const timer = setTimeout(() => {
      setFilteredArticles(filterArticles(articles, filter));
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [filter, articles]);
  
  const handleFilterChange = (newFilter: FilterOption) => {
    setFilter(newFilter);
    
    // Update URL with filter param without page reload
    const params = new URLSearchParams(location.search);
    params.set("filter", newFilter);
    window.history.replaceState(
      {},
      '',
      `${location.pathname}?${params.toString()}`
    );
  };
  
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              {getCategoryTitle(categoryId)}
            </h1>
            <p className="text-muted-foreground">
              Explore our collection of articles on {getCategoryTitle(categoryId).toLowerCase()} to enhance your wellness journey.
            </p>
          </div>
          
          <FilterBar 
            selectedFilter={filter}
            onFilterChange={handleFilterChange}
          />
          
          {isLoading ? (
            // Loading state
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden animate-pulse">
                  <div className="aspect-video w-full bg-muted"></div>
                  <div className="p-5 space-y-3">
                    <div className="flex space-x-4">
                      <div className="h-3 bg-muted rounded w-1/4"></div>
                      <div className="h-3 bg-muted rounded w-1/4"></div>
                    </div>
                    <div className="h-6 bg-muted rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-4 bg-muted rounded w-5/6"></div>
                    </div>
                    <div className="flex items-center pt-2">
                      <div className="w-8 h-8 rounded-full bg-muted mr-3"></div>
                      <div className="h-4 bg-muted rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredArticles.length > 0 ? (
            // Articles grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            // Empty state
            <div className="py-12 text-center">
              <div className="w-24 h-24 rounded-full bg-muted/30 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try changing the filter or check back later for new content</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}