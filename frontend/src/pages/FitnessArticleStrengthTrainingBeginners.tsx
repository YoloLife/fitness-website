import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function FitnessArticleStrengthTrainingBeginners() {
  const navigate = useNavigate();
  const category = "fitness";
  const slug = "strength-training-beginners";
  
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
        Starting a strength training journey can feel overwhelming, but it doesn't have to be. This comprehensive guide 
        will walk you through everything you need to know to begin building strength safely and effectively, regardless 
        of your current fitness level.
      </p>

      <ContentImage 
        src="https://images.unsplash.com/photo-1723117418183-2422c62a5a75"
        alt="Woman training in a gym with exercise machines"
        caption="Modern gyms offer a variety of equipment for strength training"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Why Start Strength Training?</h2>

      <p className="my-6 leading-relaxed">
        Strength training offers numerous benefits beyond just building muscle:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Increased bone density</strong> - Reduces risk of osteoporosis and fractures
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Better metabolic health</strong> - Improves insulin sensitivity and metabolism
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Enhanced functional strength</strong> - Makes daily activities easier
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Improved body composition</strong> - Helps maintain healthy weight and muscle mass
          </div>
        </li>
      </ul>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Essential Equipment for Beginners</h2>

      <p className="my-6 leading-relaxed">
        You don't need a fully equipped gym to start. Begin with these basics:
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-8">
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-primary mr-2">1.</span>
            <div>
              <strong>Resistance Bands</strong>
              <p className="text-gray-600">Great for learning movement patterns and warming up</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">2.</span>
            <div>
              <strong>Dumbbells</strong>
              <p className="text-gray-600">Start with light weights (5-15 lbs) and progress gradually</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">3.</span>
            <div>
              <strong>Exercise Mat</strong>
              <p className="text-gray-600">For floor exercises and comfort during stretching</p>
            </div>
          </li>
        </ul>
      </div>

      <ContentImage 
        src="https://images.unsplash.com/photo-1723117417879-2effcca63cda"
        alt="Diverse group of people participating in a weight training class"
        caption="Group classes can provide guidance and motivation for beginners"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Fundamental Movements</h2>

      <p className="my-6 leading-relaxed">
        Master these basic movement patterns before progressing to more complex exercises:
      </p>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Push Movements</h3>
          <ul className="space-y-2">
            <li>• Modified push-ups (wall or knee push-ups)</li>
            <li>• Dumbbell chest press</li>
            <li>• Shoulder press</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Pull Movements</h3>
          <ul className="space-y-2">
            <li>• Resistance band rows</li>
            <li>• Dumbbell rows</li>
            <li>• Lat pulldowns (if gym access)</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Lower Body</h3>
          <ul className="space-y-2">
            <li>• Bodyweight squats</li>
            <li>• Lunges</li>
            <li>• Glute bridges</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Starting Your Program</h2>

      <div className="bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Beginner's Weekly Schedule</h3>
        <div className="space-y-4">
          <div>
            <strong className="text-primary">Monday:</strong> Full-body workout
          </div>
          <div>
            <strong className="text-primary">Tuesday:</strong> Rest or light cardio
          </div>
          <div>
            <strong className="text-primary">Wednesday:</strong> Full-body workout
          </div>
          <div>
            <strong className="text-primary">Thursday:</strong> Rest or light cardio
          </div>
          <div>
            <strong className="text-primary">Friday:</strong> Full-body workout
          </div>
          <div>
            <strong className="text-primary">Weekend:</strong> Rest and recovery
          </div>
        </div>
      </div>

      <ContentImage 
        src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e"
        alt="Woman performing a deadlift with proper form"
        caption="Proper form is crucial for effective and safe strength training"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Form and Safety Tips</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start">
          <span className="text-primary mr-2">✓</span>
          <div>
            <strong>Start light</strong> - Focus on form before increasing weight
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-primary mr-2">✓</span>
          <div>
            <strong>Breathe properly</strong> - Exhale during exertion, inhale during the easier phase
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-primary mr-2">✓</span>
          <div>
            <strong>Maintain control</strong> - Avoid using momentum to lift weights
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-primary mr-2">✓</span>
          <div>
            <strong>Listen to your body</strong> - Distinguish between good and bad pain
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-400">
        <h3 className="text-xl font-serif font-semibold mb-4 text-primary">When to Seek Help</h3>
        <p>Consider working with a qualified fitness professional if you:</p>
        <ul className="space-y-2 mt-4">
          <li>• Are completely new to exercise</li>
          <li>• Have pre-existing injuries or conditions</li>
          <li>• Want to ensure proper form from the start</li>
          <li>• Need help creating a personalized program</li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Progress Tracking</h2>

      <p className="my-6 leading-relaxed">
        Track your progress using these metrics:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Exercise log</strong> - Record weights, sets, and reps
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Progress photos</strong> - Take photos every 4-6 weeks
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Measurements</strong> - Track key body measurements monthly
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Strength benchmarks</strong> - Note when you can increase weights
          </div>
        </li>
      </ul>

      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "The journey of a thousand miles begins with a single step. In strength training, that step is learning proper form and starting with the basics."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Fitness wisdom adapted from Lao Tzu</cite>
      </blockquote>

      <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
        Remember that everyone starts somewhere, and consistency is more important than perfection. Focus on proper form, 
        start with weights that allow you to maintain control, and gradually progress as you build confidence and strength. 
        With patience and dedication, you'll be amazed at what your body can achieve.
      </p>
    </ArticleTemplate>
  );
} 