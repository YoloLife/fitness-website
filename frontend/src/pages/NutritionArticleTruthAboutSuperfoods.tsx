import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function NutritionArticleTruthAboutSuperfoods() {
  const navigate = useNavigate();
  const category = "nutrition";
  const slug = "truth-about-superfoods";
  
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
  
  // Return the article with content
  return (
    <ArticleTemplate article={articleMetadata}>
      <p className="my-6 leading-relaxed">
        The term "superfood" has become a powerful marketing buzzword in recent years, promising exceptional health benefits 
        and miraculous nutritional properties. But what's the real story behind these foods? This evidence-based guide will 
        help you separate fact from fiction and understand how to incorporate nutrient-dense foods into a balanced diet.
      </p>

      <ContentImage 
        src="https://images.unsplash.com/photo-1605447813584-26aeb3f8e6ae?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Fresh, colorful produce arranged on a surface"
        caption="A rainbow of nutrient-dense whole foods offers diverse health benefits"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">What Makes a Food "Super"?</h2>

      <p className="my-6 leading-relaxed">
        While there's no scientific definition of a "superfood," this term typically refers to foods that are:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Nutrient-dense</strong> - High levels of vitamins, minerals, and beneficial compounds relative to calories
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Antioxidant-rich</strong> - Contains compounds that help protect cells from damage
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Anti-inflammatory</strong> - May help reduce chronic inflammation in the body
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Bioactive</strong> - Contains compounds that may influence health beyond basic nutrition
          </div>
        </li>
      </ul>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Common Superfoods: Evidence vs. Hype</h2>

      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Berries</h3>
          <div className="space-y-4">
            <p><strong className="text-primary">The Claims:</strong> High in antioxidants, boost brain function, fight cancer</p>
            <p><strong className="text-primary">The Evidence:</strong> Research supports many benefits of berries, particularly for cognitive function and heart health. A study in the Journal of Agricultural and Food Chemistry found that regular berry consumption may help prevent age-related memory decline.</p>
            <p><strong className="text-primary">Practical Use:</strong> Add fresh or frozen berries to breakfast, snacks, or desserts. Both forms retain their nutritional benefits.</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Leafy Greens</h3>
          <div className="space-y-4">
            <p><strong className="text-primary">The Claims:</strong> Cancer-fighting properties, boost energy, improve digestion</p>
            <p><strong className="text-primary">The Evidence:</strong> Strong scientific support for numerous health benefits. The high levels of folate, vitamin K, and nitrates in leafy greens are well-documented to support cardiovascular health and cognitive function.</p>
            <p><strong className="text-primary">Practical Use:</strong> Aim for 1-2 servings daily, incorporated into salads, smoothies, or cooked dishes.</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Quinoa</h3>
          <div className="space-y-4">
            <p><strong className="text-primary">The Claims:</strong> Complete protein, gluten-free grain alternative, weight loss aid</p>
            <p><strong className="text-primary">The Evidence:</strong> Contains all essential amino acids and is high in fiber, but weight loss claims are oversimplified. Benefits come from replacing refined grains, not from quinoa itself.</p>
            <p><strong className="text-primary">Practical Use:</strong> Use as a base for grain bowls or as a side dish, but don't expect miraculous results.</p>
          </div>
        </div>
      </div>

      <ContentImage 
        src="https://images.unsplash.com/photo-1623428187425-873f16e10554?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Various plant-based foods and ingredients"
        caption="While individual foods can be nutrient-rich, a varied diet is key to optimal nutrition"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Common Myths and Misconceptions</h2>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-400">
          <h4 className="font-medium text-lg mb-2 text-primary">Myth: Superfoods Can Cure Diseases</h4>
          <p>Reality: While nutrient-rich foods support overall health, no single food can prevent or cure diseases. Health outcomes depend on overall diet and lifestyle factors.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-400">
          <h4 className="font-medium text-lg mb-2 text-primary">Myth: More is Always Better</h4>
          <p>Reality: Even beneficial foods can have diminishing returns or negative effects in excessive amounts. For example, too many Brazil nuts can lead to selenium toxicity.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-400">
          <h4 className="font-medium text-lg mb-2 text-primary">Myth: Exotic Equals Superior</h4>
          <p>Reality: Local, seasonal produce can be just as nutritious as exotic superfoods. Blueberries can be as beneficial as goji berries, and often more sustainable.</p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Smart Integration into Your Diet</h2>

      <p className="my-6 leading-relaxed">
        Instead of focusing on individual superfoods, consider these evidence-based approaches:
      </p>

      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Eat the Rainbow</strong> - Different colors indicate different beneficial compounds. Aim for variety in your produce choices.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Focus on Whole Foods</strong> - Processed "superfood" products often contain added sugars and lose nutrients in processing.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Consider Seasonality</strong> - Seasonal foods are often more nutritious and environmentally sustainable.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Balance is Key</strong> - No single food can provide all necessary nutrients. Variety ensures broad nutritional coverage.
          </div>
        </li>
      </ol>

      <div className="bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Budget-Friendly Alternatives</h3>
        <p className="mb-4">Many everyday foods offer similar benefits to expensive superfoods:</p>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-primary mr-2">→</span>
            <div><strong>Instead of açai:</strong> Mixed berries (fresh or frozen)</div>
          </li>
          <li className="flex items-center">
            <span className="text-primary mr-2">→</span>
            <div><strong>Instead of chia seeds:</strong> Flaxseeds</div>
          </li>
          <li className="flex items-center">
            <span className="text-primary mr-2">→</span>
            <div><strong>Instead of spirulina:</strong> Dark leafy greens</div>
          </li>
          <li className="flex items-center">
            <span className="text-primary mr-2">→</span>
            <div><strong>Instead of goji berries:</strong> Cranberries</div>
          </li>
        </ul>
      </div>

      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Let food be thy medicine and medicine be thy food - but remember that even Hippocrates advocated for a balanced approach to nutrition, not magical solutions."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Modern interpretation of Hippocrates</cite>
      </blockquote>

      <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
        While certain foods do offer exceptional nutritional benefits, the key to good health lies in maintaining a varied, 
        balanced diet rich in whole foods. Instead of seeking miracle foods, focus on building sustainable, enjoyable eating 
        habits that include a wide range of nutrient-dense options.
      </p>

      <ContentImage 
        src="https://images.unsplash.com/photo-1598515213381-80d77efcdf32?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Clean eating and healthy food preparation"
        caption="Focus on whole, minimally processed foods for maximum nutritional benefits"
        credit="Photo by Unsplash"
      />
    </ArticleTemplate>
  );
} 