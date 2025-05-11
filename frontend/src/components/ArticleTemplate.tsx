import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ContentImage } from "./ContentImage";
import { SocialShare } from "./SocialShare";
import { AdLayout } from "./AdLayout";

export interface ArticleAuthor {
  name: string;
  avatar?: string;
}

export interface ArticleMetadata {
  title: string;
  description: string;
  image: string;
  date: Date;
  readTime: string;
  author: ArticleAuthor;
  category: string;
  categoryLabel: string;
}

interface ArticleTemplateProps {
  article: ArticleMetadata;
  children: React.ReactNode;
  showAds?: boolean;
  /**
   * Image Guidance:
   * - Include only 4-5 images per article for optimal loading and engagement
   * - Place images strategically after key points to illustrate concepts
   * - Ensure all images have descriptive alt text and captions
   * - Use high-quality, properly sized images (1470px width recommended)
   * - Test that all image URLs load correctly
   */
}

export function ArticleTemplate({ article, children, showAds = true }: ArticleTemplateProps) {
  // Get the current URL for sharing
  const articleUrl = window.location.href;
  
  return (
    <AdLayout showAds={showAds}>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* Full-width hero section */}
        <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
            loading="eager" // Prioritize loading the hero image
          />
          <div className="absolute inset-0 bg-black/50 flex items-end">
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 text-white">
              <div className="max-w-3xl">
                <a 
                  href={`/${article.category}`} 
                  className="inline-block px-3 py-1 bg-primary/80 hover:bg-primary text-white text-xs font-medium uppercase tracking-wider rounded-full mb-4 transition-colors"
                >
                  {article.categoryLabel}
                </a>
                <div className="flex items-center mb-4 space-x-4 text-sm">
                  <span>{article.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>•</span>
                  <span>{article.readTime} read</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
                  {article.title}
                </h1>
                <div className="flex items-center">
                  {article.author.avatar ? (
                    <img 
                      src={article.author.avatar} 
                      alt={article.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      {article.author.name.charAt(0)}
                    </div>
                  )}
                  <span className="font-medium">{article.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <main className="flex-grow md:mx-[250px] transition-all duration-300">
          {/* Article content */}
          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl font-medium mb-8 leading-relaxed">{article.description}</p>
                
                {/* 
                  Article content passed as children
                  For optimal user experience:
                  - Use 4-5 relevant images strategically placed throughout the article
                  - Position images after key points to illustrate concepts
                  - Ensure all ContentImage components use properly formed URLs
                */}
                {children}
                
                <div className="mt-12 border-t border-muted-foreground/20 pt-8">
                  <SocialShare url={articleUrl} title={article.title} />
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </AdLayout>
  );
} 