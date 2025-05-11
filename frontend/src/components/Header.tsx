import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserMenu } from "./UserMenu";

export interface Props {
  className?: string;
}

export function Header({ className = "" }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={`w-full py-4 px-4 md:py-6 md:px-6 sticky top-0 bg-white shadow-md z-50 border-b-4 border-border ${className}`} style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start mr-8" onClick={scrollToTop}>
          <span className="text-3xl font-serif font-bold tracking-wider">YOLO Life</span>
          <div className="w-full flex justify-center">
            <span className="text-sm font-medium">Wellness</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-center ml-10 space-x-6">
          <Link to="/" className="text-lg font-medium hover:text-primary transition-colors flex items-center py-2" onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          
          <div className="border-2 border-primary/40 rounded-lg py-2 px-6 shadow-sm bg-transparent relative">
            <nav className="flex space-x-5 justify-center items-center h-full">
              <Link to="/environmental" className="text-base font-medium hover:text-primary transition-colors inline-flex items-center">
                Environmental
              </Link>
              <Link to="/mental-health" className="text-base font-medium hover:text-primary transition-colors inline-flex items-center">
                Mental Health
              </Link>
              <Link to="/self-care" className="text-base font-medium hover:text-primary transition-colors inline-flex items-center">
                Self-Care
              </Link>
              <Link to="/nutrition" className="text-base font-medium hover:text-primary transition-colors inline-flex items-center">
                Nutrition
              </Link>
              <Link to="/spiritual" className="text-base font-medium hover:text-primary transition-colors inline-flex items-center">
                Spiritual
              </Link>
              <Link to="/lifestyle" className="text-base font-medium hover:text-primary transition-colors inline-flex items-center">
                Lifestyle
              </Link>
              <Link to="/fitness" className="text-base font-medium hover:text-primary transition-colors inline-flex items-center">
                Fitness
              </Link>
              <Link to="/health-conditions" className="text-base font-medium hover:text-primary transition-colors inline-flex items-center">
                Health
              </Link>
            </nav>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 rounded-md text-foreground focus:outline-none"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* User Authentication */}
        <div className="hidden lg:block">
          <UserMenu />
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden py-4 border-t border-border mt-4">
          <div className="container mx-auto space-y-4">
            <Link 
              to="/"
              className="block py-2 text-lg font-medium hover:text-primary transition-colors flex items-center"
              onClick={(e) => {
                setMobileMenuOpen(false);
                scrollToTop();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            
            <div className="border-2 border-primary/40 rounded-lg py-3 px-5 shadow-sm relative ml-4 bg-transparent">
              <div className="relative z-10 space-y-2">
                <Link 
                  to="/environmental"
                  className="block py-1 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Environmental Wellness
                </Link>
                <Link 
                  to="/mental-health"
                  className="block py-1 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Mental Health
                </Link>
                <Link 
                  to="/self-care"
                  className="block py-1 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Self-Care
                </Link>
                <Link 
                  to="/nutrition"
                  className="block py-1 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Nutrition
                </Link>
                <Link 
                  to="/spiritual"
                  className="block py-1 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Spiritual Wellness
                </Link>
                <Link 
                  to="/lifestyle"
                  className="block py-1 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Lifestyle Tips
                </Link>
                <Link 
                  to="/fitness"
                  className="block py-1 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Fitness
                </Link>
                <Link 
                  to="/health-conditions"
                  className="block py-1 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Health Conditions
                </Link>
              </div>
            </div>
            
            <div className="pt-4 border-t border-border">
              <UserMenu />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
