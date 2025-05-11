import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function FitnessArticleImportanceMobilityWork() {
  const navigate = useNavigate();
  const category = "fitness";
  const slug = "importance-mobility-work";
  
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
        While many fitness enthusiasts focus on strength training and cardio, mobility work often takes 
        a back seat. However, mobility training is crucial for optimal performance, injury prevention, 
        and long-term joint health. Understanding and implementing proper mobility work can transform 
        your fitness journey and daily life.
      </p>

      <ContentImage 
        src="https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Person performing a deep stretching exercise"
        caption="Proper mobility work helps improve range of motion and prevent injuries"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Understanding Mobility vs. Flexibility</h2>

      <div className="bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="font-medium text-lg mb-4">Key Differences:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Mobility</h4>
            <ul className="space-y-2">
              <li>• Active range of motion</li>
              <li>• Control throughout movement</li>
              <li>• Strength at end ranges</li>
              <li>• Dynamic movement patterns</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Flexibility</h4>
            <ul className="space-y-2">
              <li>• Passive range of motion</li>
              <li>• Static stretching</li>
              <li>• Muscle lengthening</li>
              <li>• Held positions</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Benefits of Regular Mobility Work</h2>

      <ContentImage 
        src="https://images.unsplash.com/photo-1588286840104-8957b019727f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Person practicing yoga flow movement"
        caption="Dynamic mobility exercises improve body awareness and control"
        credit="Photo by Unsplash"
      />

      <div className="space-y-4 my-6">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary mr-2">1.</span>
            <div>
              <strong>Improved Performance</strong>
              <p className="text-gray-600">Better movement patterns lead to more efficient exercises and increased strength gains</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">2.</span>
            <div>
              <strong>Injury Prevention</strong>
              <p className="text-gray-600">Proper joint mobility reduces the risk of common exercise-related injuries</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">3.</span>
            <div>
              <strong>Better Recovery</strong>
              <p className="text-gray-600">Enhanced blood flow and reduced muscle tension speed up recovery</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">4.</span>
            <div>
              <strong>Daily Function</strong>
              <p className="text-gray-600">Improved mobility carries over to everyday activities and posture</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Essential Mobility Exercises</h2>

      <ContentImage 
        src="https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Person demonstrating a hip mobility exercise"
        caption="Hip mobility is crucial for proper movement patterns in many exercises"
        credit="Photo by Unsplash"
      />

      <div className="bg-gray-50 p-6 rounded-lg my-8">
        <h3 className="font-medium text-lg mb-4">Key Areas to Target:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Upper Body</h4>
            <ul className="space-y-2">
              <li>• Shoulder CARs (Controlled Articular Rotations)</li>
              <li>• Thoracic spine rotations</li>
              <li>• Scapular wall slides</li>
              <li>• Wrist mobility drills</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Lower Body</h4>
            <ul className="space-y-2">
              <li>• Hip 90/90 transitions</li>
              <li>• Ankle mobility work</li>
              <li>• Deep squat holds</li>
              <li>• Dynamic lunges</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Sample Mobility Routine</h3>

      <div className="bg-green-50 p-6 rounded-lg my-8">
        <h4 className="font-medium mb-3">10-Minute Daily Practice:</h4>
        <ol className="space-y-4">
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
            <div>
              <strong>Joint Warm-up (2 minutes)</strong>
              <p className="text-gray-600">Gentle movements through all major joints</p>
            </div>
          </li>
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
            <div>
              <strong>Dynamic Stretches (3 minutes)</strong>
              <p className="text-gray-600">Moving through ranges specific to your training</p>
            </div>
          </li>
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
            <div>
              <strong>Targeted Work (3 minutes)</strong>
              <p className="text-gray-600">Focus on problem areas or upcoming workout needs</p>
            </div>
          </li>
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
            <div>
              <strong>Movement Integration (2 minutes)</strong>
              <p className="text-gray-600">Combining movements into fluid patterns</p>
            </div>
          </li>
        </ol>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-400">
        <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Important Considerations</h3>
        <ul className="space-y-2">
          <li>• Always warm up before intense mobility work</li>
          <li>• Focus on quality over quantity of movement</li>
          <li>• Listen to your body and avoid pain</li>
          <li>• Be consistent with daily practice</li>
          <li>• Progress gradually with range and complexity</li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">When to Do Mobility Work</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Pre-Workout</h4>
          <ul className="space-y-2">
            <li>• Dynamic movements</li>
            <li>• Movement preparation</li>
            <li>• Exercise-specific mobility</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Post-Workout</h4>
          <ul className="space-y-2">
            <li>• Gentle stretching</li>
            <li>• Recovery movements</li>
            <li>• Relaxation techniques</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Off Days</h4>
          <ul className="space-y-2">
            <li>• Dedicated mobility sessions</li>
            <li>• Deeper work</li>
            <li>• Skill practice</li>
          </ul>
        </div>
      </div>

      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Movement is medicine. Quality movement is the prescription for longevity in training."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Dr. Kelly Starrett</cite>
      </blockquote>

      <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
        Remember that mobility work is an investment in your long-term fitness journey. While it may not 
        provide the immediate gratification of lifting heavier weights or running faster, the cumulative 
        benefits of consistent mobility practice will enhance every aspect of your training and daily life. 
        Start small, be consistent, and watch as your movement quality and performance improve over time.
      </p>
    </ArticleTemplate>
  );
} 