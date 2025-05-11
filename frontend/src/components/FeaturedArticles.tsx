import React from "react";
import { Link } from "react-router-dom";

export interface Props {
  className?: string;
}

export function FeaturedArticles({ className = "" }: Props) {
  // Define the starting guide categories
  const startingGuides = [
    {
      id: "fitness",
      title: "Fitness for Beginners",
      description: "Start your fitness journey with simple, effective exercises anyone can do at home or the gym.",
      category: "Fitness",
      imageSrc: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      path: "/fitness-beginners"
    },
    {
      id: "nutrition",
      title: "Nutrition Basics",
      description: "Learn the fundamentals of balanced eating and how to build healthy meal plans that work for you.",
      category: "Nutrition",
      imageSrc: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      path: "/nutrition-beginners"
    },
    {
      id: "mental-wellness",
      title: "Mental Wellness Essentials",
      description: "Discover practical techniques for managing stress, improving mindfulness, and boosting your mental health.",
      category: "Mental Wellness",
      imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      path: "/mental-wellness-beginners"
    }
  ];

  return (
    <section className={`py-16 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-wide md:text-4xl text-primary">Starting Guide</h2>
            <p className="mt-2 text-muted-foreground">Begin your wellness journey with these essential guides for beginners</p>
          </div>
          <Link 
            to="/articles"
            className="mt-4 md:mt-0 inline-flex items-center text-primary font-medium hover:underline"
          >
            View all articles
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {startingGuides.map((guide) => (
            <article key={guide.id} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link to={guide.path} className="block">
                <img 
                  src={guide.imageSrc} 
                  alt={guide.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
                    {guide.category}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{guide.description}</p>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
