import React from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { ArticleTemplate } from "components/ArticleTemplate";

export interface Props {
  className?: string;
}

export default function ArticleDetailPage({ className = "" }: Props) {
  // Use the query parameters instead of route params
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get parameters from search query
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const slug = searchParams.get("slug");
  
  // Check if there's a dedicated article page to navigate to
  if (category === "fitness" && slug === "science-behind-hiit") {
    return <Navigate to="/fitness-article-science-hiit" replace />;
  } else if (category === "mental-health" && slug === "science-of-stress") {
    return <Navigate to="/mental-health-article-science-of-stress" replace />;
  } else if (category === "nutrition" && slug === "balanced-macros-sustainable-eating") {
    return <Navigate to="/nutrition-article-balanced-macros-sustainable-eating" replace />;
  } else if (category === "lifestyle" && slug === "digital-minimalism") {
    return <Navigate to="/lifestyle-article-digital-minimalism" replace />;
  } else if (category === "health-conditions" && slug === "living-with-chronic-pain") {
    return <Navigate to="/health-conditions-article-living-with-chronic-pain" replace />;
  } else if (category === "environmental" && slug === "non-toxic-home") {
    return <Navigate to="/environmental-article-non-toxic-home" replace />;
  } else if (category === "self-care" && slug === "personalized-self-care-routine") {
    return <Navigate to="/self-care-article-personalized-self-care-routine" replace />;
  } else if (category === "self-care" && slug === "science-of-sleep") {
    return <Navigate to="/self-care-article-science-of-sleep" replace />;
  } else if (category === "spiritual" && slug === "meditation-fundamentals") {
    return <Navigate to="/spiritual-article-meditation-fundamentals" replace />;
  } else if (category === "spiritual" && slug === "connecting-with-nature") {
    return <Navigate to="/spiritual-article-connecting-with-nature" replace />;
  } else if (category === "mental-health" && slug === "mindfulness-beginners") {
    return <Navigate to="/mental-health-article-mindfulness-beginners" replace />;
  } else if (category === "nutrition" && slug === "truth-about-superfoods") {
    return <Navigate to="/nutrition-article-truth-about-superfoods" replace />;
  } else if (category === "fitness" && slug === "strength-training-beginners") {
    return <Navigate to="/fitness-article-strength-training-beginners" replace />;
  } else if (category === "lifestyle" && slug === "preventing-burnout") {
    return <Navigate to="/lifestyle-article-preventing-burnout" replace />;
  } else if (category === "environmental" && slug === "sustainable-wellness") {
    return <Navigate to="/environmental-article-sustainable-wellness" replace />;
  } else if (category === "health-conditions" && slug === "understanding-autoimmune-conditions") {
    return <Navigate to="/health-conditions-article-understanding-autoimmune" replace />;
  } else if (category === "nutrition" && slug === "meal-prep-101") {
    return <Navigate to="/nutrition-article-meal-prep-101" replace />;
  } else if (category === "fitness" && slug === "importance-mobility-work") {
    return <Navigate to="/fitness-article-importance-mobility-work" replace />;
  } else if (category === "spiritual" && slug === "finding-purpose") {
    return <Navigate to="/spiritual-article-finding-purpose" replace />;
  } else if (category === "self-care" && slug === "skincare-essentials") {
    return <Navigate to="/self-care-article-skincare-essentials" replace />;
  } else if (category === "health-conditions" && slug === "digestive-health") {
    return <Navigate to="/health-conditions-article-digestive-health" replace />;
  } else if (category === "mental-health" && slug === "digital-detox") {
    return <Navigate to="/mental-health-article-digital-detox" replace />;
  } else if (category === "lifestyle" && slug === "morning-rituals") {
    return <Navigate to="/lifestyle-article-morning-rituals" replace />;
  } else if (category === "environmental" && slug === "biophilic-design") {
    return <Navigate to="/environmental-article-biophilic-design" replace />;
  } else if (category === "mental-health" && slug === "building-emotional-resilience") {
    return <Navigate to="/mental-health-article-building-emotional-resilience" replace />;
  } else if (category === "nutrition" && slug === "intuitive-eating") {
    return <Navigate to="/nutrition-article-intuitive-eating" replace />;
  }
  
  // Get article if category and slug exist
  const articles = category ? getCategoryArticles(category) : [];
  const article = articles.find(a => a.slug === slug);
  
  // Log for debugging
  console.log("Query params:", { category, slug });
  console.log("Found article:", article);
  
  // If article not found, show placeholder with back button
  if (!article) {
    return (
      <div className={`min-h-screen flex flex-col ${className}`}>
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
  
  // Display article using the new template
  return (
    <ArticleTemplate article={articleMetadata}>
      {/* Rich Article Content */}
      <p className="my-6 leading-relaxed">
        When we approach wellness holistically, we discover the powerful interconnections between physical, 
        mental, and emotional wellbeing. This integrated perspective transforms how we think about health.
      </p>
      
      <p className="my-6 leading-relaxed">
        Modern research continues to validate what traditional wisdom has taught for centuries—our bodies 
        and minds function as a unified system, not as separate components operating independently.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="Person practicing yoga in a peaceful setting"
        caption="Finding balance through mindful movement"
        credit="Photo by Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Science Behind Wellness Integration</h2>
      
      <p className="my-6 leading-relaxed">
        Recent studies in neuroscience and psychology reveal how profoundly our daily habits affect multiple 
        dimensions of wellness simultaneously. This research offers compelling reasons to adopt an integrated 
        approach.
      </p>
      
      <p className="my-6 leading-relaxed">
        For example, regular physical activity not only strengthens the cardiovascular system but also:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Enhances cognitive function</strong> by increasing blood flow to the brain and promoting neuroplasticity
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Improves mood regulation</strong> through the production of endorphins and other neurochemicals
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Supports quality sleep</strong> by regulating circadian rhythms and reducing anxiety
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Reduces inflammation</strong> that contributes to chronic disease and accelerated aging
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        Similarly, mindfulness practices strengthen neural pathways that support emotional resilience 
        while reducing stress hormone production that can damage physical tissues.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Wellness is the complete integration of body, mind, and spirit – the realization 
        that everything we do, think, feel, and believe has an effect on our state of 
        well-being."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Greg Anderson</cite>
      </blockquote>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Practical Applications for Daily Life</h2>
      
      <p className="my-6 leading-relaxed">
        Implementing a holistic approach doesn't require radical lifestyle changes. In fact, small, 
        consistent actions often create the most sustainable improvements over time.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Nutrition: Beyond Calories and Macros</h3>
      
      <p className="my-6 leading-relaxed">
        While nutritional science offers valuable insights into optimal macronutrient ratios and caloric needs, 
        a holistic approach considers how food affects your energy, mood, and cognitive performance.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="Colorful array of fresh fruits and vegetables"
        caption="Nutrient-dense foods provide the building blocks for cellular renewal"
      />
      
      <p className="my-6 leading-relaxed">
        Consider approaching dietary changes through addition rather than restriction. Adding a serving of 
        leafy greens, incorporating anti-inflammatory spices like turmeric, or increasing omega-3 rich foods 
        can have cascading benefits throughout your body's systems.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Movement: Finding Joy in Physical Activity</h3>
      
      <p className="my-6 leading-relaxed">
        The most beneficial exercise regimen is one you'll actually maintain. Finding forms of movement that 
        bring genuine enjoyment—whether dancing, hiking, swimming, or martial arts—ensures consistency.
      </p>
      
      <p className="my-6 leading-relaxed">
        Even brief movement breaks throughout the day can counteract the negative effects of prolonged sitting:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>A 5-minute stretching routine between work tasks</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Taking phone calls while walking</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Using a timer to remind yourself to stand and move every hour</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Choosing stairs over elevators when practical</div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Morning Rituals: Setting Intentional Foundations</h3>
      
      <p className="my-6 leading-relaxed">
        How we begin our days often sets the tone for what follows. A thoughtfully designed morning routine 
        can address multiple wellness dimensions in a compact timeframe.
      </p>
      
      <pre><code>{`// Sample morning wellness framework
const morningRoutine = {
  hydration: "16oz water with lemon", // Supports detoxification
  movement: "10-minute gentle yoga flow", // Activates circulation
  nutrition: "Protein-rich breakfast with healthy fats", // Stabilizes blood sugar
  mindfulness: "5-minute breath awareness or gratitude practice" // Centers attention
};`}</code></pre>
      
      <p className="my-6 leading-relaxed">
        Even implementing just one of these elements consistently can create a positive ripple effect 
        throughout your day and gradually build momentum for additional healthy habits.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Implementation Strategy: The Step-by-Step Approach</h3>
      
      <p className="my-6 leading-relaxed">
        Sustainable wellness transformation typically follows this progression:
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Self-assessment:</strong> Honestly evaluate your current wellness practices and identify areas for growth
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Focus selection:</strong> Choose one specific dimension to address initially
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Incremental change:</strong> Implement small, manageable adjustments rather than complete overhauls
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Consistency emphasis:</strong> Maintain new habits until they require minimal conscious effort
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
          <div>
            <strong className="font-medium">Progress tracking:</strong> Document changes in how you feel physically, mentally, and emotionally
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">6</span>
          <div>
            <strong className="font-medium">Expansion:</strong> Gradually incorporate practices addressing additional wellness dimensions
          </div>
        </li>
      </ol>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Role of Community in Sustainable Wellness</h2>
      
      <p className="my-6 leading-relaxed">
        While personal habits form the foundation of wellbeing, social connections profoundly influence 
        our ability to maintain healthy practices long-term.
      </p>
      
      <p className="my-6 leading-relaxed">
        Research consistently demonstrates that people with strong social support networks experience:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Lower rates of depression and anxiety</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Reduced risk of cardiovascular disease</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Stronger immune system functioning</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Better recovery outcomes following illness</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Greater longevity and life satisfaction</div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        Finding or creating a community that shares your wellness values—whether through group fitness classes, 
        cooking clubs, meditation groups, or online forums—provides accountability, encouragement, and the 
        profound sense of belonging that humans inherently need to thrive.
      </p>
    </ArticleTemplate>
  );
}
