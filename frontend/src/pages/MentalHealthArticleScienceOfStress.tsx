import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function MentalHealthArticleScienceOfStress() {
  const navigate = useNavigate();
  const category = "mental-health";
  const slug = "science-of-stress";
  
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
      <p className="my-6 leading-relaxed">
        Stress is a universal human experience, yet many of us don't fully understand what's happening in our bodies 
        and minds when we feel overwhelmed. Behind the feelings of tension, racing thoughts, and heart palpitations 
        lies a sophisticated biological system designed to protect us. By understanding this system, we can work with 
        our body's natural processes rather than against them.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1527236438218-d82077ae1f85"
        alt="Woman experiencing stress with hand on forehead"
        caption="The stress response affects both mind and body simultaneously"
        credit="Photo from Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Stress Response: Our Ancient Survival Mechanism</h2>
      
      <p className="my-6 leading-relaxed">
        What we commonly call "stress" is actually a sophisticated evolutionary adaptation that helped our ancestors 
        survive threats in their environment. This response, sometimes called the "fight-or-flight" reaction, involves 
        a cascade of physiological changes orchestrated by your nervous system and endocrine system:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Immediate Neural Response</strong>: When your brain perceives a threat (whether physical danger or 
            a looming work deadline), your amygdala—the emotional processing center—sends an alarm signal to your hypothalamus, 
            which acts as your brain's command center.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Sympathetic Nervous System Activation</strong>: Your hypothalamus activates your sympathetic nervous 
            system, triggering the release of adrenaline (epinephrine) from your adrenal glands.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Physical Changes</strong>: Within seconds, adrenaline increases your heart rate and blood pressure, 
            expands your airways, sharpens your senses, and releases glucose and fats into your bloodstream for immediate energy.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Secondary Hormonal Response</strong>: If the stress continues, your body releases cortisol, often called 
            the "stress hormone," which maintains this heightened state of alertness by keeping glucose available for energy and 
            regulating various bodily functions.
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        This response is remarkably effective for short-term physical threats—the proverbial lion chasing you—but in modern 
        life, our stressors are more often psychological, social, and chronic in nature. When the stress response stays 
        activated for extended periods, the physiological effects begin to take a toll.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Between stimulus and response there is a space. In that space is our power to choose our response. 
        In our response lies our growth and our freedom."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Viktor E. Frankl</cite>
      </blockquote>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">How Chronic Stress Affects Your Body and Mind</h2>
      
      <p className="my-6 leading-relaxed">
        When experienced occasionally, the stress response is adaptive and harmless. However, when stress becomes chronic, 
        it can affect virtually every system in your body:
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/vector-1744143594940-849ecda018b2?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Person journaling - a therapeutic technique for mental health"
        caption="Tools like cognitive behavioral therapy can help us understand and rewire stress responses"
        credit="Photo from Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Physical Effects</h3>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Cardiovascular System</strong>: Repeated elevations in blood pressure can damage blood vessels and 
            increase risk of hypertension, heart attack, and stroke. Research shows chronically stressed individuals have up to 40% higher risk 
            of developing heart disease.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Immune Function</strong>: Chronic stress suppresses immune function, making you more susceptible to 
            infections and slowing wound healing. Studies show stressed individuals produce fewer antibodies in response to vaccines and show delayed 
            healing of standardized wounds.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Digestive System</strong>: Stress can alter gut motility, increase inflammation, and exacerbate conditions 
            like IBS, GERD, and ulcers. The gut-brain connection means digestive issues often appear or worsen during stressful periods.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Reproductive System</strong>: Prolonged stress can disrupt menstrual cycles in women and reduce 
            testosterone production in men. Fertility challenges can be exacerbated by chronic stress through multiple hormonal pathways.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
          <div>
            <strong className="font-medium">Metabolic Effects</strong>: Chronic cortisol elevation can increase abdominal fat deposition and 
            contribute to insulin resistance. This partly explains the connection between chronic stress and metabolic syndrome.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">6</span>
          <div>
            <strong className="font-medium">Musculoskeletal System</strong>: Tension from stress can lead to chronic pain conditions, especially 
            in the neck, shoulders, and back. Many tension headaches and migraines are triggered or worsened by stress.
          </div>
        </li>
      </ol>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Psychological and Cognitive Effects</h3>
      
      <p className="my-6 leading-relaxed">
        The brain is particularly vulnerable to chronic stress, with several regions showing measurable changes after prolonged stress exposure:
      </p>
      
      <div className="space-y-6 my-8">
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Prefrontal Cortex</h4>
          <p><strong className="font-medium">Function:</strong> Executive function, decision-making, impulse control</p>
          <p><strong className="font-medium">Stress Effect:</strong> Decreased volume and connectivity, impaired function</p>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Hippocampus</h4>
          <p><strong className="font-medium">Function:</strong> Memory formation, contextual learning</p>
          <p><strong className="font-medium">Stress Effect:</strong> Reduced neurogenesis, volume loss over time</p>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Amygdala</h4>
          <p><strong className="font-medium">Function:</strong> Emotional processing, fear response</p>
          <p><strong className="font-medium">Stress Effect:</strong> Increased activity and sensitivity</p>
        </div>
      </div>
      
      <p className="my-6 leading-relaxed">
        These neurobiological changes help explain why chronic stress is associated with increased risk of anxiety, 
        depression, memory problems, and decision-making difficulties. They also clarify why stressed individuals often report:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Difficulty concentrating and staying focused</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Impaired ability to learn new information</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Increased emotional reactivity and mood swings</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Heightened worry and rumination</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Reduced cognitive flexibility and creativity</div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Person in meditation pose in peaceful setting"
        caption="Mindfulness practices can help regulate stress responses"
        credit="Photo from Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Good Stress: Differentiating Eustress from Distress</h2>
      
      <p className="my-6 leading-relaxed">
        Not all stress is harmful. Psychologists distinguish between "distress" (negative, damaging stress) and "eustress" 
        (positive, motivating stress). Eustress is the stress we feel when we're excited, challenged in a good way, or pushed 
        outside our comfort zone in manageable amounts.
      </p>
      
      <p className="my-6 leading-relaxed">
        Examples of eustress include:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Starting a new job that stretches your skills</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Athletic competition that pushes your limits</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>The anticipation of positive life events like weddings or travel</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Learning a challenging new skill or hobby</div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        The key differences between eustress and distress include:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 bg-green-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Eustress</h4>
          <ul className="space-y-2">
            <li>• Short-term activation</li>
            <li>• Within your coping capacity</li>
            <li>• Feels exciting</li>
            <li>• Improves focus and performance</li>
            <li>• Motivates and energizes</li>
          </ul>
        </div>
        
        <div className="p-6 bg-red-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Distress</h4>
          <ul className="space-y-2">
            <li>• Often chronic or overwhelming</li>
            <li>• Exceeds coping resources</li>
            <li>• Feels unpleasant or threatening</li>
            <li>• Decreases performance over time</li>
            <li>• Drains and exhausts</li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Building Stress Resilience: Evidence-Based Approaches</h2>
      
      <p className="my-6 leading-relaxed">
        The good news is that understanding the science of stress provides insights into how we can effectively manage it. 
        Research points to several approaches that can help:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Immediate Stress Regulation Techniques</h3>
      
      <p className="my-6 leading-relaxed">
        These techniques directly target your physiological state by activating the parasympathetic nervous system:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Diaphragmatic Breathing</strong>: Deep breathing activates the vagus nerve, slowing heart rate and 
            reducing blood pressure. Try the 4-7-8 technique: inhale for 4 counts, hold for 7, exhale for 8.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Progressive Muscle Relaxation</strong>: Systematically tensing and relaxing muscle groups reduces 
            physical tension and signals safety to your nervous system.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Cold Exposure</strong>: Brief cold exposure (like washing your face with cold water) can trigger the 
            mammalian diving reflex, which quickly lowers heart rate and stress hormones.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Mindfulness Practices</strong>: Even brief mindfulness exercises can reduce cortisol levels and 
            interrupt the stress cycle by bringing awareness to the present moment.
          </div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Person jogging in nature"
        caption="Regular physical activity is one of the most effective stress management tools"
        credit="Photo by Jenny Hill on Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Lifestyle Foundations for Stress Resilience</h3>
      
      <p className="my-6 leading-relaxed">
        These practices build your capacity to handle stress over time:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Regular Physical Activity</strong>: Exercise reduces stress hormones and releases endorphins, improving 
            mood. Aim for 150 minutes of moderate activity or 75 minutes of vigorous activity weekly, plus strength training.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Prioritize Sleep</strong>: Sleep disruption and stress create a bidirectional negative cycle. 
            Maintaining consistent sleep-wake times and practicing good sleep hygiene supports stress resilience.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Anti-Inflammatory Diet</strong>: Chronic stress increases inflammation, while certain foods can 
            either promote or reduce inflammatory processes. Focus on omega-3 fatty acids, antioxidants, and limiting processed foods.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Social Connection</strong>: Quality relationships trigger oxytocin release, which counteracts 
            some effects of stress hormones. Prioritize meaningful interactions, even brief ones.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Time in Nature</strong>: Research shows that even 20 minutes in natural environments lowers 
            cortisol levels. This "nature prescription" is increasingly recognized for its stress-buffering effects.
          </div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Cognitive Approaches</h3>
      
      <p className="my-6 leading-relaxed">
        How we think about stressors significantly impacts our physiological response:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Cognitive Reframing</strong>: Learning to recognize distorted thinking patterns and adopt more balanced 
            perspectives can reduce unnecessary stress activation.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Stress Mindset Shift</strong>: Research by Stanford psychologist Kelly McGonigal shows that viewing stress 
            as helpful rather than harmful can transform its physical effects. Try asking "How is my body helping me rise to this challenge?" 
            rather than "How is stress harming me?"
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Values Clarification</strong>: Understanding what truly matters to you helps prioritize where to invest 
            energy and what optional stressors can be eliminated.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Self-Compassion</strong>: Research by Dr. Kristin Neff shows that treating yourself with the kindness 
            you'd offer a good friend lowers stress hormones and improves emotional resilience.
          </div>
        </li>
      </ul>
      
      <div className="p-6 bg-blue-50 rounded-lg my-8">
        <h4 className="font-medium text-lg mb-2 text-primary">The 90-Second Rule: A Neuroscience Insight</h4>
        <p className="mb-2">
          Dr. Jill Bolte Taylor, a neuroanatomist, discovered that the physiological response to stress (the chemical cascade) 
          actually only lasts about 90 seconds in our bodies. After that, any continued stress response is the result of our thoughts 
          retriggering the cycle.
        </p>
        <p>
          This insight gives us power: if we can pause and avoid retriggering the stress response for just 90 seconds, 
          we can interrupt the cycle and return to a calmer state more quickly.
        </p>
      </div>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">A Personalized Approach to Stress Management</h2>
      
      <p className="my-6 leading-relaxed">
        While the biology of stress is universal, effective management strategies vary widely between individuals. The 
        most effective approach is to develop a personalized toolkit of strategies you can draw upon based on the type 
        of stress you're experiencing and your circumstances.
      </p>
      
      <p className="my-6 leading-relaxed">
        Consider these factors when building your stress management plan:
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Identify your stress signatures</strong>: Notice the early physical, emotional, or cognitive signs that 
            signal your stress response is activating. Common signs include tension in specific muscle groups, changes in breathing, or 
            recurring thought patterns.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Match the strategy to the stress type</strong>: Different stressors may respond to different approaches. 
            Acute stress might need immediate physiological techniques, while chronic work stress might require both cognitive strategies and 
            boundary-setting.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Create environmental support</strong>: Design your physical environment to minimize unnecessary stressors 
            and build reminders for stress management practices into your daily routine.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Develop micro-practices</strong>: Having brief 1-2 minute practices you can implement anywhere provides 
            flexibility for managing stress in real-time.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
          <div>
            <strong className="font-medium">Monitor and adjust</strong>: Track what works for you and refine your approach over time. What works 
            during one phase of life may need adjustment as circumstances change.
          </div>
        </li>
      </ol>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "It's not stress that kills us, it is our reaction to it." 
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Hans Selye, pioneering stress researcher</cite>
      </blockquote>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">When to Seek Professional Support</h2>
      
      <p className="my-6 leading-relaxed">
        While self-management strategies are powerful tools, sometimes professional support is necessary. Consider 
        reaching out to a healthcare provider if:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Stress is significantly interfering with your daily functioning, relationships, or work</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>You're experiencing physical symptoms that concern you</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>You're using alcohol, substances, or other unhealthy coping mechanisms to manage stress</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>You're experiencing persistent depression, anxiety, or thoughts of self-harm</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>You feel unable to implement stress management strategies on your own</div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        Remember that seeking help is a sign of strength, not weakness. Mental health professionals can provide 
        personalized strategies, therapeutic techniques, and sometimes medication that can make a significant difference 
        in how you experience and manage stress.
      </p>
      
      <p className="my-6 leading-relaxed">
        By understanding the science of stress and implementing targeted strategies, you can transform your relationship 
        with this universal human experience. Rather than being controlled by stress, you can learn to work with your 
        body's natural responses and build greater resilience for life's inevitable challenges.
      </p>
    </ArticleTemplate>
  );
} 