import React from "react";

export interface Props {
  className?: string;
}

export function TestimonialSection({ className = "" }: Props) {
  const testimonials = [
    {
      quote: "YOLO Life has completely transformed my approach to wellness. The nutrition guides have helped me make better food choices without feeling deprived.",
      author: "Sarah Johnson",
      role: "Fitness Enthusiast"
    },
    {
      quote: "The mental health resources provided by YOLO Life gave me practical tools to manage my stress and anxiety during a challenging period in my life.",
      author: "Michael Chen",
      role: "Business Professional"
    },
    {
      quote: "I've incorporated many of the self-care practices from YOLO Life into my daily routine, and I've never felt more balanced and energized.",
      author: "Olivia Rodriguez",
      role: "Wellness Coach"
    }
  ];

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl font-bold tracking-wide md:text-4xl">What Our Community Says</h2>
          <p className="mt-4 text-muted-foreground">
            Hear from people who have transformed their lives through our holistic wellness approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-xl shadow-sm">
              <svg className="h-10 w-10 text-primary/20 mb-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.082.24-.573.13-.97.198-1.2.203l.028-2.543c.403-.011 1.096-.143 2.08-.394.953-.25 1.62-.609 2-.107 1.66.882 2.48 2.674 2.48 5.376V18h-2.8v-2.243zm9.607 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.824-.55-.13-1.07-.14-1.54-.03-.16.032-.52.112-1.08.24-.57.129-.97.198-1.2.203l.027-2.543c.402-.01 1.096-.143 2.08-.394.954-.25 1.62-.61 2-1.107 1.66.883 2.48 2.675 2.48 5.377V18h-2.8v-2.243z" /></svg>
              <blockquote className="text-lg mb-6">{testimonial.quote}</blockquote>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
