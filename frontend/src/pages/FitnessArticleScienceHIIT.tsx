import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { SocialShare } from "components/SocialShare";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function FitnessArticleScienceHIIT() {
  const navigate = useNavigate();
  const category = "fitness";
  const slug = "science-behind-hiit";
  
  // Get article data
  const articles = getCategoryArticles(category);
  const article = articles.find(a => a.slug === slug);
  
  // If article not found, show placeholder with back button
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
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
      </div>
    );
  }
  
  // Format article metadata for the template
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
  
  // Display article using the template
  return (
    <ArticleTemplate article={articleMetadata}>
      {/* Rich Article Content */}
      <p>
        High-Intensity Interval Training (HIIT) has revolutionized how we approach exercise efficiency. 
        This training method alternates between intense bursts of activity and fixed periods of less-intense 
        activity or even complete rest. What makes HIIT particularly noteworthy is its ability to deliver 
        impressive fitness results in significantly less time than traditional steady-state cardio.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Person doing high-intensity interval training"
        caption="HIIT workouts can be adapted for various fitness levels and environments"
        credit="Photo by Jonathan Borba on Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Physiological Magic of HIIT</h2>
      
      <p className="my-6 leading-relaxed">
        The science behind HIIT's effectiveness lies in several physiological mechanisms that are triggered 
        when we push our bodies to near-maximal exertion for short periods:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">EPOC Effect (Excess Post-exercise Oxygen Consumption)</strong>: Often called the "afterburn effect," 
            HIIT creates an oxygen debt that requires your body to continue burning calories at an elevated rate for up to 24-48 
            hours after your workout has ended.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Mitochondrial Density Increase</strong>: Research shows that HIIT stimulates the production of 
            new mitochondria (your cells' power plants), enhancing your body's ability to use oxygen and generate energy.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Human Growth Hormone (HGH) Production</strong>: HIIT workouts can trigger up to a 450% increase in HGH 
            production, which aids in fat metabolism and muscle growth.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Insulin Sensitivity Improvement</strong>: Just a few weeks of HIIT has been shown to improve insulin 
            sensitivity, helping your muscles more effectively use glucose for energy.
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        Perhaps most remarkably, these benefits occur regardless of your starting fitness level. Studies have documented 
        significant cardiovascular and metabolic improvements in everyone from elite athletes to those with chronic health conditions.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "HIIT is like pressing the fast-forward button on your fitness results. The intensity is what creates the adaptation, 
        and the adaptation is what creates the results."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Dr. Martin Gibala, HIIT researcher</cite>
      </blockquote>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Crafting Your First HIIT Workout</h2>
      
      <p className="my-6 leading-relaxed">
        The beauty of HIIT lies in its adaptability. You can create effective HIIT workouts with virtually any exercise 
        modality—bodyweight movements, kettlebells, battle ropes, swimming, cycling, or running.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Fitness tracker showing heart rate intervals during HIIT"
        caption="Tracking intervals and heart rate is essential for proper HIIT execution"
        credit="Photo by Towfiqu barbhuiya on Unsplash"
      />
      
      <p className="my-6 leading-relaxed">
        For beginners, I recommend starting with this 20-minute protocol that requires no equipment:
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Warm-Up</strong>: 5 minutes of light jogging in place, arm circles, and dynamic stretches
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Work Interval</strong>: 30 seconds of bodyweight squats at maximum effort
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Rest Interval</strong>: 90 seconds of walking in place
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Repeat</strong>: Complete 8 rounds of work/rest intervals
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
          <div>
            <strong className="font-medium">Cool Down</strong>: 5 minutes of walking followed by gentle stretching
          </div>
        </li>
      </ol>
      
      <p className="my-6 leading-relaxed">
        As your fitness improves, you can intensify your HIIT workouts by:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Decreasing rest periods (e.g., from 90 seconds to 60 seconds)</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Increasing work intervals (e.g., from 30 seconds to 45 seconds)</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Adding more challenging exercises (e.g., burpees, mountain climbers)</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Incorporating multiple movements in a circuit format</div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Sample HIIT Circuit for Intermediate Fitness Levels</h3>
      
      <p className="my-6 leading-relaxed">
        Complete 4 rounds of this circuit with 40 seconds of work, 20 seconds of rest between exercises, 
        and 2 minutes of rest between rounds. Total workout time: approximately 25 minutes.
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Jump Squats</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Push-Ups</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Kettlebell Swings</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Mountain Climbers</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Plank Shoulder Taps</div>
        </li>
      </ul>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Common HIIT Mistakes to Avoid</h2>
      
      <p className="my-6 leading-relaxed">
        While HIIT offers tremendous benefits, improper execution can limit results or lead to injury. Here are the most 
        common pitfalls to avoid:
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Insufficient Intensity</strong>: The "high-intensity" in HIIT means working at 80-95% of your maximum 
            capacity during work intervals. If you're able to maintain a conversation, you're likely not pushing hard enough.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Skipping Proper Warm-Up</strong>: The intense nature of HIIT demands thorough preparation of your 
            cardiovascular system and muscles. Never skip your warm-up.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Sacrificing Form for Speed</strong>: Maintaining proper exercise form is crucial, especially at high 
            intensities. Reduce speed or choose a less demanding modification if your form begins to deteriorate.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Excessive Frequency</strong>: Due to its demanding nature, most experts recommend limiting HIIT to 2-3 
            sessions per week, allowing 48 hours between sessions for proper recovery.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
          <div>
            <strong className="font-medium">Neglecting Recovery</strong>: The adaptation process that makes you stronger occurs during recovery, not 
            during the workout itself. Adequate sleep, nutrition, and active recovery are essential components of any HIIT program.
          </div>
        </li>
      </ol>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Is HIIT Right for Everyone?</h2>
      
      <p className="my-6 leading-relaxed">
        While research supports HIIT's effectiveness across various populations, it's not universally appropriate. Those with 
        certain cardiovascular conditions, joint issues, or beginners to exercise should consult healthcare providers before 
        starting a HIIT regimen.
      </p>
      
      <p className="my-6 leading-relaxed">
        For many people, the ideal approach is combining HIIT with other training modalities, including strength training and 
        lower-intensity steady-state cardio, to create a comprehensive fitness program that addresses all aspects of physical wellness.
      </p>
    </ArticleTemplate>
  );
}
