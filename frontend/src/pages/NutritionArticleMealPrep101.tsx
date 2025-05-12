import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function NutritionArticleMealPrep101() {
  const navigate = useNavigate();
  const category = "nutrition";
  const slug = "meal-prep-101";
  
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
        Meal preparation is more than just a trendy hashtag—it's a powerful strategy for maintaining a 
        healthy diet while saving time and money. Whether you're a busy professional, a parent, or 
        simply looking to eat healthier, mastering the art of meal prep can transform your relationship 
        with food and nutrition.
      </p>

      <ContentImage 
        src="https://images.unsplash.com/photo-1522579479806-486feddb6d25?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Fresh ingredients and meal prep containers laid out on a clean surface"
        caption="Starting with quality ingredients is essential for successful meal preparation"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Essential Meal Prep Foundations</h2>

      <div className="bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="font-medium text-lg mb-4">The Four Pillars of Successful Meal Prep:</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary mr-2">1.</span>
            <div>
              <strong>Planning</strong>
              <p className="text-gray-600">Create a weekly menu and shopping list</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">2.</span>
            <div>
              <strong>Shopping</strong>
              <p className="text-gray-600">Buy ingredients in bulk and focus on seasonal produce</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">3.</span>
            <div>
              <strong>Preparation</strong>
              <p className="text-gray-600">Efficient cooking and portioning techniques</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">4.</span>
            <div>
              <strong>Storage</strong>
              <p className="text-gray-600">Proper containers and organization methods</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Smart Planning Strategies</h2>

      <ContentImage 
        src="https://plus.unsplash.com/premium_photo-1663858367108-9150fe5ce9bd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Colorful array of fresh ingredients ready for meal preparation"
        caption="A variety of colorful ingredients ensures balanced, nutritious meals"
        credit="Photo by Unsplash"
      />

      <div className="space-y-4 my-6">
        <h3 className="text-xl font-serif font-semibold text-primary">Weekly Planning Template</h3>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Protein Sources:</h4>
              <ul className="space-y-2">
                <li>• Grilled chicken breast</li>
                <li>• Baked fish fillets</li>
                <li>• Legumes and beans</li>
                <li>• Tofu or tempeh</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Complex Carbs:</h4>
              <ul className="space-y-2">
                <li>• Brown rice</li>
                <li>• Quinoa</li>
                <li>• Sweet potatoes</li>
                <li>• Whole grain pasta</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Time-Saving Prep Methods</h3>

      <div className="bg-green-50 p-6 rounded-lg my-8">
        <h4 className="font-medium mb-3">Batch Cooking Techniques:</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <div>
              <strong>Sheet Pan Meals</strong>
              <p className="text-gray-600">Roast multiple vegetables and proteins together</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <div>
              <strong>One-Pot Cooking</strong>
              <p className="text-gray-600">Prepare soups, stews, and grain dishes efficiently</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <div>
              <strong>Parallel Processing</strong>
              <p className="text-gray-600">Cook multiple items simultaneously using different methods</p>
            </div>
          </li>
        </ul>
      </div>

      <ContentImage 
        src="https://images.unsplash.com/photo-1543352632-fea6d4f83e78"
        alt="Healthy meal prep containers with fresh ingredients and balanced portions"
        caption="Organized meal prep containers showcase a week's worth of balanced, nutritious meals"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Storage Solutions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Container Types</h4>
          <ul className="space-y-2">
            <li>• Glass containers with airtight lids</li>
            <li>• Portion-controlled containers</li>
            <li>• Mason jars for salads</li>
            <li>• Silicone bags for snacks</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Storage Tips</h4>
          <ul className="space-y-2">
            <li>• Label with dates</li>
            <li>• Store sauces separately</li>
            <li>• Use moisture control methods</li>
            <li>• Organize by eat-by dates</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-400">
        <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Food Safety Guidelines</h3>
        <ul className="space-y-2">
          <li>• Cool foods completely before storing</li>
          <li>• Keep refrigerated items at or below 40°F (4°C)</li>
          <li>• Use within 3-4 days for optimal freshness</li>
          <li>• Reheat thoroughly to 165°F (74°C)</li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Sample Meal Prep Schedule</h2>

      <div className="bg-gray-50 p-6 rounded-lg my-8">
        <ol className="space-y-4">
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
            <div>
              <strong>Saturday/Sunday:</strong> Plan menu and shop for ingredients
            </div>
          </li>
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
            <div>
              <strong>Sunday Morning:</strong> Wash and prep vegetables
            </div>
          </li>
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
            <div>
              <strong>Sunday Afternoon:</strong> Cook proteins and grains
            </div>
          </li>
          <li className="flex">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
            <div>
              <strong>Sunday Evening:</strong> Portion and store meals
            </div>
          </li>
        </ol>
      </div>

      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "The secret of getting ahead is getting started. The secret of getting started is breaking your 
        complex overwhelming tasks into small manageable tasks, and then starting on the first one."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Mark Twain</cite>
      </blockquote>

      <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
        Remember that meal prep is a skill that improves with practice. Start small with just a few meals 
        per week and gradually expand as you become more comfortable with the process. The time you invest 
        in preparation will pay off in healthier eating habits, reduced stress around mealtime, and more 
        time to enjoy your evenings during the week.
      </p>
    </ArticleTemplate>
  );
} 