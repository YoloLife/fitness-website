import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function LifestyleArticlePreventingBurnout() {
  const navigate = useNavigate();
  const category = "lifestyle";
  const slug = "preventing-burnout";
  
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
        In today's fast-paced world, burnout has become increasingly common, affecting both our professional performance 
        and personal well-being. Understanding how to recognize, prevent, and address burnout is crucial for maintaining 
        a healthy work-life balance and sustaining long-term success.
      </p>

      <ContentImage 
        src="https://images.unsplash.com/photo-1607827447475-cc1f122d0ff7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Person showing signs of stress and overwhelm at work"
        caption="Recognizing the early signs of burnout is key to preventing it"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Understanding Burnout</h2>

      <p className="my-6 leading-relaxed">
        Burnout is more than just feeling tired or stressed. It's a state of physical, emotional, and mental exhaustion 
        that occurs when we experience prolonged stress without adequate recovery. Common signs include:
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-8">
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Physical symptoms</strong>
              <p className="text-gray-600">Chronic fatigue, insomnia, frequent headaches or muscle pain</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Emotional signs</strong>
              <p className="text-gray-600">Cynicism, detachment, loss of motivation or satisfaction</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Cognitive indicators</strong>
              <p className="text-gray-600">Difficulty concentrating, decreased productivity, brain fog</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Prevention Strategies</h2>

      <ContentImage 
        src="https://images.unsplash.com/photo-1494856488146-6070a6b67f78?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Person practicing meditation in a peaceful setting"
        caption="Regular mindfulness practice can help manage stress and prevent burnout"
        credit="Photo by Unsplash"
      />

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">1. Set Clear Boundaries</h3>

      <div className="space-y-4 my-6">
        <div className="flex items-start">
          <span className="text-primary mr-2">✓</span>
          <div>
            <strong>Establish work hours</strong> - Define and stick to specific working hours
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-primary mr-2">✓</span>
          <div>
            <strong>Create physical boundaries</strong> - Designate specific spaces for work and relaxation
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-primary mr-2">✓</span>
          <div>
            <strong>Digital boundaries</strong> - Set limits on email and notification checking
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">2. Practice Self-Care</h3>

      <div className="bg-blue-50 p-6 rounded-lg my-8">
        <h4 className="font-medium text-lg mb-4">Daily Self-Care Checklist</h4>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="text-primary mr-2">□</span>
            <div>7-8 hours of quality sleep</div>
          </li>
          <li className="flex items-center">
            <span className="text-primary mr-2">□</span>
            <div>Regular physical activity</div>
          </li>
          <li className="flex items-center">
            <span className="text-primary mr-2">□</span>
            <div>Nutritious meals and hydration</div>
          </li>
          <li className="flex items-center">
            <span className="text-primary mr-2">□</span>
            <div>Mindfulness or meditation practice</div>
          </li>
          <li className="flex items-center">
            <span className="text-primary mr-2">□</span>
            <div>Social connection and support</div>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">3. Work Smarter, Not Harder</h3>

      <div className="space-y-4 my-6">
        <p className="leading-relaxed">
          Implement effective work strategies to maintain productivity while preventing overwhelm:
        </p>

        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Time blocking</strong> - Schedule focused work periods with regular breaks
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Priority management</strong> - Focus on high-impact tasks when energy is highest
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Delegation</strong> - Don't hesitate to share the workload when possible
            </div>
          </li>
        </ul>
      </div>

      <ContentImage 
        src="https://images.unsplash.com/photo-1513258496099-48168024aec0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Person taking a peaceful break in nature"
        caption="Regular breaks and time in nature can help restore mental energy"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Recovery Practices</h2>

      <div className="bg-gray-50 p-6 rounded-lg my-8">
        <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Daily Recovery Rituals</h3>
        <div className="space-y-4">
          <div>
            <strong className="text-primary">Morning:</strong> 10-minute mindfulness practice
          </div>
          <div>
            <strong className="text-primary">Mid-day:</strong> Short walks or stretching breaks
          </div>
          <div>
            <strong className="text-primary">Evening:</strong> Technology-free wind-down routine
          </div>
          <div>
            <strong className="text-primary">Weekly:</strong> Dedicated "me time" for hobbies
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-400">
        <h3 className="text-xl font-serif font-semibold mb-4 text-primary">When to Seek Professional Help</h3>
        <p>Consider consulting a mental health professional if you experience:</p>
        <ul className="space-y-2 mt-4">
          <li>• Persistent feelings of hopelessness or depression</li>
          <li>• Anxiety that interferes with daily activities</li>
          <li>• Physical symptoms that don't improve with self-care</li>
          <li>• Difficulty maintaining relationships or work performance</li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Creating Sustainable Change</h2>

      <p className="my-6 leading-relaxed">
        Preventing burnout isn't about quick fixes—it's about creating sustainable lifestyle changes:
      </p>

      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Start small</strong> - Implement one change at a time
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Build habits</strong> - Focus on consistent, sustainable practices
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Regular check-ins</strong> - Monitor your energy levels and adjust as needed
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Celebrate progress</strong> - Acknowledge improvements, no matter how small
          </div>
        </li>
      </ol>

      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Self-care is not self-indulgence, it is self-preservation."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Audre Lorde</cite>
      </blockquote>

      <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
        Remember that preventing burnout is not a luxury—it's a necessity for long-term success and well-being. 
        By implementing these strategies and regularly checking in with yourself, you can maintain high performance 
        while protecting your physical and mental health.
      </p>
    </ArticleTemplate>
  );
} 