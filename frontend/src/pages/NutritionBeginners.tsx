import React from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { ContentImage } from "components/ContentImage";
import { SocialShare } from "components/SocialShare";
import { useNavigate } from "react-router-dom";

export default function NutritionBeginners() {
  const navigate = useNavigate();
  const category = "nutrition";
  
  // Get the current URL for sharing
  const articleUrl = window.location.href;
  
  // Article metadata
  const article = {
    title: "Nutrition Basics: Simple Steps to Healthier Eating",
    description: "Learn fundamental nutrition principles and easy ways to improve your diet without complicated plans or restrictions.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: new Date(),
    readTime: "12 min",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section with article image */}
        <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-end">
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 text-white">
              <div className="max-w-3xl">
                <a 
                  href={`/${category}`} 
                  className="inline-block px-3 py-1 bg-primary/80 hover:bg-primary text-white text-xs font-medium uppercase tracking-wider rounded-full mb-4 transition-colors"
                >
                  Nutrition
                </a>
                <div className="flex items-center mb-4 space-x-4 text-sm">
                  <span>{article.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>•</span>
                  <span>{article.readTime} read</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
                  {article.title}
                </h1>
                <div className="flex items-center">
                  {article.author.avatar ? (
                    <img 
                      src={article.author.avatar} 
                      alt={article.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      {article.author.name.charAt(0)}
                    </div>
                  )}
                  <span className="font-medium">{article.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article content */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium mb-8 leading-relaxed">{article.description}</p>
              
              {/* Rich Article Content */}
              <p className="my-6 leading-relaxed">
                Nutrition doesn't have to be complicated. Despite the endless stream of diet trends and conflicting advice, 
                the fundamentals of healthy eating remain surprisingly simple. This guide will help you build a positive 
                relationship with food while making gradual, sustainable improvements to your diet.
              </p>
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Understanding the Basics: Nutrition Fundamentals</h2>
              
              <p className="my-6 leading-relaxed">
                Before diving into specific recommendations, it helps to understand some basic nutrition concepts:
              </p>
              
              <ul className="space-y-3 my-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Calories</strong> - Units of energy in food. Your body needs a certain amount to function, but the quality of those calories matters greatly.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Macronutrients</strong> - The three main nutrients your body needs in larger amounts: proteins, carbohydrates, and fats.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Micronutrients</strong> - Vitamins and minerals required in smaller amounts but crucial for optimal health.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Fiber</strong> - A type of carbohydrate that aids digestion, promotes fullness, and supports gut health.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Phytonutrients</strong> - Beneficial compounds in plant foods that provide protection against disease.
                  </div>
                </li>
              </ul>
              
              <ContentImage 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="Colorful arrangement of fresh vegetables"
                caption="A variety of colorful plant foods ensures a wide range of nutrients"
                credit="Photo by Dan Gold on Unsplash"
              />
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Building a Balanced Plate: The Simple Approach</h2>
              
              <p className="my-6 leading-relaxed">
                Rather than counting every calorie or gram, consider this visual approach to balanced eating:
              </p>
              
              <ol className="space-y-4 my-6">
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
                  <div>
                    <strong className="font-medium">Fill half your plate with non-starchy vegetables</strong> - Leafy greens, broccoli, carrots, peppers, etc.
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
                  <div>
                    <strong className="font-medium">Fill a quarter with protein</strong> - Chicken, fish, beans, tofu, eggs, etc.
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
                  <div>
                    <strong className="font-medium">Fill a quarter with complex carbohydrates</strong> - Brown rice, quinoa, sweet potatoes, whole grain bread, etc.
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
                  <div>
                    <strong className="font-medium">Add a small amount of healthy fats</strong> - Avocado, olive oil, nuts, or seeds.
                  </div>
                </li>
              </ol>
              
              <p className="my-6 leading-relaxed">
                This approach automatically balances your macronutrients and ensures you're getting a good variety of foods without the need for strict measurements.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
                "Let food be thy medicine and medicine be thy food."
                <cite className="block mt-2 text-sm text-gray-600 not-italic">– Hippocrates</cite>
              </blockquote>
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Small Changes, Big Impact: Simple Swaps</h2>
              
              <p className="my-6 leading-relaxed">
                You don't need to completely overhaul your diet overnight. These simple swaps can make a significant difference in the nutritional quality of your meals:
              </p>
              
              <ContentImage 
                src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="Healthy breakfast with oatmeal and berries"
                caption="Simple food swaps can dramatically improve nutritional content"
                credit="Photo by Jennifer Pallian on Unsplash"
              />
              
              <ul className="space-y-3 my-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Refined grains → Whole grains</strong> - Swap white bread for whole grain, white rice for brown rice or quinoa
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Sugary drinks → Water or unsweetened beverages</strong> - Try water with lemon, herbal tea, or sparkling water with a splash of juice
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Processed snacks → Fresh snacks</strong> - Choose an apple with nut butter over chips, or carrots with hummus over crackers
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Sweetened yogurt → Plain yogurt with fruit</strong> - Add your own fresh or frozen fruit to plain yogurt instead of pre-sweetened varieties
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong className="font-medium">Cream-based sauces → Tomato or olive oil-based sauces</strong> - These options are typically lower in saturated fat and calories
                  </div>
                </li>
              </ul>
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Practical Beginner Strategies</h2>
              
              <p className="my-6 leading-relaxed">
                These practical strategies can help you implement healthier eating habits gradually:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
                <h3 className="text-xl font-serif font-semibold mb-4 text-primary">1. The Two-Veggie Rule</h3>
                
                <p className="mb-4 leading-relaxed">
                  Aim to include at least two different vegetables in each main meal. This simple rule naturally increases your nutrient intake and displaces less nutritious foods.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
                <h3 className="text-xl font-serif font-semibold mb-4 text-primary">2. The 80/20 Approach</h3>
                
                <p className="mb-4 leading-relaxed">
                  Focus on nutritious whole foods about 80% of the time, allowing yourself flexibility for less nutritious foods the other 20%. This balance promotes sustainability and prevents feelings of restriction.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
                <h3 className="text-xl font-serif font-semibold mb-4 text-primary">3. The Hunger-Fullness Scale</h3>
                
                <p className="mb-4 leading-relaxed">
                  Rate your hunger on a scale of 1 (starving) to 10 (uncomfortably full). Aim to start eating around a 3 or 4 and stop around a 6 or 7 – satisfied but not stuffed. This practice helps you reconnect with your body's natural hunger cues.
                </p>
              </div>
              
              <ContentImage 
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="Person preparing a meal in kitchen"
                caption="Cooking at home gives you more control over ingredients and portions"
                credit="Photo by Caroline Attwood on Unsplash"
              />
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
                <h3 className="text-xl font-serif font-semibold mb-4 text-primary">4. The Prepared Environment</h3>
                
                <p className="mb-4 leading-relaxed">
                  Set yourself up for success by keeping nutritious foods visible and accessible. Store cut vegetables at eye level in your refrigerator, keep fruit in a bowl on your counter, and prepare healthy snacks in advance.
                </p>
              </div>
              
              <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Putting It All Together: A Day of Simple, Balanced Eating</h2>
              
              <p className="my-6 leading-relaxed">Here's what a day of balanced eating might look like for a beginner:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                  <strong className="font-medium text-primary">Breakfast</strong>
                  <p className="mt-1 text-sm">Oatmeal topped with berries, a tablespoon of nut butter, and a sprinkle of cinnamon</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                  <strong className="font-medium text-primary">Lunch</strong>
                  <p className="mt-1 text-sm">Grain bowl with quinoa, roasted vegetables, grilled chicken or chickpeas, and a drizzle of olive oil and lemon</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                  <strong className="font-medium text-primary">Snack</strong>
                  <p className="mt-1 text-sm">Apple slices with a small handful of almonds</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                  <strong className="font-medium text-primary">Dinner</strong>
                  <p className="mt-1 text-sm">Baked salmon with roasted sweet potatoes and steamed broccoli</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded border-l-4 border-primary md:col-span-2">
                  <strong className="font-medium text-primary">Evening Snack (Optional)</strong>
                  <p className="mt-1 text-sm">Plain Greek yogurt with a small drizzle of honey</p>
                </div>
              </div>
              
              <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                Remember that healthy eating is a journey, not a destination. Small, consistent changes over time lead to sustainable habits. 
                Focus on adding nourishing foods rather than restricting "bad" foods, and be patient with yourself as you develop new eating patterns.
              </p>
              
              <ContentImage 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="Colorful healthy meal preparation"
                caption="A little preparation goes a long way in maintaining healthy eating habits"
                credit="Photo by Katie Smith on Unsplash"
              />
              
              <div className="mt-12 border-t border-muted-foreground/20 pt-8">
                <SocialShare url={articleUrl} title={article.title} />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 