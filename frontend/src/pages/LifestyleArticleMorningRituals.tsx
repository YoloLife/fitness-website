import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function LifestyleArticleMorningRituals() {
  const navigate = useNavigate();
  const category = "lifestyle";
  const slug = "morning-rituals";
  
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
        The way we start our mornings sets the tone for the entire day. Creating intentional morning 
        rituals can transform our productivity, mental clarity, and overall sense of well-being. By 
        designing a morning routine that aligns with our goals and values, we can create a foundation 
        for daily success and inner peace.
      </p>

      <ContentImage 
        src="https://images.unsplash.com/photo-1569216961559-fd512349ebba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Peaceful morning scene with natural light streaming through windows"
        caption="Natural light helps regulate our circadian rhythm and energize our mornings"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Science Behind Morning Rituals</h2>

      <div className="bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="font-medium text-lg mb-4">Key Benefits:</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Cortisol Alignment</strong>
              <p className="text-gray-600">Morning routines help optimize natural cortisol rhythms</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Decision Fatigue Reduction</strong>
              <p className="text-gray-600">Routines minimize decision-making, preserving mental energy</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Habit Formation</strong>
              <p className="text-gray-600">Morning consistency builds lasting positive habits</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Building Your Morning Ritual</h2>

      <ContentImage 
        src="https://images.unsplash.com/photo-1506784365847-bbad939e9335"
        alt="Person practicing morning meditation in a calm setting"
        caption="Starting the day with mindfulness sets a peaceful tone"
        credit="Photo by Unsplash"
      />

      <div className="space-y-4 my-6">
        <h3 className="text-xl font-serif font-semibold text-primary">Essential Components</h3>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Mind and Spirit:</h4>
              <ul className="space-y-2">
                <li>• Meditation or prayer</li>
                <li>• Journaling</li>
                <li>• Gratitude practice</li>
                <li>• Visualization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Body and Health:</h4>
              <ul className="space-y-2">
                <li>• Hydration</li>
                <li>• Movement or exercise</li>
                <li>• Nourishing breakfast</li>
                <li>• Natural light exposure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Sample Morning Schedules</h3>

      <div className="bg-green-50 p-6 rounded-lg my-8">
        <h4 className="font-medium mb-3">60-Minute Comprehensive Ritual:</h4>
        <ol className="space-y-4">
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
            <div>
              <strong>5:30-5:45 AM:</strong> Wake up and hydrate
              <p className="text-gray-600">16oz water with lemon</p>
            </div>
          </li>
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
            <div>
              <strong>5:45-6:00 AM:</strong> Meditation
              <p className="text-gray-600">Mindfulness or guided practice</p>
            </div>
          </li>
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
            <div>
              <strong>6:00-6:30 AM:</strong> Movement
              <p className="text-gray-600">Yoga, walking, or light exercise</p>
            </div>
          </li>
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
            <div>
              <strong>6:30-6:45 AM:</strong> Journaling and planning
              <p className="text-gray-600">Gratitude and daily intentions</p>
            </div>
          </li>
        </ol>
      </div>

      <ContentImage 
        src="https://images.unsplash.com/photo-1613405612958-11bbb9b1b899?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Morning tea ritual with journal and natural light"
        caption="A mindful morning beverage ritual can help center your thoughts"
        credit="Photo by Unsplash"
      />

      <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-400">
        <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Common Challenges and Solutions</h3>
        <div className="space-y-4">
          <div>
            <strong>Challenge:</strong> Difficulty waking up early
            <p className="text-gray-600">Solution: Gradually adjust bedtime and wake time by 15 minutes</p>
          </div>
          <div>
            <strong>Challenge:</strong> Inconsistent routine
            <p className="text-gray-600">Solution: Start with one or two non-negotiable practices</p>
          </div>
          <div>
            <strong>Challenge:</strong> Distractions
            <p className="text-gray-600">Solution: Keep devices in another room overnight</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Customizing Your Ritual</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">For Early Birds</h4>
          <ul className="space-y-2">
            <li>• Sunrise meditation</li>
            <li>• Morning exercise</li>
            <li>• Creative work</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">For Night Owls</h4>
          <ul className="space-y-2">
            <li>• Gentle wake-up routine</li>
            <li>• Light therapy lamp</li>
            <li>• Progressive movement</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">For Parents</h4>
          <ul className="space-y-2">
            <li>• Wake before children</li>
            <li>• Flexible timing</li>
            <li>• Family rituals</li>
          </ul>
        </div>
      </div>

      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Win the morning, win the day. The first hour of the morning is the rudder of the day."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Henry Ward Beecher</cite>
      </blockquote>

      <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
        Remember that creating a morning ritual is a personal journey. What works for others may not work 
        for you, and that's okay. Start small, be consistent, and adjust your routine as needed. The goal 
        is to create a morning practice that energizes and centers you, setting a positive tone for the 
        rest of your day. With time and patience, your morning ritual will become a natural and essential 
        part of your daily life.
      </p>
    </ArticleTemplate>
  );
} 