import React, { useState } from "react";
import { toast } from "sonner";

// Mock Firestore functions for newsletter subscription
const mockSubscribers = new Map();

export interface Props {
  className?: string;
}

export function NewsletterSubscription({ className = "" }: Props) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Check if email already exists in our mock storage
      if (mockSubscribers.has(email)) {
        toast.info("You're already subscribed to our newsletter!");
        setIsSubmitting(false);
        return;
      }
      
      // Add new subscriber to mock storage
      mockSubscribers.set(email, {
        email,
        subscribed_at: new Date(),
        active: true
      });
      
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className={`${className}`}>
      <h4 className="text-base font-medium mb-4">Newsletter</h4>
      <p className="text-sm text-muted-foreground mb-4">
        Stay updated with our latest wellness tips and articles.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <div className="flex">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address" 
            className="flex-1 px-3 py-2 text-sm rounded-l-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isSubmitting}
          />
          <button 
            type="submit"
            className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium rounded-r-md hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
        <p className="text-xs text-muted-foreground">
          By subscribing, you agree to receive our newsletter. We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  );
}
