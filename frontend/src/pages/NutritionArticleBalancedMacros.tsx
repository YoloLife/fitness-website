import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function NutritionArticleBalancedMacros() {
  const navigate = useNavigate();
  const category = "nutrition";
  const slug = "balanced-macros-sustainable-eating";
  
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
      <p className="my-6 leading-relaxed">
        In a world of extreme eating approaches and conflicting nutrition advice, finding a balanced, 
        sustainable way of eating can feel nearly impossible. However, understanding the science of 
        macronutrients—proteins, carbohydrates, and fats—can provide a flexible framework that supports 
        both health goals and dietary preferences over the long term.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1623428188474-b1d532c5e560?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="A colorful plant-based meal with variety of vegetables, proteins and healthy fats"
        caption="A well-balanced plate incorporating various macronutrients from whole food sources"
        credit="Photo from Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Understanding Macronutrients: The Building Blocks of Nutrition</h2>
      
      <p className="my-6 leading-relaxed">
        Macronutrients are the nutrients our bodies need in large amounts to function properly. Each plays a 
        distinct yet complementary role in supporting overall health:
      </p>
      
      <div className="space-y-6 my-8">
        <div className="p-6 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Proteins</h4>
          <ul className="space-y-2">
            <li><strong className="font-medium">Primary functions:</strong> Tissue building and repair, enzyme and hormone production, immune function</li>
            <li><strong className="font-medium">Caloric value:</strong> 4 calories per gram</li>
            <li><strong className="font-medium">Key sources:</strong> Animal products (meat, fish, eggs, dairy), legumes, tofu, tempeh, seitan, nutritional yeast, certain grains and vegetables</li>
          </ul>
        </div>
        
        <div className="p-6 bg-amber-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Carbohydrates</h4>
          <ul className="space-y-2">
            <li><strong className="font-medium">Primary functions:</strong> Immediate and stored energy, brain function, intestinal health (fiber)</li>
            <li><strong className="font-medium">Caloric value:</strong> 4 calories per gram</li>
            <li><strong className="font-medium">Key sources:</strong> Whole grains, fruits, vegetables, legumes, dairy; refined versions in processed foods and sugars</li>
          </ul>
        </div>
        
        <div className="p-6 bg-green-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Fats</h4>
          <ul className="space-y-2">
            <li><strong className="font-medium">Primary functions:</strong> Energy storage, cell membrane structure, hormone production, vitamin absorption, brain health</li>
            <li><strong className="font-medium">Caloric value:</strong> 9 calories per gram</li>
            <li><strong className="font-medium">Key sources:</strong> Oils, avocados, nuts, seeds, fatty fish, olives, full-fat dairy; less healthy versions in processed foods</li>
          </ul>
        </div>
      </div>
      
      <p className="my-6 leading-relaxed">
        Contrary to many popular diets that demonize one macronutrient while elevating others, research consistently 
        shows that our bodies function best with balanced amounts of all three. The optimal ratio, however, varies 
        based on individual factors.
      </p>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Moving Beyond Rigid Macro Formulas</h2>
      
      <p className="my-6 leading-relaxed">
        While there are general guidelines for macronutrient distribution, research increasingly shows that 
        personalization matters more than rigid adherence to specific percentages:
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1598515213381-80d77efcdf32?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="A person preparing a balanced meal with diverse ingredients"
        caption="Preparing meals with a variety of whole foods naturally creates macro balance"
        credit="Photo from Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Protein: The Foundation of Sustainable Eating</h3>
      
      <p className="my-6 leading-relaxed">
        Protein has earned its reputation as a crucial macronutrient for several compelling reasons:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Satiety and metabolic advantage</strong>: Protein requires more energy to digest (thermal effect of food) and keeps you fuller longer than other macronutrients, making it valuable for both weight management and stable energy.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Muscle preservation</strong>: Adequate protein helps maintain lean tissue during weight loss and aging, supporting metabolic health and functional capacity.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Recovery support</strong>: Beyond just athletes, protein supports daily tissue repair and immune function for everyone.
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        Research suggests that protein needs are likely higher than traditional recommendations of 0.8g per kg of body weight, with many experts now recommending 1.2-2.0g/kg for optimal health, depending on activity level, age, and goals.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Carbohydrates: Quality Matters More Than Quantity</h3>
      
      <p className="my-6 leading-relaxed">
        The debate around carbohydrates has perhaps been the most polarizing in nutrition science. However, emerging research clarifies that carbohydrate quality impacts health more significantly than absolute amount:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-green-600">Emphasize</h4>
          <ul className="space-y-2 list-disc pl-5">
            <li>Fiber-rich whole grains (oats, quinoa, barley)</li>
            <li>Legumes (beans, lentils, chickpeas)</li>
            <li>Fruits with edible skins/seeds</li>
            <li>Non-starchy vegetables</li>
            <li>Starchy vegetables (sweet potatoes, winter squash)</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-red-600">Minimize</h4>
          <ul className="space-y-2 list-disc pl-5">
            <li>Refined grains (white bread, pasta, rice)</li>
            <li>Added sugars and sweeteners</li>
            <li>Ultra-processed convenience foods</li>
            <li>Sugar-sweetened beverages</li>
            <li>Desserts and sweets with minimal nutritional value</li>
          </ul>
        </div>
      </div>
      
      <p className="my-6 leading-relaxed">
        Individual carbohydrate tolerance varies significantly based on genetics, activity level, metabolic health, 
        and microbiome composition. Someone who is highly active may thrive with higher carbohydrate intake, while 
        others may feel better with moderate amounts.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Fats: Essential for Health and Satisfaction</h3>
      
      <p className="my-6 leading-relaxed">
        After decades of being vilified, dietary fat has been rehabilitated in nutritional science. We now understand that:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Fat is required</strong> for hormone production, cell membrane integrity, and absorption of fat-soluble vitamins (A, D, E, K)
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Dietary fat improves food palatability</strong> and contributes significantly to meal satisfaction
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Various fat types have different physiological effects</strong>, with mono and polyunsaturated fats generally supporting health
          </div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1620661244237-8549713e8a84?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Healthy sources of dietary fat including avocado, nuts, and olive oil"
        caption="Nutrient-dense sources of healthy fats provide essential fatty acids and support vitamin absorption"
        credit="Photo from Unsplash"
      />
      
      <p className="my-6 leading-relaxed">
        While extremes (very low or very high fat intake) may present health risks for most people, moderate 
        fat consumption from quality sources supports both physical health and eating satisfaction. This balance 
        is key for sustainability.
      </p>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Finding Your Personal Macro Balance</h2>
      
      <p className="my-6 leading-relaxed">
        Rather than prescribing a one-size-fits-all approach, research suggests several factors that should 
        influence your macronutrient ratio:
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Activity level and type</strong>: Endurance athletes may benefit from higher carbohydrate intake, while strength athletes often need higher protein. Sedentary individuals typically require lower overall calories with consistent protein.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Metabolic health</strong>: Those with insulin resistance or metabolic syndrome may benefit from moderating carbohydrates (especially refined ones) while emphasizing protein, healthy fats, and fiber.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Age and body composition</strong>: Protein needs increase with age and with higher muscle mass. Older adults often benefit from higher protein intake to combat age-related muscle loss.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Personal preferences and cultural considerations</strong>: The most sustainable diet is one that includes foods you enjoy and respects your cultural background and food traditions.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
          <div>
            <strong className="font-medium">Individual responses</strong>: Track how different macronutrient balances affect your energy, mood, digestion, and performance to refine your approach.
          </div>
        </li>
      </ol>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "The best diet is not a diet at all, but a way of eating that becomes second nature, automatic, and enjoyable enough that you can sustain it for years to come."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Precision Nutrition</cite>
      </blockquote>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Practical Implementation: Beyond Macro Counting</h2>
      
      <p className="my-6 leading-relaxed">
        While tracking macros can be educational in the short term, building sustainable eating habits requires more practical, flexible approaches:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">The Balanced Plate Method</h3>
      
      <p className="my-6 leading-relaxed">
        One of the simplest approaches to balanced eating is visualizing your plate:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="p-6 bg-blue-50 rounded-lg flex flex-col items-center text-center">
          <div className="text-xl font-bold mb-2">¼ Plate</div>
          <div className="font-medium mb-2">Quality Protein</div>
          <p className="text-sm">Animal or plant-based sources that provide essential amino acids</p>
        </div>
        
        <div className="p-6 bg-green-50 rounded-lg flex flex-col items-center text-center">
          <div className="text-xl font-bold mb-2">½ Plate</div>
          <div className="font-medium mb-2">Non-Starchy Vegetables</div>
          <p className="text-sm">Diverse colors providing fiber, micronutrients, and phytonutrients</p>
        </div>
        
        <div className="p-6 bg-amber-50 rounded-lg flex flex-col items-center text-center">
          <div className="text-xl font-bold mb-2">¼ Plate</div>
          <div className="font-medium mb-2">Complex Carbs</div>
          <p className="text-sm">Whole grains, starchy vegetables, or legumes with healthy fats</p>
        </div>
      </div>
      
      <p className="my-6 leading-relaxed">
        This visual approach naturally creates a relatively balanced macronutrient distribution while focusing 
        on food quality rather than precise numbers.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Habit-Based Strategies for Balanced Nutrition</h3>
      
      <div className="space-y-4 my-6">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-primary">Include protein in every meal and most snacks</h4>
          <p className="text-sm mt-1">This provides a consistent amino acid supply and improves meal satiety.</p>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-primary">Prioritize fiber-rich carbohydrate sources</h4>
          <p className="text-sm mt-1">Fiber slows digestion, moderates blood sugar impact, and supports gut health.</p>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-primary">Include sources of healthy fats with meals</h4>
          <p className="text-sm mt-1">Improves vitamin absorption, adds flavor, and increases meal satisfaction.</p>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-primary">Eat mindfully until satisfied, not stuffed</h4>
          <p className="text-sm mt-1">Honors hunger and fullness cues to naturally regulate intake.</p>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-primary">Plan for occasional flexibility</h4>
          <p className="text-sm mt-1">Long-term sustainability requires room for celebration foods and social eating.</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Beyond Macros: Other Elements of Sustainable Nutrition</h2>
      
      <p className="my-6 leading-relaxed">
        While macronutrient balance is important, truly sustainable nutrition encompasses other key elements:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Micronutrient density</strong>: Prioritizing nutrient-rich foods ensures you get essential vitamins and minerals while meeting caloric needs.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Food quality</strong>: Minimally processed, whole foods generally provide better nutrition than highly processed alternatives, regardless of macronutrient content.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Eating patterns</strong>: Meal timing, frequency, and circumstances (social context, mindfulness) all influence the physiological and psychological effects of food.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Individual variation</strong>: Genetic factors, gut microbiome composition, health history, and personal circumstances all influence optimal eating patterns.
          </div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Colorful smoothie bowl with toppings"
        caption="Colorful meals made from whole foods naturally provide a spectrum of nutrients"
        credit="Photo from Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Path Forward: Personalization and Flexibility</h2>
      
      <p className="my-6 leading-relaxed">
        As nutrition science evolves, one conclusion becomes increasingly clear: the most effective approach 
        to eating combines evidence-based principles with personal exploration and adaptation.
      </p>
      
      <p className="my-6 leading-relaxed">
        Consider these steps to develop your sustainable approach to balanced eating:
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Start with fundamentals</strong>: Ensure adequate protein, include a variety of fiber-rich plants, and incorporate quality fat sources.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Observe and adjust</strong>: Pay attention to how different meals and patterns affect your energy, mood, digestion, and other markers of wellbeing.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Consider context</strong>: Adapt your approach during different life phases, seasons, and circumstances rather than rigidly adhering to a single formula.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Seek enjoyment</strong>: Sustainable nutrition must include foods and eating experiences that bring pleasure, satisfaction, and connection.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
          <div>
            <strong className="font-medium">Value consistency over perfection</strong>: Sustainable approaches prioritize reliable, repeatable habits rather than short-term optimization.
          </div>
        </li>
      </ol>
      
      <p className="my-6 leading-relaxed">
        By focusing on balanced macronutrients from quality sources, while remaining flexible and attuned to 
        your individual needs, you can develop an eating pattern that supports health goals while remaining 
        practical and enjoyable for years to come.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Ann Wigmore</cite>
      </blockquote>
      
      <p className="my-6 leading-relaxed">
        Remember that nutrition is just one component of overall health. The most sustainable approach combines 
        balanced eating with regular physical activity, stress management, adequate sleep, and meaningful social 
        connections—creating a foundation for lifelong wellbeing.
      </p>
    </ArticleTemplate>
  );
} 