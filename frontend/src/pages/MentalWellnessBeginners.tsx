import React from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { ContentImage } from "components/ContentImage";
import { SocialShare } from "components/SocialShare";
import { useNavigate } from "react-router-dom";

export default function MentalWellnessBeginners() {
  const navigate = useNavigate();
  const category = "mental-health";
  
  // Get the current URL for sharing
  const articleUrl = window.location.href;
  
  // Article metadata
  const article = {
    title: "Mental Wellness Essentials: Building Your Emotional Strength",
    description: "Practical strategies for improving mental well-being and developing greater emotional resilience in your everyday life.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: new Date(),
    readTime: "11 min",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section with article image */}
        <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-end">
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 text-white">
              <div className="max-w-3xl">
                <a 
                  href={`/${category}`} 
                  className="inline-block px-3 py-1 bg-primary/80 hover:bg-primary text-white text-xs font-medium uppercase tracking-wider rounded-full mb-4 transition-colors"
                >
                  Mental Wellness
                </a>
                <div className="flex items-center mb-4 space-x-4 text-sm">
                  <span>{article.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>•</span>
                  <span>{article.readTime} read</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
                  {article.title}
                </h1>
                <div className="flex items-center">
                  {article.author.avatar ? (
                    <img 
                      src={article.author.avatar} 
                      alt={article.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      {article.author.name.charAt(0)}
                    </div>
                  )}
                  <span className="font-medium">{article.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article content */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium mb-8 leading-relaxed">{article.description}</p>
              
              {/* Rich Article Content */}
              <p className="my-6 leading-relaxed">
                Mental wellness is just as important as physical health, yet it often receives less attention in our daily routines. 
                The good news is that like physical fitness, mental resilience can be developed through consistent practice and 
                simple daily habits. This guide will introduce you to foundational techniques that can help strengthen your mental wellness.
              </p>
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Understanding Mental Wellness</h2>
              
              <p className="my-6 leading-relaxed">
                Mental wellness goes beyond simply the absence of mental illness. It encompasses:
              </p>
              
              <ul className="space-y-3 my-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Emotional stability</strong> - The ability to regulate emotions and respond appropriately to situations
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Psychological flexibility</strong> - Adapting effectively to changing circumstances and stressors
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Social connection</strong> - Maintaining healthy relationships and feeling supported
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Self-awareness</strong> - Understanding your thoughts, feelings, and behaviors
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Purpose and meaning</strong> - Engaging in activities that provide fulfillment and direction
                  </div>
                </li>
              </ul>
              
              <ContentImage 
                src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="Person meditating outdoors at sunset"
                caption="Taking time for mindfulness is a cornerstone of mental wellness"
                credit="Photo by Simon Migaj on Unsplash"
              />
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Five-Minute Mindfulness Practice</h2>
              
              <p className="my-6 leading-relaxed">
                Mindfulness—the practice of bringing your attention to the present moment without judgment—is one of the most 
                accessible starting points for mental wellness. Research shows even brief mindfulness practice can reduce stress 
                and improve focus.
              </p>
              
              <p className="my-6 leading-relaxed">
                Try this simple five-minute practice:
              </p>
              
              <ol className="space-y-4 my-6">
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
                  <div>
                    <strong className="font-medium">Find a comfortable position</strong> - Sit or lie down in a position that allows you to be alert yet relaxed
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
                  <div>
                    <strong className="font-medium">Set a timer</strong> - Five minutes is enough to start experiencing benefits
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
                  <div>
                    <strong className="font-medium">Focus on your breath</strong> - Notice the sensation of breathing: the rise and fall of your chest, the air moving through your nostrils
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
                  <div>
                    <strong className="font-medium">When your mind wanders</strong> - Gently return your attention to your breath without self-criticism (this is normal and happens to everyone)
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
                  <div>
                    <strong className="font-medium">Complete the practice</strong> - When your timer sounds, take a moment to notice how you feel before resuming your day
                  </div>
                </li>
              </ol>
              
              <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
                "You can't stop the waves, but you can learn to surf."
                <cite className="block mt-2 text-sm text-gray-600 not-italic">– Jon Kabat-Zinn</cite>
              </blockquote>
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Building Your Emotional Vocabulary</h2>
              
              <p className="my-6 leading-relaxed">
                Many of us have a limited emotional vocabulary, defaulting to basic terms like "good," "bad," "fine," or "stressed." 
                Expanding your emotional vocabulary helps you better understand and process your feelings.
              </p>
              
              <ContentImage 
                src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="Person writing in journal"
                caption="Journaling helps develop emotional awareness and vocabulary"
                credit="Photo by Aaron Burden on Unsplash"
              />
              
              <p className="my-6 leading-relaxed">
                Try this exercise: When you notice an emotion, ask yourself:
              </p>
              
              <ul className="space-y-3 my-6 bg-gray-50 p-5 rounded-lg">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Where do I feel this in my body?
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  What is the intensity of this feeling on a scale of 1-10?
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Is there more than one emotion present?
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  What more specific word could describe this feeling?
                </li>
              </ul>
              
              <p className="my-6 leading-relaxed">
                For example, instead of just "bad," you might recognize feelings of "disappointment," "frustration," or "loneliness." 
                This precision helps you respond more effectively to your emotional needs.
              </p>
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The RAIN Technique for Difficult Emotions</h2>
              
              <p className="my-6 leading-relaxed">
                When you encounter challenging emotions, the RAIN technique offers a structured approach:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4 font-medium">R</span>
                    <div>
                      <strong className="font-medium text-primary">Recognize</strong> what is happening. Name the emotion you're experiencing.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4 font-medium">A</span>
                    <div>
                      <strong className="font-medium text-primary">Allow</strong> the experience to be there, just as it is, without trying to change it.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4 font-medium">I</span>
                    <div>
                      <strong className="font-medium text-primary">Investigate</strong> with kindness. Ask yourself what this feeling needs or what message it might have.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4 font-medium">N</span>
                    <div>
                      <strong className="font-medium text-primary">Nurture</strong> yourself with self-compassion. Offer yourself the support you would give a friend.
                    </div>
                  </li>
                </ul>
              </div>
              
              <p className="my-6 leading-relaxed">
                This approach helps you process emotions rather than suppressing or being overwhelmed by them.
              </p>
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Daily Habits for Mental Wellness</h2>
              
              <p className="my-6 leading-relaxed">
                Incorporate these simple practices into your routine to support ongoing mental wellness:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
                <h3 className="text-xl font-serif font-semibold mb-4 text-primary">1. Gratitude Practice</h3>
                
                <p className="mb-4 leading-relaxed">
                  Each day, identify three specific things you're grateful for. Try to find new items rather than repeating the same ones. 
                  This trains your brain to notice positive aspects of your life, counterbalancing our natural negativity bias.
                </p>
              </div>
              
              <ContentImage 
                src="https://images.unsplash.com/photo-1510563800743-aed236490d08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="Person relaxing in nature"
                caption="Taking time in nature can restore mental energy and reduce stress"
                credit="Photo by Jared Rice on Unsplash"
              />
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
                <h3 className="text-xl font-serif font-semibold mb-4 text-primary">2. Physical Movement</h3>
                
                <p className="mb-4 leading-relaxed">
                  Even gentle movement like walking, stretching, or yoga for 10-15 minutes helps release tension and improve mood. 
                  The mind-body connection is powerful—when your body moves, your mind benefits.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
                <h3 className="text-xl font-serif font-semibold mb-4 text-primary">3. Digital Detox Periods</h3>
                
                <p className="mb-4 leading-relaxed">
                  Set aside at least 30-60 minutes each day to disconnect from screens and notifications. 
                  Use this time for activities that nurture your mental wellness, like reading, creating, connecting with loved ones, or simply resting.
                </p>
              </div>
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Simple Strategies for Everyday Stress</h2>
              
              <p className="my-6 leading-relaxed">
                For moments when stress or anxiety arise during your day, try these quick techniques:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                  <strong className="font-medium text-primary">Box Breathing</strong>
                  <p className="mt-1 text-sm">Inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat 3-5 times.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                  <strong className="font-medium text-primary">5-4-3-2-1 Grounding</strong>
                  <p className="mt-1 text-sm">Notice 5 things you see, 4 things you feel, 3 things you hear, 2 things you smell, and 1 thing you taste.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                  <strong className="font-medium text-primary">Hand Massage</strong>
                  <p className="mt-1 text-sm">Apply gentle pressure in circular motions over your palms and fingers for 30 seconds on each hand.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                  <strong className="font-medium text-primary">Brief Nature Connection</strong>
                  <p className="mt-1 text-sm">Look at the sky, observe a plant, or touch a natural object and focus fully on the experience.</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">When to Seek Additional Support</h2>
              
              <p className="my-6 leading-relaxed">
                While these practices can support everyday mental wellness, they're not substitutes for professional help when needed. 
                Consider reaching out to a mental health professional if:
              </p>
              
              <ul className="my-6 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  Your emotions intensely interfere with daily life for more than two weeks
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  You experience thoughts of harming yourself or others
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  You struggle with substance use as a coping mechanism
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  You notice significant changes in sleep, appetite, or energy levels
                </li>
              </ul>
              
              <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                Remember that seeking help is a sign of strength, not weakness. Mental wellness is a continuous journey, and everyone 
                needs different kinds of support at different times. Start where you are, practice self-compassion, and take small 
                steps toward building your emotional strength each day.
              </p>
              
              <ContentImage 
                src="https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="Person with arms spread wide in an open field"
                caption="Emotional well-being allows us to embrace life's possibilities with an open heart"
                credit="Photo by Jake Melara on Unsplash"
              />
              
              <div className="mt-12 border-t border-muted-foreground/20 pt-8">
                <SocialShare url={articleUrl} title={article.title} />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 