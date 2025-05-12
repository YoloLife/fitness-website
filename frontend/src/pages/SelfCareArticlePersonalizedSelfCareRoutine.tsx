import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function SelfCareArticlePersonalizedSelfCareRoutine() {
  const navigate = useNavigate();
  const category = "self-care";
  const slug = "personalized-self-care-routine";
  
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
      <p className="my-6 leading-relaxed">
        Self-care has become something of a buzzword, often conjuring images of bubble baths and face masks. 
        While those activities can certainly be part of a self-care routine, true self-care goes much deeper. 
        It's about intentionally taking actions that preserve or improve your physical, mental, and emotional health—especially 
        during times of stress.
      </p>
      
      <p className="my-6 leading-relaxed">
        The challenge many of us face is creating a self-care practice that actually sticks. Generic advice 
        often fails because self-care is deeply personal. What rejuvenates one person might exhaust another. 
        This article will guide you through creating a personalized self-care routine that addresses your unique 
        needs and fits realistically into your life.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Person journaling in a peaceful setting with a cup of tea"
        caption="Self-care routines should be personalized to your unique needs and preferences"
        credit="Photo by Thought Catalog on Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Science Behind Effective Self-Care</h2>
      
      <p className="my-6 leading-relaxed">
        Before diving into practical strategies, it's helpful to understand why personalized self-care matters. 
        Research in behavioral psychology and neuroscience highlights several key principles:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Habit formation requires consistency</strong>: Activities need to be integrated 
            into your routine in a sustainable way to become automatic
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Personal relevance increases motivation</strong>: We're more likely to continue 
            behaviors that feel personally meaningful and valuable
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Small wins build momentum</strong>: Starting with achievable actions creates positive 
            reinforcement and builds confidence
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Environmental cues matter</strong>: Physical surroundings and social context 
            significantly influence our ability to maintain routines
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        These principles suggest that the most effective self-care routines are those designed with your specific 
        circumstances, preferences, and goals in mind—not generic prescriptions that work for everyone.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Self-care is not self-indulgence, it is self-preservation, and that is an act of political warfare."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Audre Lorde</cite>
      </blockquote>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Assessing Your Self-Care Needs</h2>
      
      <p className="my-6 leading-relaxed">
        The first step in creating a personalized routine is honest self-assessment. Take time to reflect on these dimensions of your life:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">1. Physical Well-being</h3>
      
      <p className="my-6 leading-relaxed">
        Consider your body's needs and current state:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>How is your energy level throughout the day?</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Are you experiencing any chronic pain or discomfort?</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>How satisfied are you with your sleep quality and quantity?</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Do you feel nourished by your current eating patterns?</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>How does your body respond to movement or exercise?</div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Person practicing yoga in a peaceful setting by a lake"
        caption="Physical movement can be an essential component of self-care for many people"
        credit="Photo by Dane Wetton on Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">2. Mental and Emotional State</h3>
      
      <p className="my-6 leading-relaxed">
        Reflect on your psychological landscape:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>What emotions do you experience most frequently?</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Do you have effective ways to process difficult feelings?</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>How often do you feel mentally overwhelmed or foggy?</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>What activities help you feel mentally refreshed?</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Are there recurring thought patterns that drain your energy?</div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">3. Social Connections</h3>
      
      <p className="my-6 leading-relaxed">
        Consider your relational needs:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Do you have sufficient meaningful connection in your life?</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Are there relationships that consistently drain your energy?</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>How comfortable are you setting boundaries with others?</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Do you have people with whom you can be authentically yourself?</div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">4. Life Purpose and Values</h3>
      
      <p className="my-6 leading-relaxed">
        Examine alignment with your deeper values:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>To what extent does your daily life reflect your core values?</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Are there activities that give you a sense of meaning or purpose?</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>What aspects of your life feel most out of alignment with who you want to be?</div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        Taking time to honestly assess these areas will help you identify where your self-care needs are 
        greatest. Remember, this isn't about finding what's "wrong" with you—it's about understanding 
        what kind of support you genuinely need to thrive.
      </p>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Designing Your Personalized Self-Care Menu</h2>
      
      <p className="my-6 leading-relaxed">
        Rather than prescribing a one-size-fits-all routine, consider creating a "self-care menu" with 
        options across different time commitments and dimensions of well-being. This approach gives you 
        flexibility while still providing structure.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Person sitting peacefully in meditation outdoors"
        caption="Your self-care menu should include activities that restore your energy and bring you joy"
        credit="Photo by Sage Friedman on Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Micro Self-Care Practices (1-5 minutes)</h3>
      
      <p className="my-6 leading-relaxed">
        These brief activities can be integrated throughout your day, even during busy periods:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Deep breathing</strong>: Three to five deep belly breaths to reset your nervous system
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Sensory grounding</strong>: Noticing five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Physical reset</strong>: Standing up, stretching, and shaking out your limbs
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Hydration pause</strong>: Taking a moment to drink a full glass of water mindfully
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Gratitude snapshot</strong>: Briefly noting three things you're grateful for in this moment
          </div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Mini Self-Care Practices (5-15 minutes)</h3>
      
      <p className="my-6 leading-relaxed">
        These activities require a bit more time but can still fit into breaks or transitions in your day:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Mindful tea or coffee ritual</strong>: Preparing and enjoying a beverage with full attention
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Journal check-in</strong>: Writing a brief reflection on how you're feeling and what you need
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Movement snack</strong>: A brief yoga sequence, walk around the block, or dance break
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Nature connection</strong>: Stepping outside to feel the sun or observe natural elements
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Digital detox</strong>: Taking a deliberate break from screens and notifications
          </div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9"
        alt="Person journaling with a cup of coffee"
        caption="Journaling can help process emotions and build self-awareness as part of a self-care practice"
        credit="Photo by Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Extended Self-Care Practices (30+ minutes)</h3>
      
      <p className="my-6 leading-relaxed">
        These deeper practices might be scheduled weekly or when you have more substantial time available:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Movement session</strong>: Longer workout, yoga practice, hike, or whatever movement brings you joy
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Creative expression</strong>: Time for art, music, writing, or other creative outlets
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Connection time</strong>: Quality time with friends, family, or community who energize you
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Nature immersion</strong>: Extended time outdoors in natural settings
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Learning and growth</strong>: Time spent developing skills or exploring interests
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Restorative rest</strong>: Naps, meditation, float tanks, massage, or other deeply relaxing experiences
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        For each category, select at least three to five practices that genuinely appeal to you. Don't include 
        activities that you think you "should" do but actually don't enjoy—that's a recipe for abandoning your routine.
      </p>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Implementing Your Routine: The Strategy Phase</h2>
      
      <p className="my-6 leading-relaxed">
        Having a menu of self-care options is a great start, but implementation requires strategic thinking. 
        Here's how to move from ideas to consistent practice:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">1. Start With One Thing</h3>
      
      <p className="my-6 leading-relaxed">
        Rather than trying to overhaul your entire life at once, choose a single practice to focus on establishing firmly. 
        The ideal first practice is:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Something you genuinely look forward to doing</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Relatively easy to implement</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Likely to give you a noticeable benefit quickly</div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        For example, if you're chronically dehydrated, starting with the "hydration pause" practice throughout 
        your day might give you quick energy benefits, making it easier to build momentum.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">2. Anchor to Existing Habits</h3>
      
      <p className="my-6 leading-relaxed">
        One of the most effective ways to establish a new habit is to connect it to something you already do consistently. 
        This strategy, sometimes called "habit stacking," leverages your existing routines.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
        <h4 className="font-medium text-primary mb-3">Examples of Habit Anchors:</h4>
        <ul className="space-y-2">
          <li><strong>After I pour my morning coffee</strong>, I will do three deep breathing cycles</li>
          <li><strong>Before I check social media</strong>, I will note three things I'm grateful for</li>
          <li><strong>When I finish brushing my teeth</strong>, I will do a quick body scan for tension</li>
          <li><strong>As I start my lunch break</strong>, I will step outside for five minutes</li>
          <li><strong>Before I sleep</strong>, I will write down three good things from my day</li>
        </ul>
      </div>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">3. Design Your Environment</h3>
      
      <p className="my-6 leading-relaxed">
        Make your self-care practices as accessible as possible by setting up your physical environment to support them:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Place visual reminders where you'll see them (sticky notes, objects, or digital wallpapers)</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Reduce friction by preparing materials in advance (laying out yoga mat, keeping journal and pen accessible)</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Create dedicated spaces for self-care activities when possible</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Remove obstacles and distractions that compete with your practice time</div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Peaceful bedroom setup with candles and plants"
        caption="Creating supportive environments can make self-care practices more inviting and accessible"
        credit="Photo by Collov Home Design on Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">4. Build In Accountability</h3>
      
      <p className="my-6 leading-relaxed">
        External accountability can significantly increase the likelihood that you'll maintain your practice:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Share your intentions with a supportive friend, partner, or therapist</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Join a community (in person or online) focused on similar practices</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Track your practice in a way that feels supportive rather than punitive</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Schedule sessions with professionals (trainer, coach, therapist) when relevant</div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">5. Plan for Challenges</h3>
      
      <p className="my-6 leading-relaxed">
        Anticipate obstacles and create specific contingency plans:
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm my-8">
        <h4 className="font-medium text-primary mb-3">If-Then Planning Examples:</h4>
        <ul className="space-y-2">
          <li><strong>If I'm too tired for my planned yoga session</strong>, then I'll just do 5 minutes of gentle stretching</li>
          <li><strong>If my usual morning routine is disrupted</strong>, then I'll do my breathing practice during my commute</li>
          <li><strong>If I'm feeling too emotionally raw to journal</strong>, then I'll just write three words that describe how I feel</li>
          <li><strong>If I miss my practice for a day</strong>, then I'll start again the next day without self-criticism</li>
        </ul>
      </div>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Seasonal Approach: Adapting Your Self-Care</h2>
      
      <p className="my-6 leading-relaxed">
        A key insight that helps maintain a long-term self-care practice is recognizing that your needs will naturally 
        change over time. Rather than seeing this as a failure of your routine, build in regular reassessment.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Quarterly Check-Ins</h3>
      
      <p className="my-6 leading-relaxed">
        Approximately every three months, take time to reflect on your self-care practice:
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">What's working well?</strong> Notice which practices feel supportive and energizing
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">What's feeling stale or burdensome?</strong> Identify practices that have become chores
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Have your circumstances or needs changed?</strong> Consider if new stressors or life changes require different support
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">What new practice might you want to experiment with?</strong> Consider adding one new element to your routine
          </div>
        </li>
      </ol>
      
      <p className="my-6 leading-relaxed">
        This seasonal approach keeps your self-care fresh and responsive to your actual needs, rather than becoming 
        a rigid checklist that eventually feels like another obligation.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Person walking in nature during autumn"
        caption="Different seasons of life may call for different self-care approaches"
        credit="Photo by Aaron Burden on Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">When Self-Care Isn't Enough</h2>
      
      <p className="my-6 leading-relaxed">
        It's important to acknowledge that while personalized self-care is valuable, it has limitations. 
        Some situations require more than individual practices:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Mental health conditions</strong> like clinical depression, anxiety disorders, or trauma may require professional support alongside self-care
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Systemic issues</strong> such as workplace exploitation, discrimination, or financial insecurity cannot be resolved through self-care alone
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Caregiver burnout</strong> often requires structural support and respite care, not just better self-care
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        In these situations, self-care remains important but should be complemented with appropriate professional 
        support, community resources, or systemic changes. Recognizing when you need more help is itself an act of self-care.
      </p>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Conclusion: Your Evolving Practice</h2>
      
      <p className="my-6 leading-relaxed">
        Creating a personalized self-care routine that sticks isn't about perfect adherence to a prescribed set of activities. 
        It's about developing an ongoing relationship with yourself—one characterized by attunement, responsiveness, and genuine care.
      </p>
      
      <p className="my-6 leading-relaxed">
        As you implement these strategies, approach the process with curiosity rather than rigid expectations. 
        Notice what helps you feel more resourced and alive, and be willing to adjust as you learn more about your unique needs.
      </p>
      
      <p className="my-6 leading-relaxed">
        Remember that the purpose of self-care isn't to add another set of obligations to your life. 
        It's to create sustainable practices that genuinely support your wellbeing, making you more resilient and 
        better able to engage fully with what matters most to you.
      </p>
      
      <p className="my-6 leading-relaxed">
        Your self-care practice will evolve as you do—and that evolution is not a sign of failure but of a living, 
        responsive relationship with your own needs and boundaries. That responsive quality is precisely what makes 
        a self-care routine sustainable over the long term.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Almost everything will work again if you unplug it for a few minutes, including you."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Anne Lamott</cite>
      </blockquote>
    </ArticleTemplate>
  );
} 