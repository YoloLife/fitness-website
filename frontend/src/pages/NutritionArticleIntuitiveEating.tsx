import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function NutritionArticleIntuitiveEating() {
  const navigate = useNavigate();
  const category = "nutrition";
  const slug = "intuitive-eating";
  
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
        In a world saturated with diet advice, weight loss programs, and nutritional "rules," many of us have lost touch with the most fundamental aspect of eating—listening to our own bodies. Intuitive eating offers a refreshing alternative to the endless cycle of restriction and guilt that characterizes diet culture.
      </p>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">What Is Intuitive Eating?</h2>
      
      <p className="my-6 leading-relaxed">
        Intuitive eating is a framework developed by dietitians Evelyn Tribole and Elyse Resch in 1995, though its principles reflect natural eating behaviors that humans exhibited before modern diet culture took hold. At its core, intuitive eating is about trusting your body's internal wisdom about food, rather than following external rules about what, when, and how much to eat.
      </p>
      
      <p className="my-6 leading-relaxed">
        Unlike diets that prescribe specific meal plans or eliminate certain food groups, intuitive eating focuses on rebuilding your relationship with food and your body. It's not a weight loss method (though some people may naturally reach their body's optimal weight through this approach); rather, it's a pathway to food freedom and improved physical and psychological well-being.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?"
        alt="Person enjoying food mindfully at a table"
        caption="Mindful eating is a key component of the intuitive eating approach"
        credit="Photo by Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The 10 Principles of Intuitive Eating</h2>
      
      <p className="my-6 leading-relaxed">
        Intuitive eating is guided by ten foundational principles that work together to help you reconnect with your body's natural signals:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">1. Reject the Diet Mentality</h3>
      
      <p className="my-6 leading-relaxed">
        The first step is recognizing the damage caused by years of dieting and the false promises of quick fixes. This means throwing out diet books, unfollowing social media accounts that promote unrealistic body standards, and refusing to engage in conversations about the newest weight loss trend.
      </p>
      
      <p className="my-6 leading-relaxed">
        Research consistently shows that 95% of diets fail in the long term, with most people regaining lost weight within 1-5 years. Moreover, weight cycling (repeatedly losing and gaining weight) is associated with increased inflammation, cardiovascular strain, and psychological distress.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">2. Honor Your Hunger</h3>
      
      <p className="my-6 leading-relaxed">
        Chronic dieting leads many people to ignore or suppress hunger signals. Learning to recognize and respond to your body's hunger cues is essential for rebuilding trust with yourself. This might mean eating when you're only moderately hungry rather than waiting until you're ravenous, which can lead to overeating.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1629646546565-47267ed247b4"
        alt="A variety of fresh fruits and vegetables arranged on a table"
        caption="Honoring hunger with nutritious, satisfying foods is part of intuitive eating"
        credit="Photo by Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">3. Make Peace with Food</h3>
      
      <p className="my-6 leading-relaxed">
        When we label foods as "good" or "bad," we set ourselves up for guilt and shame when we inevitably eat the "bad" ones. Giving yourself unconditional permission to eat all foods removes their emotional power and paradoxically helps regulate consumption.
      </p>
      
      <p className="my-6 leading-relaxed">
        Many intuitive eating practitioners report that once forbidden foods lose their "special" appeal, they naturally gravitate toward balanced eating patterns that include occasional indulgences without the accompanying guilt or binge behaviors.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">4. Challenge the Food Police</h3>
      
      <p className="my-6 leading-relaxed">
        The "food police" are those negative thoughts that criticize your food choices or tell you you're "good" for eating a salad and "bad" for having dessert. Recognizing and confronting these thoughts is crucial for breaking free from diet mentality.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1470&q=80"
        alt="Person writing in a journal next to a cup of tea"
        caption="Self-reflection and mindful awareness are key to challenging negative food thoughts"
        credit="Photo by Unsplash"
      />
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "The food police station is housed deep in your psyche, and its loudspeaker shouts negative barbs, hopeless phrases, and guilt-provoking indictments."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Evelyn Tribole and Elyse Resch, Intuitive Eating</cite>
      </blockquote>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">5. Discover the Satisfaction Factor</h3>
      
      <p className="my-6 leading-relaxed">
        Pleasure is a powerful but often overlooked part of the eating experience. When we eat foods we truly enjoy in a pleasant environment, we tend to feel more satisfied with smaller quantities. This principle encourages mindful eating—slowing down, savoring flavors, and noticing the sensory experience of food.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">6. Feel Your Fullness</h3>
      
      <p className="my-6 leading-relaxed">
        Just as important as honoring hunger is recognizing when you've had enough. Years of dieting or rushed eating can disconnect us from fullness signals. This principle involves pausing during meals to check in with your body and learning to stop eating when you're comfortably full rather than stuffed.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1620661244237-8549713e8a84?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="A plate with avocado toast"
        caption="Nutritious foods like avocados provide satiety cues that help you recognize fullness"
        credit="Photo by Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">7. Cope with Your Emotions with Kindness</h3>
      
      <p className="my-6 leading-relaxed">
        Emotional eating—using food to soothe or distract from uncomfortable feelings—is common but rarely addresses the underlying issues. This principle focuses on developing alternative coping mechanisms while acknowledging that occasional emotional eating is normal and doesn't warrant guilt.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1470&q=80"
        alt="Person practicing meditation in a peaceful setting"
        caption="Finding healthy ways to cope with emotions beyond food"
        credit="Photo by Unsplash"
      />
      
      <p className="my-6 leading-relaxed">
        Some non-food ways to process emotions include:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Journaling about your feelings
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Physical movement that feels good to your body
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Talking with a trusted friend or therapist
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Meditation or deep breathing exercises
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Engaging in creative activities like drawing or music
          </div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">8. Respect Your Body</h3>
      
      <p className="my-6 leading-relaxed">
        Just as people come in different heights and shoe sizes, we naturally have different body shapes and sizes. This principle emphasizes treating your body with dignity and respect regardless of how you feel about its appearance. It's about recognizing that your worth is not determined by your weight or shape.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">9. Movement—Feel the Difference</h3>
      
      <p className="my-6 leading-relaxed">
        Instead of exercising to burn calories or compensate for eating, intuitive eating encourages finding physical activities that bring you joy and energy. The focus shifts from external metrics (calories burned, miles run) to how movement makes you feel—stronger, more energetic, less stressed, or more connected to your body.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&w=1470&q=80"
        alt="Person doing yoga outdoors at sunset"
        caption="Movement should be joyful and energizing rather than punitive"
        credit="Photo by Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">10. Honor Your Health with Gentle Nutrition</h3>
      
      <p className="my-6 leading-relaxed">
        The final principle recognizes that food choices do matter for health, but a single meal or day won't make or break your overall well-being. It's about making food choices that honor your health and taste buds while making you feel good. This approach is flexible and focuses on consistent patterns over time rather than perfect eating.
      </p>

      <p className="my-6 leading-relaxed">
        By embracing these ten principles of intuitive eating, you can begin to heal your relationship with food and your body. Remember that this is a journey, not a destination, and every small step toward a more peaceful relationship with food is progress worth celebrating. As you move forward on this path, be patient with yourself and celebrate the wisdom that comes from listening to your body's natural signals.
      </p>

      <ContentImage 
        src="https://images.unsplash.com/photo-1590698933947-a202b069a861"
        alt="Various healthy food ingredients arranged beautifully"
        caption="The journey to intuitive eating leads to a balanced, peaceful relationship with food"
        credit="Photo by Unsplash"
      />
    </ArticleTemplate>
  );
} 