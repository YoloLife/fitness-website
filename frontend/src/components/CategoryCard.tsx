import React from "react";
import { Link } from "react-router-dom";

export interface Props {
  name: string;
  description: string;
  imageUrl: string;
  href: string;
  className?: string;
}

export function CategoryCard({ name, description, imageUrl, href, className = "" }: Props) {
  return (
    <Link 
      to={href}
      className={`group block overflow-hidden rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img 
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6 bg-card">
        <h3 className="font-serif text-xl font-semibold tracking-wide group-hover:text-primary transition-colors">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
