import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function HealthConditionsArticleLivingWithChronicPain() {
  const navigate = useNavigate();
  const category = "health-conditions";
  const slug = "living-with-chronic-pain";
  
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
      {/* Rich Article Content */}
      <p>
        Living with chronic pain presents unique challenges that extend far beyond physical discomfort. 
        The persistent nature of chronic pain can affect every aspect of life—from sleep and mood to relationships 
        and work performance. While medication often plays an important role in pain management, a holistic approach 
        that addresses the multidimensional nature of pain can provide more comprehensive relief and improved quality of life.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Person practicing gentle yoga for pain management"
        caption="Movement therapies like gentle yoga can improve mobility and reduce pain"
        credit="Photo by Dane Wetton on Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Understanding Chronic Pain</h2>
      
      <p className="my-6 leading-relaxed">
        Chronic pain, defined as pain persisting for three months or longer, affects an estimated 20% of adults 
        worldwide. Unlike acute pain, which serves as a warning signal of injury or illness, chronic pain often 
        continues long after the initial injury has healed, becoming a condition in itself rather than merely a symptom.
      </p>
      
      <p className="my-6 leading-relaxed">
        Modern pain science has evolved significantly in recent decades, revealing that pain is much more complex 
        than once believed. Rather than being a simple sensory experience, pain involves sophisticated interplay 
        between biological, psychological, and social factors—a model known as the biopsychosocial approach to pain.
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Biological factors</strong> include tissue damage, inflammation, nerve sensitivity, 
            and various physiological processes
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Psychological factors</strong> involve attention, beliefs, expectations, mood, 
            and learning processes related to pain
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Social factors</strong> encompass cultural attitudes toward pain, social support, 
            family dynamics, and workplace influences
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        One of the most important developments in our understanding of chronic pain is the concept of 
        central sensitization—a process where the central nervous system becomes increasingly sensitive, 
        sometimes causing pain even without obvious tissue damage. This helps explain why chronic pain can 
        persist long after tissues have healed and why it often doesn't respond well to conventional treatments 
        focused solely on the site of pain.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Pain is an opinion on the organism's state of health rather than a mere reflexive response to an injury. 
        There is no direct hotline from pain receptors to 'pain centers' in the brain."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Dr. V.S. Ramachandran, Neuroscientist</cite>
      </blockquote>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Holistic Approaches to Pain Management</h2>
      
      <p className="my-6 leading-relaxed">
        Given the complex nature of chronic pain, the most successful management strategies typically involve 
        multiple approaches working together. Below are evidence-based practices that can complement medical treatment:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">1. Mindfulness Meditation</h3>
      
      <p className="my-6 leading-relaxed">
        Research consistently demonstrates that mindfulness practices can significantly reduce pain intensity 
        and improve quality of life for people with chronic pain. By training attention and awareness, mindfulness 
        helps individuals relate differently to their pain experience.
      </p>
      
      <p className="my-6 leading-relaxed">
        A 2017 systematic review published in the Annals of Behavioral Medicine found that mindfulness meditation 
        significantly improved pain, depression symptoms, and quality of life compared to standard care or other 
        active treatments.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Person practicing mindfulness meditation"
        caption="Regular mindfulness practice can change how the brain processes pain signals"
        credit="Photo by Eli DeFaria on Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">2. Movement Therapies</h3>
      
      <p className="my-6 leading-relaxed">
        Contrary to the common fear that movement will increase pain, appropriate physical activity is one of the 
        most effective interventions for many chronic pain conditions. Regular, gentle movement helps reduce stiffness, 
        improves circulation, releases natural endorphins, and maintains muscle strength and flexibility.
      </p>
      
      <p className="my-6 leading-relaxed">
        Effective movement approaches for chronic pain include:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Tai Chi</strong>: This gentle, flowing practice combines movement and mindfulness, 
            making it particularly beneficial for pain conditions. Research shows it's effective for fibromyalgia, 
            osteoarthritis, and low back pain.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Gentle Yoga</strong>: Appropriate yoga practices can improve range of motion, 
            reduce muscle tension, and promote relaxation. Studies show significant benefits for various pain conditions, 
            including arthritis, fibromyalgia, and headaches.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Water-based exercises</strong>: The buoyancy of water reduces pressure on painful 
            joints while providing gentle resistance for maintaining strength.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Graduated walking programs</strong>: Starting with very short distances and gradually 
            increasing can build confidence and capacity without triggering pain flares.
          </div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">3. Anti-inflammatory Nutrition</h3>
      
      <p className="my-6 leading-relaxed">
        Chronic inflammation is closely linked with persistent pain. A growing body of research indicates that dietary 
        choices can significantly influence inflammation levels and, consequently, pain intensity.
      </p>
      
      <p className="my-6 leading-relaxed">
        An anti-inflammatory eating pattern typically includes:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Abundant colorful vegetables and fruits rich in antioxidants and phytonutrients</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Omega-3 fatty acids from sources like fatty fish, walnuts, flaxseeds, and chia seeds</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Anti-inflammatory spices such as turmeric, ginger, cinnamon, and rosemary</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Minimized intake of highly processed foods, refined carbohydrates, and industrial seed oils</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Reduced consumption of added sugars, which can drive inflammation</div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Healthy meal prep with fresh vegetables and salmon"
        caption="Anti-inflammatory foods like fatty fish, leafy greens, and colorful vegetables can help manage chronic pain"
        credit="Photo by Katie Smith on Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">4. Sleep Optimization</h3>
      
      <p className="my-6 leading-relaxed">
        The relationship between sleep and pain is bidirectional—pain disrupts sleep, and poor sleep intensifies pain. 
        This creates a challenging cycle that requires deliberate intervention. Research indicates that improving sleep 
        can reduce pain sensitivity and improve daytime functioning.
      </p>
      
      <p className="my-6 leading-relaxed">
        Effective sleep strategies for people with chronic pain include:
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Consistent sleep-wake schedule</strong>: Going to bed and waking up at the same times daily 
            helps regulate your body's internal clock.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Comfortable sleep positioning</strong>: Using supportive pillows, body pillows, or mattress 
            toppers to reduce pressure on painful areas.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Relaxing bedtime routine</strong>: Activities like gentle stretching, warm baths, or relaxation 
            exercises can prepare the body and mind for sleep.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Sleep environment optimization</strong>: Keeping the bedroom dark, quiet, and cool; removing 
            electronic devices; using comfortable bedding.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
          <div>
            <strong className="font-medium">Carefully timed pain medication</strong>: Working with healthcare providers to schedule pain 
            medications to support sleep when needed.
          </div>
        </li>
      </ol>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">5. Psychological Approaches</h3>
      
      <p className="my-6 leading-relaxed">
        The emotional and cognitive aspects of pain are well-established. Therapeutic approaches that address these 
        components can significantly reduce suffering, even when pain sensations remain present.
      </p>
      
      <p className="my-6 leading-relaxed">
        Evidence-based psychological approaches include:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Cognitive Behavioral Therapy for Chronic Pain (CBT-CP)</strong>: This structured approach 
            helps identify and change unhelpful thought patterns and behaviors related to pain.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Acceptance and Commitment Therapy (ACT)</strong>: Focuses on accepting pain rather than 
            fighting it, while committing to valued activities despite discomfort.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Pain neuroscience education</strong>: Learning about how pain works in the brain and body 
            can reduce fear and help people engage more confidently in rehabilitation.
          </div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Therapist and client in a counseling session"
        caption="Psychological approaches like CBT can help change pain perception and improve coping strategies"
        credit="Photo by LinkedIn Sales Navigator on Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Building Your Personal Pain Management Toolkit</h2>
      
      <p className="my-6 leading-relaxed">
        Effective pain management is highly individual—what works well for one person may not help another. 
        Creating a personalized approach typically involves experimentation, patience, and collaboration with 
        healthcare providers.
      </p>
      
      <p className="my-6 leading-relaxed">
        Consider these steps when developing your pain management strategy:
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Work with knowledgeable providers</strong>: Seek healthcare professionals who understand 
            modern pain science and take a biopsychosocial approach.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Start small</strong>: Begin with gentle interventions and gradually build as your 
            body adapts. For example, start with just 5 minutes of targeted movement daily.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Track your progress</strong>: Keep notes on what helps and what doesn't. Notice patterns 
            that might reveal your personal pain triggers and relievers.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Focus on function over pain levels</strong>: Measuring success by what you can do rather 
            than how much pain you feel can provide more meaningful progress markers.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
          <div>
            <strong className="font-medium">Be patient and persistent</strong>: Meaningful change in chronic pain typically happens 
            gradually over weeks and months, not days.
          </div>
        </li>
      </ol>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Person gardening as a meaningful activity despite pain"
        caption="Engaging in valued activities can improve wellbeing even when pain persists"
        credit="Photo by Kaboompics on Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Importance of Social Connection</h2>
      
      <p className="my-6 leading-relaxed">
        Chronic pain can be profoundly isolating. Pain may limit participation in social activities, 
        and the invisible nature of many pain conditions can lead to feelings of being misunderstood or disbelieved. 
        However, social connection remains vital for wellbeing and can actually help modulate pain experience.
      </p>
      
      <p className="my-6 leading-relaxed">
        Ways to maintain social connection despite pain include:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Joining in-person or online support groups specifically for your condition</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Educating close friends and family about your condition</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Planning shorter social activities with rest periods built in</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Using technology to stay connected during high-pain periods</div>
        </li>
      </ul>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "The greatest way to reduce unnecessary suffering is to provide people with more connection to each other."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Dr. Rachel Naomi Remen</cite>
      </blockquote>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">A Note on Hope and Resilience</h2>
      
      <p className="my-6 leading-relaxed">
        Living well with chronic pain doesn't necessarily mean becoming pain-free—although improvements 
        in pain levels are often possible with holistic care. Rather, it means developing the capacity to 
        live a meaningful, fulfilling life despite pain's presence.
      </p>
      
      <p className="my-6 leading-relaxed">
        Recent research in pain rehabilitation emphasizes the concept of pain acceptance—not as resignation, 
        but as an adaptive response that reduces the struggle against pain and redirects energy toward valued living. 
        Studies show that greater pain acceptance is associated with better physical and emotional functioning, 
        regardless of pain intensity.
      </p>
      
      <p className="my-6 leading-relaxed">
        While the journey through chronic pain is undoubtedly challenging, many people discover unexpected 
        growth, resilience, and wisdom along the way. With comprehensive support and personally meaningful 
        strategies, it's possible to reclaim agency and create a life where pain, while present, no longer dominates.
      </p>
    </ArticleTemplate>
  );
} 