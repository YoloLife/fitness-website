import React from "react";
import { Link } from "react-router-dom";
import { NewsletterSubscription } from "components/NewsletterSubscription";

export interface Props {
  className?: string;
}

export function Footer({ className = "" }: Props) {
  return (
    <footer className={`bg-muted py-12 px-4 md:px-6 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="flex flex-col space-y-4 md:col-span-3">
            <h3 className="font-serif text-lg font-bold tracking-wide">YOLO Life</h3>
            <p className="text-sm text-muted-foreground">
              Guiding you towards a balanced and healthy lifestyle through holistic wellness approaches.
            </p>
            <div className="flex mt-4">
              <a href="https://www.instagram.com/my_yolo.life" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-base font-medium mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/fitness" className="text-sm text-muted-foreground hover:text-primary">Fitness</Link></li>
              <li><Link to="/nutrition" className="text-sm text-muted-foreground hover:text-primary">Nutrition</Link></li>
              <li><Link to="/mental-health" className="text-sm text-muted-foreground hover:text-primary">Mental Health</Link></li>
              <li><Link to="/self-care" className="text-sm text-muted-foreground hover:text-primary">Self-Care</Link></li>
              <li><Link to="/spiritual" className="text-sm text-muted-foreground hover:text-primary">Spiritual Wellness</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-base font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <NewsletterSubscription />
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} YOLO Life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
