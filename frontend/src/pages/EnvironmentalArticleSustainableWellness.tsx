import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function EnvironmentalArticleSustainableWellness() {
  const navigate = useNavigate();
  const category = "environmental";
  const slug = "sustainable-wellness";
  
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
    image: "https://images.unsplash.com/photo-1616014954170-b7b04469221c",
    date: new Date(article.date),
    readTime: article.readTime,
    author: article.author,
    category: article.category,
    categoryLabel: getCategoryTitle(article.category)
  };
  
  return (
    <ArticleTemplate article={articleMetadata}>
      <p className="my-6 leading-relaxed">
        As we become increasingly aware of our environmental impact, the intersection of personal wellness and 
        ecological responsibility has never been more important. Sustainable wellness isn't just about taking 
        care of ourselves—it's about nurturing our well-being while being mindful of our planet's health.
      </p>

      <ContentImage 
        src="https://images.unsplash.com/photo-1629380108574-40c083555579"
        alt="Eco-friendly self-care products with natural ingredients"
        caption="Sustainable self-care products made from natural, biodegradable materials"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Environmental Impact of Self-Care</h2>

      <p className="my-6 leading-relaxed">
        Traditional self-care products and practices often come with a significant environmental footprint. 
        From single-use plastics in beauty products to water-intensive spa treatments, our pursuit of wellness 
        can inadvertently harm the environment. However, there are numerous ways to maintain a fulfilling 
        self-care routine while minimizing our ecological impact.
      </p>

      <div className="bg-green-50 p-6 rounded-lg my-8">
        <h3 className="font-medium text-lg mb-4">Common Environmental Concerns in Self-Care:</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Packaging waste</strong>
              <p className="text-gray-600">Beauty and wellness products often come in excessive, non-recyclable packaging</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Chemical pollution</strong>
              <p className="text-gray-600">Harmful ingredients in personal care products can contaminate water systems</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Resource consumption</strong>
              <p className="text-gray-600">High water and energy usage in traditional wellness practices</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Eco-Friendly Self-Care Alternatives</h2>

      <ContentImage 
        src="https://images.unsplash.com/photo-1624372635277-283042097f31?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Natural cleaning and self-care products arranged on a wooden surface"
        caption="Eco-friendly and natural alternatives for personal care and home products"
        credit="Photo by Unsplash"
      />

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">1. Natural Skincare Solutions</h3>

      <div className="space-y-4 my-6">
        <p className="leading-relaxed">
          Create your own effective skincare products using simple, natural ingredients:
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">DIY Face Mask Recipe:</h4>
          <ul className="space-y-2">
            <li>• 1 tablespoon organic honey (antibacterial properties)</li>
            <li>• 1/2 mashed avocado (natural moisturizer)</li>
            <li>• 1 teaspoon matcha powder (antioxidants)</li>
          </ul>
          <p className="text-gray-600 mt-3">Mix ingredients, apply for 15 minutes, rinse with cool water</p>
        </div>
      </div>

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">2. Sustainable Wellness Practices</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Low-Impact Exercise</h4>
          <ul className="space-y-2">
            <li>• Outdoor yoga (no equipment needed)</li>
            <li>• Walking or jogging in nature</li>
            <li>• Bodyweight exercises</li>
            <li>• Swimming in natural water bodies</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Mindful Consumption</h4>
          <ul className="space-y-2">
            <li>• Use reusable water bottles</li>
            <li>• Choose plastic-free packaging</li>
            <li>• Buy in bulk to reduce waste</li>
            <li>• Support eco-conscious brands</li>
          </ul>
        </div>
      </div>

      <ContentImage 
        src="https://images.unsplash.com/uploads/1412533519888a485b488/bb9f9777"
        alt="Person practicing yoga in a peaceful natural setting"
        caption="Mindful movement practices that connect us with nature"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Creating a Sustainable Wellness Routine</h2>

      <div className="space-y-6 my-6">
        <h3 className="text-xl font-serif font-semibold text-primary">Morning Ritual</h3>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ol className="space-y-4">
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
              <div>
                <strong>Oil pulling</strong> with organic coconut oil (reusable glass container)
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
              <div>
                <strong>Dry brushing</strong> with natural bristle brush (improves circulation)
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
              <div>
                <strong>Short shower</strong> with water-saving showerhead and natural bar soap
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
              <div>
                <strong>Mindful movement</strong> outdoors or by natural light
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-400">
        <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Making the Transition</h3>
        <p className="mb-4">Tips for switching to sustainable self-care:</p>
        <ul className="space-y-2">
          <li>• Use up existing products before replacing with eco-friendly alternatives</li>
          <li>• Research brands' environmental commitments and practices</li>
          <li>• Start with one area of your routine and gradually expand</li>
          <li>• Consider the full lifecycle of products you purchase</li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Bigger Picture</h2>

      <p className="my-6 leading-relaxed">
        Sustainable wellness extends beyond individual practices—it's about creating a ripple effect of 
        positive change. When we choose eco-friendly self-care options, we:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Environmental Impact</h4>
          <p>Reduce plastic waste, water pollution, and carbon emissions</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Community Influence</h4>
          <p>Inspire others to make conscious choices</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Market Change</h4>
          <p>Drive demand for sustainable products and practices</p>
        </div>
      </div>

      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "The greatest threat to our planet is the belief that someone else will save it."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Robert Swan</cite>
      </blockquote>

      <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
        Remember that sustainable wellness is a journey, not a destination. Every small change contributes 
        to both personal and planetary health. By making mindful choices in our self-care routines, we can 
        nurture ourselves while protecting the environment for future generations.
      </p>
    </ArticleTemplate>
  );
} 