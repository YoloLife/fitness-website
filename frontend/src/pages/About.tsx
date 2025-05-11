import React from "react";
import { PageWrapper } from "components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <div className="py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl font-bold tracking-wider mb-8">About YOLO Life</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              YOLO Life was founded with a simple yet powerful mission: to make holistic wellness accessible to everyone. 
              In a world of conflicting health information and quick-fix solutions, we believe in a balanced, sustainable approach to wellbeing.
            </p>
            
            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Our Philosophy</h2>
            <p className="mb-6">
              We believe that true wellness encompasses the whole person—physical, mental, emotional, and spiritual dimensions. 
              Our content is carefully crafted to support this integrated approach, acknowledging that wellness is not a 
              destination but a lifelong journey of growth and balance.
            </p>
            
            <div className="my-10 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="YOLO Life Team" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Our Team</h2>
            <p className="mb-6">
              Our diverse team brings together expertise from various wellness disciplines. From nutritionists and fitness 
              trainers to mental health professionals and mindfulness experts, we collaborate to provide well-researched, 
              practical guidance for your wellness journey.
            </p>
            
            <p className="mb-6">
              Every team member shares a personal commitment to living the principles we promote. We practice what we teach, 
              continually learning and evolving our understanding of what it means to live well in today's complex world.
            </p>
            
            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Our Commitment</h2>
            <p className="mb-6">
              At YOLO Life, we commit to:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Evidence-based content</strong> that balances scientific research with traditional wisdom</li>
              <li><strong>Inclusive approaches</strong> that respect diverse backgrounds, bodies, and life circumstances</li>
              <li><strong>Practical guidance</strong> that can be realistically integrated into busy lives</li>
              <li><strong>Ethical partnerships</strong> with brands and experts who share our values</li>
              <li><strong>Continuous growth</strong> as we learn from our community and evolving research</li>
            </ul>
            
            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Join Our Community</h2>
            <p className="mb-6">
              YOLO Life is more than a resource—it's a community of individuals supporting each other on the path to better living. 
              Whether through our newsletter, comments section, or social media channels, we invite you to connect, share, and grow with us.
            </p>
            
            <p className="mb-6">
              Thank you for being part of our journey toward a more balanced, fulfilling life. We're honored to be part of yours.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
