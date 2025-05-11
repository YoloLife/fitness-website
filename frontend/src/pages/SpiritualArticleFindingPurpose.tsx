import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function SpiritualArticleFindingPurpose() {
  const navigate = useNavigate();
  const category = "spiritual";
  const slug = "finding-purpose";
  
  // Get article data
  const articles = getCategoryArticles(category);
  const article = articles.find(a => a.slug === slug);
  
  // Article not found fallback
  if (!article) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <h1 className="text-3xl font-serif font-semibold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Go Back
        </button>
      </div>
    );
  }
  
  // Format article metadata
  const articleMetadata = {
    title: article.title,
    description: article.description,
    image: article.image,
    date: new Date(article.date),
    readTime: article.readTime,
    author: article.author,
    category: article.category,
    categoryLabel: getCategoryTitle(article.category)
  };
  
  return (
    <ArticleTemplate article={articleMetadata}>
      <p className="my-6 leading-relaxed">
        In our fast-paced world, many people find themselves going through the motions of daily life 
        without a clear sense of purpose. Finding and living aligned with your purpose isn't just about 
        career choices or major life decisions—it's about creating a meaningful connection between your 
        core values and your everyday actions.
      </p>

      <ContentImage 
        src="https://images.unsplash.com/photo-1559595500-e15296bdbb48?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Person in meditation pose in a serene natural setting"
        caption="Taking time for reflection helps us connect with our deeper purpose"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Understanding Personal Values</h2>

      <div className="bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="font-medium text-lg mb-4">Core Value Categories:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Internal Values</h4>
            <ul className="space-y-2">
              <li>• Personal growth</li>
              <li>• Authenticity</li>
              <li>• Creativity</li>
              <li>• Independence</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">External Values</h4>
            <ul className="space-y-2">
              <li>• Community</li>
              <li>• Service to others</li>
              <li>• Environmental stewardship</li>
              <li>• Legacy</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Journey of Self-Discovery</h2>

      <ContentImage 
        src="https://images.unsplash.com/vector-1743337071502-9926c6bad94b?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Illustration representing the journey of self-discovery and personal growth"
        caption="The path to finding purpose often involves exploring different aspects of ourselves"
        credit="Vector by Unsplash"
      />

      <div className="space-y-4 my-6">
        <h3 className="text-xl font-serif font-semibold text-primary">Key Questions for Self-Reflection</h3>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <ol className="space-y-4">
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
              <div>
                <strong>What energizes you?</strong>
                <p className="text-gray-600">Identify activities that make you lose track of time</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
              <div>
                <strong>What impact do you want to have?</strong>
                <p className="text-gray-600">Consider the legacy you wish to leave</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
              <div>
                <strong>What challenges do you enjoy solving?</strong>
                <p className="text-gray-600">Reflect on problems that spark your curiosity</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
              <div>
                <strong>What would you do if you couldn't fail?</strong>
                <p className="text-gray-600">Explore your aspirations without limitations</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Aligning Actions with Values</h2>

      <ContentImage 
        src="https://images.unsplash.com/photo-1543603925-edec5ba406fc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Person walking on a path through nature"
        caption="Every step forward, no matter how small, brings us closer to our purpose"
        credit="Photo by Unsplash"
      />

      <div className="bg-green-50 p-6 rounded-lg my-8">
        <h4 className="font-medium mb-3">Practical Steps for Alignment:</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <div>
              <strong>Daily Reflection</strong>
              <p className="text-gray-600">Set aside time each day to review your actions and choices</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <div>
              <strong>Intentional Decision-Making</strong>
              <p className="text-gray-600">Consider your values before making important choices</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <div>
              <strong>Regular Value Check-Ins</strong>
              <p className="text-gray-600">Assess whether your activities align with your core values</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-400">
        <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Common Challenges</h3>
        <ul className="space-y-2">
          <li>• Fear of change or uncertainty</li>
          <li>• External pressures and expectations</li>
          <li>• Time constraints and daily demands</li>
          <li>• Balancing multiple priorities</li>
          <li>• Self-doubt and limiting beliefs</li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Creating Your Purpose Statement</h2>

      <div className="bg-gray-50 p-6 rounded-lg my-8">
        <h3 className="font-medium text-lg mb-4">Purpose Statement Framework:</h3>
        <div className="space-y-4">
          <div>
            <strong className="text-primary">I exist to...</strong>
            <p className="text-gray-600">State your broader mission</p>
          </div>
          <div>
            <strong className="text-primary">By...</strong>
            <p className="text-gray-600">Describe your unique approach or method</p>
          </div>
          <div>
            <strong className="text-primary">So that...</strong>
            <p className="text-gray-600">Explain the impact you want to have</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Short-term Actions</h4>
          <ul className="space-y-2">
            <li>• Daily habits alignment</li>
            <li>• Weekly goal setting</li>
            <li>• Monthly reviews</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Medium-term Goals</h4>
          <ul className="space-y-2">
            <li>• Skill development</li>
            <li>• Relationship building</li>
            <li>• Project completion</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Long-term Vision</h4>
          <ul className="space-y-2">
            <li>• Legacy planning</li>
            <li>• Major life transitions</li>
            <li>• Lasting impact</li>
          </ul>
        </div>
      </div>

      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "The two most important days in your life are the day you are born and the day you find out why."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Mark Twain</cite>
      </blockquote>

      <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
        Finding your purpose is a journey, not a destination. It's about continuous growth, learning, 
        and alignment between your values and actions. Remember that your purpose may evolve as you do, 
        and that's perfectly normal. The key is to stay true to your core values while remaining open 
        to new possibilities and ways of expressing your unique contribution to the world.
      </p>
    </ArticleTemplate>
  );
} 