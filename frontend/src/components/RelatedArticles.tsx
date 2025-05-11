import React from "react";
import { Link } from "react-router-dom";
import { ArticleProps } from "components/ArticleCard";

export interface Props {
  articles: ArticleProps[];
  currentArticleId: string;
  limit?: number;
  className?: string;
}

export function RelatedArticles({ articles, currentArticleId, limit = 3, className = "" }: Props) {
  // Filter out the current article and limit to specified number
  const relatedArticles = articles
    .filter(article => article.id !== currentArticleId)
    .slice(0, limit);
    
  if (relatedArticles.length === 0) {
    return null;
  }
  
  return (
    <div className={`mt-12 pt-12 border-t border-border ${className}`}>
      <h3 className="text-2xl font-serif font-semibold mb-6">Related Articles</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.map(article => (
          <Link 
            key={article.id} 
            to={`/article-detail?category=${article.category}&slug=${article.slug}`}
            className="group block"
          >
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-3">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <h4 className="font-serif font-medium line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h4>
            
            <div className="flex items-center text-xs text-muted-foreground mt-2">
              <span>{article.readTime} read</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}