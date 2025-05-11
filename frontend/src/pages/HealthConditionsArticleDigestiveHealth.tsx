import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function HealthConditionsArticleDigestiveHealth() {
  const navigate = useNavigate();
  const category = "health-conditions";
  const slug = "digestive-health";
  
  // Get article data
  const articles = getCategoryArticles(category);
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Article not found</h2>
        <button 
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:text-blue-800"
        >
          Go Back
        </button>
      </div>
    );
  }

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
      <h2 className="text-2xl font-bold mb-4">Understanding Your Gut Health</h2>
      <p className="mb-6">
        Your digestive system is more than just a food processing unit - it's a complex ecosystem that plays a crucial role in your overall health. Recent research has shown that gut health is connected to everything from your immune system to your mental well-being. Let's explore how you can build and maintain a gut-friendly lifestyle that supports your overall wellness.
      </p>

      <ContentImage
        src="https://images.unsplash.com/photo-1605447813584-26aeb3f8e6ae?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Beautiful arrangement of fresh fruits and vegetables"
        caption="A rainbow of fresh, whole foods provides diverse nutrients for optimal gut health"
      />

      <h3 className="text-xl font-semibold mt-8 mb-4">The Gut Microbiome: Your Internal Ecosystem</h3>
      <p className="mb-6">
        Your gut contains trillions of microorganisms, collectively known as the microbiome. This diverse community of bacteria, fungi, and other microbes helps:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Digest food and absorb nutrients</li>
        <li>Protect against harmful pathogens</li>
        <li>Produce essential vitamins and compounds</li>
        <li>Communicate with your immune system</li>
        <li>Influence mood and mental health through the gut-brain axis</li>
      </ul>

      <ContentImage
        src="https://images.unsplash.com/photo-1623428187425-873f16e10554?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Various plant-based foods rich in nutrients"
        caption="Plant-based foods provide essential prebiotics that feed beneficial gut bacteria"
      />

      <h3 className="text-xl font-semibold mt-8 mb-4">Signs of an Unhealthy Gut</h3>
      <p className="mb-4">
        Your body often signals when your gut health needs attention. Common indicators include:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Frequent digestive discomfort</li>
        <li>Irregular bowel movements</li>
        <li>Unexplained fatigue</li>
        <li>Food sensitivities</li>
        <li>Skin issues</li>
        <li>Mood changes</li>
        <li>Sleep disturbances</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4">Building a Gut-Friendly Diet</h3>
      <p className="mb-4">
        The foods you eat directly influence your gut microbiome. Here's how to support your digestive health through diet:
      </p>
      
      <h4 className="text-lg font-semibold mt-6 mb-3">1. Fiber-Rich Foods</h4>
      <p className="mb-4">
        Aim for 25-35 grams of fiber daily from sources like:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Vegetables: leafy greens, Brussels sprouts, carrots</li>
        <li>Fruits: apples, pears, berries (with skin)</li>
        <li>Legumes: lentils, beans, chickpeas</li>
        <li>Whole grains: oats, quinoa, brown rice</li>
      </ul>

      <ContentImage
        src="https://images.unsplash.com/photo-1598515213381-80d77efcdf32?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Clean eating and healthy food preparation"
        caption="A balanced diet rich in whole foods supports optimal digestive health"
      />

      <h4 className="text-lg font-semibold mt-6 mb-3">2. Fermented Foods</h4>
      <p className="mb-4">
        Include probiotic-rich foods like:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Yogurt and kefir</li>
        <li>Sauerkraut and kimchi</li>
        <li>Miso and tempeh</li>
        <li>Kombucha</li>
      </ul>

      <ContentImage
        src="https://images.unsplash.com/photo-1583224944844-5b268c057b72?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Various fermented foods"
        caption="Fermented foods are rich in probiotics that support a healthy gut microbiome"
      />

      <h3 className="text-xl font-semibold mt-8 mb-4">Lifestyle Practices for Gut Health</h3>
      <p className="mb-4">
        Diet is just one piece of the puzzle. Other important factors include:
      </p>

      <h4 className="text-lg font-semibold mt-6 mb-3">1. Stress Management</h4>
      <p className="mb-6">
        Chronic stress can negatively impact gut health. Incorporate stress-reducing practices like meditation, deep breathing, or gentle yoga. Even 10 minutes daily can make a difference.
      </p>

      <h4 className="text-lg font-semibold mt-6 mb-3">2. Quality Sleep</h4>
      <p className="mb-6">
        Poor sleep can disrupt gut health and vice versa. Aim for 7-9 hours of quality sleep and maintain consistent sleep-wake cycles.
      </p>

      <h4 className="text-lg font-semibold mt-6 mb-3">3. Regular Exercise</h4>
      <p className="mb-6">
        Moderate exercise supports healthy digestion and can help reduce inflammation. Start with 30 minutes of movement most days of the week.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">When to Seek Professional Help</h3>
      <p className="mb-6">
        While many digestive issues can be improved through diet and lifestyle changes, consult a healthcare provider if you experience:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Persistent digestive symptoms</li>
        <li>Unexplained weight loss</li>
        <li>Severe abdominal pain</li>
        <li>Blood in stool</li>
        <li>Chronic fatigue</li>
      </ul>

      <ContentImage
        src="https://images.unsplash.com/vector-1745336598561-1ac2d9830995"
        alt="Medical illustration showing digestive system"
        caption="Understanding when to seek professional medical advice is crucial for digestive health"
      />

      <h3 className="text-xl font-semibold mt-8 mb-4">Creating Your Gut Health Action Plan</h3>
      <p className="mb-6">
        Start with small, sustainable changes:
      </p>
      <ol className="list-decimal pl-6 mb-6">
        <li className="mb-2">Add one new fiber-rich food to your diet each week</li>
        <li className="mb-2">Experiment with fermented foods to find ones you enjoy</li>
        <li className="mb-2">Establish a regular meal schedule</li>
        <li className="mb-2">Practice mindful eating - chew thoroughly and avoid rushing meals</li>
        <li className="mb-2">Stay hydrated with water throughout the day</li>
        <li>Keep a food and symptom journal to identify triggers</li>
      </ol>

      <p className="mt-8 mb-6">
        Remember that improving gut health is a journey, not a destination. Be patient with your body as you make changes, and celebrate small improvements along the way. Your gut microbiome can begin to change within days of dietary modifications, but sustainable improvements typically develop over weeks to months of consistent healthy habits.
      </p>
    </ArticleTemplate>
  );
} 