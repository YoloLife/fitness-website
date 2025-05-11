import React from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { ContentImage } from "components/ContentImage";
import { SocialShare } from "components/SocialShare";
import { useNavigate } from "react-router-dom";

export default function FitnessBeginners() {
  const navigate = useNavigate();
  const category = "fitness";
  
  // Get the current URL for sharing
  const articleUrl = window.location.href;
  
  // Article metadata
  const article = {
    title: "Fitness for Beginners: Your First Steps to a Healthier You",
    description: "A complete guide to starting your fitness journey with confidence, even if you've never exercised regularly before.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    date: new Date(),
    readTime: "10 min",
    author: {
      name: "Emma Roberts",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
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
                  Fitness
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
                Starting a fitness journey can feel overwhelming, especially if you've never had a regular exercise routine before. 
                The good news is that you don't need fancy equipment, expensive gym memberships, or intense workout regimens to begin 
                improving your fitness. This guide will help you take those crucial first steps with confidence.
              </p>
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Why Start a Fitness Journey?</h2>
              
              <p className="my-6 leading-relaxed">
                Regular physical activity provides incredible benefits beyond just weight management or muscle building:
              </p>
              
              <ul className="space-y-3 my-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Improved mood and mental clarity</strong> - Exercise releases endorphins that boost your mood and reduce stress
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Better sleep quality</strong> - Regular activity helps you fall asleep faster and enjoy deeper sleep
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Increased energy levels</strong> - Contrary to what you might expect, regular exercise gives you more energy
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Reduced risk of chronic diseases</strong> - Including heart disease, type 2 diabetes, and some cancers
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Stronger immune system</strong> - Moderate exercise can boost your body's natural defenses
                  </div>
                </li>
              </ul>
              
              <ContentImage 
                src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="Person stretching outdoors"
                caption="Simple stretching is a great way to begin incorporating movement into your daily routine"
                credit="Photo by Madison Lavern on Unsplash"
              />
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Starting Simple: The 10-Minute Movement Commitment</h2>
              
              <p className="my-6 leading-relaxed">
                One of the biggest barriers to starting a fitness routine is the misconception that you need to exercise for long periods. 
                The truth is that even 10 minutes of movement can provide health benefits, especially when you're just beginning.
              </p>
              
              <p className="my-6 leading-relaxed">
                Try this approach: Commit to just 10 minutes of movement daily for the first two weeks. Choose from these beginner-friendly activities:
              </p>
              
              <ul className="space-y-3 my-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Walking</strong> - A simple walk around your neighborhood
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Basic stretching</strong> - Gentle movements to increase flexibility
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Beginner yoga</strong> - Follow along with free online videos
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Dancing</strong> - Put on your favorite music and move your body
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Bodyweight exercises</strong> - Simple movements like modified push-ups, gentle squats, and standing leg raises
                  </div>
                </li>
              </ul>
              
              <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
                "The journey of a thousand miles begins with a single step."
                <cite className="block mt-2 text-sm text-gray-600 not-italic">– Lao Tzu</cite>
              </blockquote>
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Your First Beginner Workout Routine</h2>
              
              <p className="my-6 leading-relaxed">
                Once you've established a 10-minute daily habit, you can progress to this simple full-body workout. 
                Perform this routine 2-3 times per week with at least one rest day between sessions.
              </p>
              
              <ContentImage 
                src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="Person doing gentle bodyweight exercise"
                caption="Bodyweight exercises are perfect for beginners - no equipment needed"
                credit="Photo by Bruce Mars on Unsplash"
              />
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
                <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Beginner's Full-Body Workout</h3>
                
                <p className="mb-4 italic">Perform each exercise for 30 seconds, rest for 30 seconds, then move to the next. Complete the circuit twice.</p>
                
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
                    <div>
                      <strong className="font-medium">Wall Push-Ups</strong> - Stand facing a wall with arms extended. Bend your elbows to bring your chest toward the wall, then push back.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
                    <div>
                      <strong className="font-medium">Chair Squats</strong> - Lower yourself to sit on a chair, then stand back up without using your hands.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
                    <div>
                      <strong className="font-medium">Standing Side Bends</strong> - Stand with feet shoulder-width apart, hands on hips. Bend sideways, alternating sides.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
                    <div>
                      <strong className="font-medium">Marching in Place</strong> - Lift your knees high while swinging your arms.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
                    <div>
                      <strong className="font-medium">Modified Plank</strong> - Hold a plank position from your knees instead of your toes.
                    </div>
                  </li>
                </ol>
              </div>
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Creating Sustainable Habits</h2>
              
              <p className="my-6 leading-relaxed">
                The most important factor in fitness success is consistency, not intensity. Here are strategies to help you stick with your new routine:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                  <strong className="font-medium text-primary">Schedule it</strong>
                  <p className="mt-1 text-sm">Block time for movement on your calendar</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                  <strong className="font-medium text-primary">Start small</strong>
                  <p className="mt-1 text-sm">Begin with achievable goals to build confidence</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                  <strong className="font-medium text-primary">Find activities you enjoy</strong>
                  <p className="mt-1 text-sm">You're more likely to continue if it's fun</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                  <strong className="font-medium text-primary">Celebrate progress</strong>
                  <p className="mt-1 text-sm">Acknowledge all victories, no matter how small</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary md:col-span-2">
                  <strong className="font-medium text-primary">Be kind to yourself</strong>
                  <p className="mt-1 text-sm">If you miss a day, simply restart without self-criticism</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">When to Progress</h2>
              
              <p className="my-6 leading-relaxed">
                After 4-6 weeks of consistent beginner workouts, you may feel ready for new challenges. Signs you're ready to progress include:
              </p>
              
              <ul className="my-6 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Exercises feel significantly easier than when you started
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  You recover quickly from your workouts
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  You're consistently completing your current routine
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  You're motivated to try more challenging movements
                </li>
              </ul>
              
              <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                Remember that fitness is a lifelong journey, not a race. The most successful approach is the one that brings you joy and fits 
                seamlessly into your lifestyle. Start where you are, use what you have, and celebrate every step forward.
              </p>
              
              <ContentImage 
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="Person with arms raised in success"
                caption="Every step in your fitness journey is worth celebrating"
                credit="Photo by Bruno Nascimento on Unsplash"
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