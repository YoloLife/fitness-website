import React from "react";
import { Link } from "react-router-dom";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

interface Category {
  title: string;
  description: string;
  imageSrc: string;
  path: string;
}

export default function Categories() {
  const categories: Category[] = [
    {
      title: "Fitness",
      description: "Discover effective exercise routines and tips for staying active and building strength.",
      imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      path: "/fitness"
    },
    {
      title: "Nutrition",
      description: "Learn about balanced diets, wholesome recipes, and nutrition plans for optimal health.",
      imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      path: "/nutrition"
    },
    {
      title: "Mental Health",
      description: "Explore strategies for stress management, mindfulness, and emotional well-being.",
      imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1499&q=80",
      path: "/mental-health"
    },
    {
      title: "Self-Care",
      description: "Discover practices for relaxation, personal growth, and maintaining balance in daily life.",
      imageSrc: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      path: "/self-care"
    },
    {
      title: "Spiritual Wellness",
      description: "Explore meditation, yoga, and practices for finding inner peace and purpose.",
      imageSrc: "https://images.unsplash.com/photo-1506126944674-00c6c192e0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      path: "/spiritual"
    },
    {
      title: "Environmental Wellness",
      description: "Learn about sustainable living practices and creating harmony with the environment.",
      imageSrc: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      path: "/environmental"
    },
    {
      title: "Health Conditions",
      description: "Find information on managing specific health conditions and preventative practices.",
      imageSrc: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      path: "/health-conditions"
    },
    {
      title: "Lifestyle",
      description: "Discover tips for improving sleep, work-life balance, and overall quality of life.",
      imageSrc: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      path: "/lifestyle"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-4">Wellness Categories</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive collection of wellness resources categorized for your journey to better health and balance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link 
                  to={category.path} 
                  key={index}
                  className="group flex flex-col h-full overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg bg-card"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={category.imageSrc} 
                      alt={category.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col p-6 flex-grow">
                    <h3 className="text-xl font-serif font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm flex-grow">{category.description}</p>
                    <div className="mt-4 flex items-center text-primary font-medium text-sm">
                      <span>Explore {category.title}</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}