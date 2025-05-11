import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function SelfCareArticleSkinCareEssentials() {
  const navigate = useNavigate();
  const category = "self-care";
  const slug = "skincare-essentials";
  
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
        Building an effective skincare routine doesn't have to be complicated or expensive. The key is 
        understanding your skin type and choosing the right products that address your specific needs. 
        This guide will help you create a personalized skincare routine that works for you.
      </p>

      <ContentImage 
        src="https://images.unsplash.com/photo-1743928984149-278560f74cde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Collection of natural skincare products arranged on a clean surface"
        caption="A well-curated selection of skincare products can address multiple skin concerns"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Understanding Your Skin Type</h2>

      <div className="bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="font-medium text-lg mb-4">Common Skin Types:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Basic Types</h4>
            <ul className="space-y-2">
              <li>• Normal</li>
              <li>• Dry</li>
              <li>• Oily</li>
              <li>• Combination</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Special Considerations</h4>
            <ul className="space-y-2">
              <li>• Sensitive skin</li>
              <li>• Acne-prone</li>
              <li>• Mature skin</li>
              <li>• Hyperpigmentation</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Essential Skincare Steps</h2>

      <ContentImage 
        src="https://images.unsplash.com/photo-1722350553295-ba84043b64cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Person applying skincare product with gentle patting motions"
        caption="Proper application technique is crucial for product effectiveness"
        credit="Photo by Unsplash"
      />

      <div className="space-y-4 my-6">
        <h3 className="text-xl font-serif font-semibold text-primary">Basic Daily Routine</h3>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <ol className="space-y-4">
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
              <div>
                <strong>Cleanse</strong>
                <p className="text-gray-600">Remove dirt, oil, and makeup with a gentle cleanser suitable for your skin type</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
              <div>
                <strong>Tone (Optional)</strong>
                <p className="text-gray-600">Balance pH and prepare skin for treatments</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
              <div>
                <strong>Treat</strong>
                <p className="text-gray-600">Apply serums or treatments targeting specific concerns</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
              <div>
                <strong>Moisturize</strong>
                <p className="text-gray-600">Lock in hydration and strengthen skin barrier</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
              <div>
                <strong>Protect (Morning)</strong>
                <p className="text-gray-600">Apply broad-spectrum sunscreen with at least SPF 30</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Key Ingredients Guide</h2>

      <ContentImage 
        src="https://images.unsplash.com/photo-1492552181161-62217fc3076d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Natural skincare ingredients and essential oils"
        caption="Understanding active ingredients helps in choosing the right products"
        credit="Photo by Unsplash"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Hydrating Ingredients</h4>
          <ul className="space-y-2">
            <li>• Hyaluronic acid</li>
            <li>• Glycerin</li>
            <li>• Ceramides</li>
            <li>• Squalane</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Active Ingredients</h4>
          <ul className="space-y-2">
            <li>• Vitamin C (antioxidant)</li>
            <li>• Retinol (anti-aging)</li>
            <li>• Niacinamide (brightening)</li>
            <li>• AHA/BHA (exfoliating)</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-400">
        <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Important Tips</h3>
        <ul className="space-y-2">
          <li>• Introduce new products one at a time</li>
          <li>• Patch test before full application</li>
          <li>• Be consistent with your routine</li>
          <li>• Listen to your skin's needs</li>
          <li>• Don't overload on products</li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Common Mistakes to Avoid</h2>

      <div className="bg-red-50 p-6 rounded-lg my-8">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✗</span>
            <div>
              <strong>Over-exfoliating</strong>
              <p className="text-gray-600">Can damage skin barrier and cause sensitivity</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✗</span>
            <div>
              <strong>Skipping sunscreen</strong>
              <p className="text-gray-600">Essential for preventing premature aging and sun damage</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✗</span>
            <div>
              <strong>Using wrong product combinations</strong>
              <p className="text-gray-600">Some ingredients shouldn't be used together</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Seasonal Adjustments</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Summer Skincare</h4>
          <ul className="space-y-2">
            <li>• Lighter moisturizers</li>
            <li>• Higher SPF protection</li>
            <li>• Oil-control products</li>
            <li>• Cooling ingredients</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Winter Skincare</h4>
          <ul className="space-y-2">
            <li>• Richer moisturizers</li>
            <li>• Gentle exfoliation</li>
            <li>• Hydrating masks</li>
            <li>• Barrier protection</li>
          </ul>
        </div>
      </div>

      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Beautiful skin requires commitment, not a miracle."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Erno Laszlo</cite>
      </blockquote>

      <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
        Remember that everyone's skin is unique, and what works for others may not work for you. 
        Be patient with your skincare journey and pay attention to how your skin responds to different 
        products and routines. With consistency and the right products, you can achieve and maintain 
        healthy, glowing skin.
      </p>
    </ArticleTemplate>
  );
} 