import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function MentalHealthArticleDigitalDetox() {
  const navigate = useNavigate();
  const category = "mental-health";
  const slug = "digital-detox";
  
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
        In our hyper-connected world, the constant stream of notifications, emails, and social media 
        updates can overwhelm our mental space and diminish our ability to focus. A digital detox 
        offers a chance to reset our relationship with technology and rediscover the peace that comes 
        with being fully present in our lives.
      </p>

      <ContentImage 
        src="https://images.unsplash.com/photo-1604449567718-f5ef2f36ad36?fm=jpg&q=60&w=3000&h=1500&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Peaceful forest path surrounded by trees"
        caption="Nature provides the perfect setting for disconnecting from digital distractions"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Signs You Need a Digital Detox</h2>

      <div className="bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="font-medium text-lg mb-4">Common Warning Signs:</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Phantom Vibrations</strong>
              <p className="text-gray-600">Feeling your phone vibrate when it hasn't</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Sleep Disruption</strong>
              <p className="text-gray-600">Difficulty falling asleep or checking devices at night</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Attention Issues</strong>
              <p className="text-gray-600">Inability to focus on tasks without checking devices</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>FOMO</strong>
              <p className="text-gray-600">Anxiety about missing out on social media updates</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Benefits of Digital Detox</h2>

      <ContentImage 
        src="https://images.unsplash.com/photo-1483070421852-a142ce0a385d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Person reading a book in a peaceful natural setting"
        caption="Disconnecting from devices allows us to reconnect with simpler pleasures"
        credit="Photo by Unsplash"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Mental Benefits</h4>
          <ul className="space-y-2">
            <li>• Reduced anxiety and stress</li>
            <li>• Improved focus and concentration</li>
            <li>• Better memory retention</li>
            <li>• Enhanced creativity</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Physical Benefits</h4>
          <ul className="space-y-2">
            <li>• Better sleep quality</li>
            <li>• Reduced eye strain</li>
            <li>• Improved posture</li>
            <li>• More physical activity</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Implementing Your Digital Detox</h2>

      <ContentImage 
        src="https://images.unsplash.com/photo-1587822766378-e47b139c56ad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Organized workspace with minimal technology"
        caption="Creating tech-free zones helps establish healthy boundaries with digital devices"
        credit="Photo by Unsplash"
      />

      <div className="space-y-6 my-6">
        <h3 className="text-xl font-serif font-semibold text-primary">Step-by-Step Guide</h3>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <ol className="space-y-4">
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
              <div>
                <strong>Assess Your Digital Usage</strong>
                <p className="text-gray-600">Track your screen time and identify problem areas</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
              <div>
                <strong>Set Clear Boundaries</strong>
                <p className="text-gray-600">Establish tech-free times and zones in your home</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
              <div>
                <strong>Create a Plan</strong>
                <p className="text-gray-600">Choose your detox duration and replacement activities</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
              <div>
                <strong>Communicate Intent</strong>
                <p className="text-gray-600">Inform important contacts about your reduced availability</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg my-8">
        <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Replacement Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-medium mb-2">Physical</h4>
            <ul className="space-y-1">
              <li>• Walking in nature</li>
              <li>• Yoga practice</li>
              <li>• Exercise routines</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Creative</h4>
            <ul className="space-y-1">
              <li>• Journaling</li>
              <li>• Art projects</li>
              <li>• Reading books</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Social</h4>
            <ul className="space-y-1">
              <li>• In-person meetings</li>
              <li>• Family game nights</li>
              <li>• Community events</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-400">
        <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Common Challenges and Solutions</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <div>
              <strong>Work Requirements</strong>
              <p className="text-gray-600">Set specific work hours for digital tasks and use website blockers</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <div>
              <strong>Social Pressure</strong>
              <p className="text-gray-600">Explain your goals to friends and suggest alternative ways to connect</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <div>
              <strong>Habit Breaking</strong>
              <p className="text-gray-600">Start with small changes and gradually increase digital-free time</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Maintaining Digital Wellness</h2>

      <div className="bg-gray-50 p-6 rounded-lg my-8">
        <h3 className="font-medium text-lg mb-4">Long-term Strategies:</h3>
        <ul className="space-y-3">
          <li>• Set regular "digital sunset" times</li>
          <li>• Use apps to monitor and limit screen time</li>
          <li>• Create tech-free morning and evening routines</li>
          <li>• Schedule regular mini-detoxes</li>
          <li>• Practice mindful technology use</li>
        </ul>
      </div>

      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Almost everything will work again if you unplug it for a few minutes, including you."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Anne Lamott</cite>
      </blockquote>

      <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
        Remember that a digital detox isn't about completely eliminating technology from your life—it's 
        about creating a healthier relationship with it. Start small, be patient with yourself, and 
        focus on the positive changes you experience. The goal is to use technology intentionally, 
        rather than letting it use you.
      </p>
    </ArticleTemplate>
  );
} 