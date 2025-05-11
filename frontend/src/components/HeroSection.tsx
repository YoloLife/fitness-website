import React from "react";
import { Link } from "react-router-dom";

export interface Props {
  className?: string;
}

export function HeroSection({ className = "" }: Props) {
  return (
    <section className={`relative overflow-hidden py-16 md:py-24 ${className}`}>
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="font-serif text-4xl font-bold tracking-wider md:text-5xl lg:text-6xl">
              Your Path to <span className="text-primary">Holistic</span> Wellness
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Discover a balanced approach to health that nurtures your mind, body, and spirit. 
              Join our community to access expert resources for your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/categories" className="bg-primary text-primary-foreground px-8 py-3 rounded-md text-base font-medium hover:bg-primary/90 transition-colors text-center">
                Explore Categories
              </Link>
              <Link to="/articles" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-md text-base font-medium hover:bg-secondary/90 transition-colors text-center">
                Latest Articles
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-video w-full max-w-xl rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
              alt="Wellness lifestyle image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
