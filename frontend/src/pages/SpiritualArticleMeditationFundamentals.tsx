import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function SpiritualArticleMeditationFundamentals() {
  const navigate = useNavigate();
  const category = "spiritual";
  const slug = "meditation-fundamentals";
  
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
        Meditation is a practice that has been embraced by cultures worldwide for thousands of years. 
        While its roots trace back to ancient spiritual traditions, today it has become a scientifically-validated 
        approach to enhancing mental clarity, emotional resilience, and overall wellbeing.
      </p>
      
      <p className="my-6 leading-relaxed">
        At its core, meditation is the practice of training your attention and awareness to achieve a mentally clear 
        and emotionally calm state. Rather than being a technique to escape from reality, it's a powerful method to 
        engage more fully with life by developing a healthier relationship with your thoughts.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt="Person meditating in peaceful setting"
        caption="Finding inner peace through meditation practice"
        credit="Photo by Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Science of Meditation</h2>
      
      <p className="my-6 leading-relaxed">
        Modern neuroscience has begun to unravel the profound effects of regular meditation on the brain and body. 
        Research using advanced brain imaging techniques has revealed that consistent meditation practice can:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Increase gray matter density</strong> in brain regions associated with attention, emotional regulation, and self-awareness
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Reduce activity in the default mode network</strong>, the brain regions responsible for mind-wandering and self-referential thoughts
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Lower stress hormone levels</strong> like cortisol, which can have damaging effects when chronically elevated
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Improve immune function</strong> through reduction of inflammatory processes in the body
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        These physiological changes translate into tangible benefits for daily life, including improved focus, 
        better emotional regulation, reduced anxiety, and enhanced self-awareness.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Meditation is not evasion; it is a serene encounter with reality."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Thich Nhat Hanh</cite>
      </blockquote>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Finding Your Meditation Style</h2>
      
      <p className="my-6 leading-relaxed">
        There is no one-size-fits-all approach to meditation. Different meditation styles engage different mental 
        faculties and produce varying effects. Here are some of the most accessible approaches for beginners:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Mindfulness Meditation</h3>
      
      <p className="my-6 leading-relaxed">
        Perhaps the most widely practiced form in Western contexts, mindfulness meditation involves paying attention 
        to the present moment without judgment. This typically involves:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Focusing on the physical sensations of breathing</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Noticing when your mind wanders (which it naturally will)</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Gently bringing your attention back to your breath without self-criticism</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Cultivating an attitude of curiosity toward your experience</div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt="Person practicing mindfulness meditation outdoors"
        caption="Mindfulness meditation can be practiced anywhere"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Loving-Kindness Meditation</h3>
      
      <p className="my-6 leading-relaxed">
        This practice focuses on developing feelings of goodwill, kindness, and warmth toward others and yourself. 
        It typically involves:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Silently repeating phrases of well-wishing, such as "May I be happy, may I be healthy..."</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Extending these wishes gradually from yourself to loved ones, neutral people, difficult people, and eventually all beings</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Cultivating a genuine feeling of care and compassion as you repeat these phrases</div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        Research shows this practice is particularly effective for increasing positive emotions, decreasing negative emotions, 
        and fostering a sense of social connection.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Body Scan Meditation</h3>
      
      <p className="my-6 leading-relaxed">
        This technique involves systematically bringing attention to different parts of your body, typically moving from head to toe. The process:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Helps develop awareness of physical sensations and bodily tension</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Promotes deep relaxation and stress release</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Strengthens the mind-body connection</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Is particularly helpful for those dealing with insomnia or physical discomfort</div>
        </li>
      </ul>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Building a Sustainable Practice</h2>
      
      <p className="my-6 leading-relaxed">
        Many beginners approach meditation with enthusiasm but struggle to maintain a consistent practice. 
        These strategies can help you develop a sustainable meditation habit:
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Start small:</strong> Begin with just 5 minutes daily rather than attempting 30-minute sessions immediately
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Consistent timing:</strong> Meditate at the same time each day, ideally anchoring it to an existing habit
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Comfortable position:</strong> Find a posture that allows you to be alert yet comfortable
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Use guidance:</strong> Leverage meditation apps, videos, or audio recordings for structure
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
          <div>
            <strong className="font-medium">Track your progress:</strong> Keep a simple log of your meditation sessions to build momentum
          </div>
        </li>
      </ol>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt="Person meditating at sunrise"
        caption="Morning meditation can be a powerful way to start your day"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Common Challenges and Solutions</h2>
      
      <p className="my-6 leading-relaxed">
        Every meditation practitioner encounters obstacles. Understanding these common challenges can help you navigate them:
      </p>
      
      <div className="space-y-6 my-8">
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Challenge: "I can't stop my thoughts"</h4>
          <p>
            <strong className="font-medium">Solution:</strong> The goal of meditation isn't to eliminate thoughts but to change your relationship with them. 
            Notice thoughts arising without getting caught up in them. Think of them as clouds passing through the sky of your mind.
          </p>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Challenge: "I don't have time to meditate"</h4>
          <p>
            <strong className="font-medium">Solution:</strong> Start with just 1-2 minutes daily. You can also practice "micro-meditations" throughout the day: 
            taking three conscious breaths before meetings, while waiting in line, or before eating.
          </p>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Challenge: "I feel restless or uncomfortable"</h4>
          <p>
            <strong className="font-medium">Solution:</strong> Try different postures: sitting on a chair, cushion, or even lying down. 
            You can also begin with walking meditation if sitting still is difficult.
          </p>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Challenge: "I fall asleep during meditation"</h4>
          <p>
            <strong className="font-medium">Solution:</strong> Meditate when you're naturally alert (morning may be better than evening), 
            ensure good posture with a straight spine, and try opening your eyes slightly while meditating.
          </p>
        </div>
      </div>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">A Simple 5-Minute Starting Practice</h2>
      
      <p className="my-6 leading-relaxed">
        For those new to meditation, here's a simple 5-minute practice to try today:
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            Find a comfortable seated position where your spine can be straight but not rigid
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            Set a timer for 5 minutes
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            Close your eyes or maintain a soft gaze a few feet in front of you
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            Take three deep breaths to settle in
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
          <div>
            Allow your breath to return to its natural rhythm
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">6</span>
          <div>
            Focus your attention on the sensation of breathing—perhaps the feeling of air at your nostrils or the rising and falling of your chest
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">7</span>
          <div>
            When you notice your mind wandering (which it will), gently return your focus to your breath without judgment
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">8</span>
          <div>
            When your timer sounds, take a moment to notice how you feel before opening your eyes
          </div>
        </li>
      </ol>
      
      <p className="my-6 leading-relaxed">
        Remember that meditation is a practice, not a performance. Each session is valuable regardless of how "focused" 
        you feel. The simple act of returning your attention when it wanders is actually the core exercise that 
        strengthens your mind.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "The goal of meditation isn't to control your thoughts, it's to stop letting them control you."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Anonymous</cite>
      </blockquote>
      
      <p className="my-6 leading-relaxed">
        As you explore meditation, approach it with curiosity rather than expectation. Each person's experience 
        is unique, and the benefits often unfold subtly over time. Be patient with yourself and enjoy the journey 
        of discovering this transformative practice.
      </p>
    </ArticleTemplate>
  );
} 