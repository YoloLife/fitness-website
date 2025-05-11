import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function EnvironmentalArticleBiophilicDesign() {
  const navigate = useNavigate();
  const category = "environmental";
  const slug = "biophilic-design";
  
  // Get article data
  const articles = getCategoryArticles(category);
  const article = articles.find(a => a.slug === slug);
  
  // Article not found fallback
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
        Biophilic design is more than just an aesthetic trend—it's a human-centered approach that reconnects us with nature in our built environments. As we spend up to 90% of our time indoors, the quality of these spaces profoundly impacts our physical health, cognitive function, and emotional wellbeing.
      </p>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Science Behind Biophilic Design</h2>
      
      <p className="my-6 leading-relaxed">
        Research consistently demonstrates that environments incorporating natural elements can reduce stress, improve cognitive function, and enhance creativity. A landmark study published in the Journal of Environmental Psychology found that workers in offices with natural elements reported 15% higher levels of wellbeing and 6% higher productivity levels.
      </p>
      
      <p className="my-6 leading-relaxed">
        Our innate connection to nature, termed "biophilia" by biologist E.O. Wilson, explains why we experience these benefits. Humans evolved in natural environments for 99% of our history, developing deep-seated biological responses to natural patterns, light qualities, and spatial arrangements.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1596364725424-7673f05f64b1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Indoor space with abundant houseplants creating a biophilic environment"
        caption="Houseplants can transform any space into a rejuvenating biophilic retreat"
        credit="Photo by Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Core Elements of Biophilic Design</h2>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">1. Direct Nature Connections</h3>
      
      <p className="my-6 leading-relaxed">
        The most straightforward way to incorporate biophilic design is through direct contact with natural elements:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Indoor plants:</strong> Beyond aesthetics, plants improve air quality by filtering pollutants and releasing oxygen. Low-maintenance options like snake plants, pothos, and ZZ plants thrive even in low-light conditions.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Water features:</strong> The sound of flowing water masks noise pollution while promoting relaxation. Even small tabletop fountains can create this effect.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Natural materials:</strong> Incorporating wood, stone, bamboo, cork, and other natural materials brings texture and warmth to spaces.
          </div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1589271243958-d61e12b61b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Natural wooden furniture with organic shapes in a living space"
        caption="Natural materials like wood create visual warmth and tactile comfort"
        credit="Photo by Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">2. Indirect Nature References</h3>
      
      <p className="my-6 leading-relaxed">
        When direct natural elements aren't possible, abstract references to nature can still trigger biophilic responses:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Natural patterns:</strong> Textiles, wallpapers, and decorative elements featuring botanical prints, fractals, and organic shapes evoke nature.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Nature-inspired colors:</strong> Earth tones, blues, and greens mimic natural landscapes and have been shown to reduce stress levels.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Natural imagery:</strong> Photographs or artwork depicting natural scenes can deliver some of the same psychological benefits as viewing actual nature.
          </div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">3. Spatial Design Considerations</h3>
      
      <p className="my-6 leading-relaxed">
        How we organize and move through spaces can significantly impact our wellbeing:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Natural light:</strong> Maximizing daylight exposure helps regulate circadian rhythms and improve mood. Position desks and seating areas near windows when possible.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Prospect and refuge:</strong> Balanced spaces that offer both openness (prospect) and cozy nooks (refuge) satisfy evolutionary preferences for environments that feel both safe and provide awareness.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Complexity and order:</strong> Spaces with varied yet organized elements mirror natural environments and maintain interest without overwhelming the senses.
          </div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1569216961559-fd512349ebba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Bright interior with natural light streaming through large windows"
        caption="Maximizing natural light not only reduces energy usage but significantly improves mood and productivity"
        credit="Photo by Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Implementing Biophilic Design on Any Budget</h2>
      
      <p className="my-6 leading-relaxed">
        Contrary to popular belief, creating biophilic spaces doesn't require extensive renovations or luxury budgets. Even small changes can dramatically improve your living or working environment:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">For Small Budgets</h3>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Rearrange furniture to maximize natural light exposure and views of outdoor greenery
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Introduce low-maintenance houseplants like pothos, snake plants, or succulents
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Add natural materials through small decorative items like wooden bowls, stone coasters, or woven baskets
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Use nature sounds (rainfall, forest ambiance) as background audio while working or relaxing
          </div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">For Medium Investments</h3>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Install a small indoor fountain or water feature
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Upgrade lighting to full-spectrum bulbs that mimic natural daylight
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Add natural fiber textiles like linen curtains, wool rugs, or cotton throws
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Create a small indoor garden with a variety of plants at different heights
          </div>
        </li>
      </ul>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Design is not just about aesthetics; it's about creating environments that help people thrive—mentally, physically, and emotionally."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Amanda Sturgeon, biophilic design expert</cite>
      </blockquote>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Future of Biophilic Design</h2>
      
      <p className="my-6 leading-relaxed">
        As urban populations continue to grow and disconnection from nature becomes more prevalent, biophilic design is increasingly recognized as an essential component of healthy built environments. Cities worldwide are incorporating living walls, rooftop gardens, and expanded green spaces to counteract the negative effects of urban living.
      </p>
      
      <p className="my-6 leading-relaxed">
        In the workplace, companies like Amazon, Google, and Microsoft have invested heavily in biophilic design, recognizing its impact on employee wellbeing, productivity, and retention. Healthcare facilities are following suit, as research shows patients recover faster and require less pain medication in rooms with natural views.
      </p>
      
      <p className="my-6 leading-relaxed">
        By thoughtfully integrating nature into our homes and workspaces, we can create environments that support our innate biological needs while addressing many of the stressors of modern life. The science is clear: bringing nature indoors is not a luxury—it's an essential component of human health and wellbeing.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt="Modern interior with abundant plants, natural materials, and daylight"
        caption="A biophilic space balances natural elements with functional design"
        credit="Photo by Unsplash"
      />
    </ArticleTemplate>
  );
} 