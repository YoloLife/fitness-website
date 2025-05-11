import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function MentalHealthArticleMindfulnessBeginners() {
  const navigate = useNavigate();
  const category = "mental-health";
  const slug = "mindfulness-beginners";
  
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
  
  // Return the article with content
  return (
    <ArticleTemplate article={articleMetadata}>
      <p className="my-6 leading-relaxed">
        Mindfulness is a powerful practice that can transform how we experience life, reduce stress, and enhance our overall well-being. 
        At its core, mindfulness is the art of being present in the moment without judgment. This guide will introduce you to the 
        fundamentals of mindfulness and provide practical techniques to begin your journey.
      </p>

      <ContentImage 
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Person meditating in peaceful natural setting"
        caption="Finding peace through mindful presence"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Understanding Mindfulness</h2>

      <p className="my-6 leading-relaxed">
        Mindfulness isn't about emptying your mind or achieving a particular state. Instead, it's about:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Present-moment awareness</strong> - Focusing attention on what's happening right now
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Non-judgmental observation</strong> - Accepting thoughts and feelings without labeling them as good or bad
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Gentle curiosity</strong> - Approaching experiences with an open, interested mind
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Self-compassion</strong> - Being kind to yourself as you practice and learn
          </div>
        </li>
      </ul>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Simple Mindfulness Practices for Beginners</h2>

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">1. Mindful Breathing</h3>

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
        <p className="mb-4">Try this 5-minute breathing practice:</p>
        <ol className="space-y-2">
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
            <div>Find a comfortable seated position</div>
          </li>
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
            <div>Close your eyes or maintain a soft gaze</div>
          </li>
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
            <div>Notice the sensation of your breath at your nostrils or belly</div>
          </li>
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
            <div>When your mind wanders, gently return attention to the breath</div>
          </li>
        </ol>
      </div>

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">2. The STOP Practice</h3>

      <p className="my-6 leading-relaxed">
        Use this simple technique throughout your day to reconnect with the present moment:
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-8">
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4 font-medium">S</span>
            <div>
              <strong className="font-medium text-primary">Stop</strong> what you're doing
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4 font-medium">T</span>
            <div>
              <strong className="font-medium text-primary">Take</strong> a conscious breath
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4 font-medium">O</span>
            <div>
              <strong className="font-medium text-primary">Observe</strong> your experience (thoughts, feelings, sensations)
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4 font-medium">P</span>
            <div>
              <strong className="font-medium text-primary">Proceed</strong> mindfully with your day
            </div>
          </li>
        </ul>
      </div>

      <ContentImage 
        src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Person practicing mindfulness outdoors"
        caption="Mindfulness can be practiced anywhere, anytime"
        credit="Photo by Simon Migaj on Unsplash"
      />

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">3. Mindful Walking</h3>

      <p className="my-6 leading-relaxed">
        Transform a simple walk into a mindfulness practice:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Notice the sensation of your feet touching the ground</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Feel the movement of your body through space</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Observe your surroundings with fresh eyes</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Pay attention to sounds, smells, and sensations</div>
        </li>
      </ul>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Common Challenges and Solutions</h2>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Challenge: "My mind won't stop thinking"</h4>
          <p>Solution: This is completely normal! The goal isn't to stop thoughts but to notice them without getting caught up in them. Think of thoughts as clouds passing through the sky of your mind.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Challenge: "I don't have time to meditate"</h4>
          <p>Solution: Start with just 1-2 minutes. You can practice mindfulness during daily activities like brushing teeth, washing dishes, or waiting in line.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Challenge: "I'm not sure if I'm doing it right"</h4>
          <p>Solution: If you're noticing what's happening in the present moment, you're doing it right. There's no "perfect" way to practice mindfulness.</p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Building a Daily Practice</h2>

      <p className="my-6 leading-relaxed">
        To make mindfulness a sustainable part of your life:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Start small</strong> - Even 1-2 minutes of practice can make a difference
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Be consistent</strong> - Practice at the same time each day to build a habit
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Use reminders</strong> - Set gentle alarms or link practice to existing habits
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Be patient</strong> - Like any skill, mindfulness develops with practice
          </div>
        </li>
      </ul>

      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "The present moment is the only time over which we have dominion."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Thích Nhất Hạnh</cite>
      </blockquote>

      <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
        Remember that mindfulness is a journey, not a destination. Each moment of awareness is an opportunity to begin again. 
        Start where you are, be kind to yourself, and let your practice unfold naturally.
      </p>
    </ArticleTemplate>
  );
} 