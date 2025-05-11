import React from "react";
import { Link } from "react-router-dom";

export interface ArticleProps {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar?: string;
  };
  image: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

export interface Props {
  article: ArticleProps;
  className?: string;
}

export function ArticleCard({ article, className = "" }: Props) {
  return (
    <article className={`bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md ${className}`}>
      <Link to={`/article-detail?category=${article.category}&slug=${article.slug}`} className="block">
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
          <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>{article.readTime} read</span>
        </div>
        
        <Link to={`/article-detail?category=${article.category}&slug=${article.slug}`} className="block">
          <h3 className="text-xl font-serif font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
            {article.title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {article.description}
        </p>
        
        <div className="flex items-center">
          {article.author.avatar ? (
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              className="w-8 h-8 rounded-full mr-3"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
              {article.author.name.charAt(0)}
            </div>
          )}
          <span className="text-sm font-medium">{article.author.name}</span>
        </div>
      </div>
    </article>
  );
}