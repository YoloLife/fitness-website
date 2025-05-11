import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function MentalHealthArticleBuildingEmotionalResilience() {
  const navigate = useNavigate();
  const category = "mental-health";
  const slug = "building-emotional-resilience";
  
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
        Life inevitably brings challenges that test our mental and emotional strength. Whether facing a global pandemic, personal loss, career setbacks, or relationship difficulties, our capacity to navigate adversity determines not just how quickly we recover, but how we grow through these experiences. Emotional resilience—often described as our psychological immune system—is what enables us to face life's difficulties while maintaining our mental health and wellbeing.
      </p>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">What Is Emotional Resilience?</h2>
      
      <p className="my-6 leading-relaxed">
        Emotional resilience is the ability to adapt to stressful situations, overcome adversity, and bounce back from difficult life events. It's not about avoiding stress or hardship—which is impossible—but rather developing skills to process these experiences in ways that foster growth and learning rather than trauma and defeat.
      </p>
      
      <p className="my-6 leading-relaxed">
        Contrary to popular belief, resilience isn't an innate trait that some people have and others don't. Research in neuroplasticity and psychology confirms that resilience can be cultivated through specific practices and mindset shifts.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/vector-1745318509361-47ce7e7481d3"
        alt="Person standing on a mountain summit looking out over a landscape"
        caption="Resilience enables us to rise above difficulties and see a broader perspective"
        credit="Photo by Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Key Components of Emotional Resilience</h2>
      
      <p className="my-6 leading-relaxed">
        Understanding the building blocks of resilience helps us identify areas where we can focus our development efforts:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">1. Realistic Optimism</h3>
      
      <p className="my-6 leading-relaxed">
        Resilient people maintain a hopeful outlook without denying reality. This balanced perspective allows them to acknowledge difficulties while still imagining possibilities for positive outcomes or meaning.
      </p>
      
      <p className="my-6 leading-relaxed">
        Rather than toxic positivity ("everything happens for a reason!"), realistic optimism means believing in your capacity to influence outcomes while accepting what's beyond your control.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">2. Emotional Regulation</h3>
      
      <p className="my-6 leading-relaxed">
        The ability to recognize, name, and manage emotions—particularly during crisis or stress—is fundamental to resilience. This doesn't mean suppressing feelings, but rather experiencing them without being overwhelmed or controlled by them.
      </p>
      
      <p className="my-6 leading-relaxed">
        Effective emotional regulation means we can respond rather than react, making choices aligned with our values rather than driven by momentary emotional surges.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">3. Cognitive Flexibility</h3>
      
      <p className="my-6 leading-relaxed">
        The capacity to reframe situations, consider multiple perspectives, and adapt our thinking helps us navigate challenges more effectively. Rigid thinking patterns ("This is the worst thing ever" or "I'll never recover") increase suffering, while flexible thinking expands our response options.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1578941838877-141265f3a898"
        alt="Person writing in a journal with a cup of tea nearby"
        caption="Journaling helps us process emotions and develop new perspectives"
        credit="Photo by Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">4. Strong Support Systems</h3>
      
      <p className="my-6 leading-relaxed">
        Resilience is not about self-sufficiency or "going it alone." In fact, research consistently shows that meaningful social connections are one of the strongest predictors of resilience. People who feel supported recover from adversity more quickly and completely.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">5. Self-Efficacy</h3>
      
      <p className="my-6 leading-relaxed">
        The belief in your ability to influence outcomes through your actions—what psychologists call self-efficacy—significantly impacts resilience. This confidence comes from recognizing your strengths, remembering past successes, and focusing on what you can control.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Life doesn't get easier or more forgiving; we get stronger and more resilient."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Dr. Steve Maraboli</cite>
      </blockquote>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Evidence-Based Practices to Build Resilience</h2>
      
      <p className="my-6 leading-relaxed">
        Scientific research has identified several practices that effectively strengthen resilience. These approaches work by changing neural pathways in the brain, shifting thought patterns, and developing new emotional responses:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Cultivate Self-Awareness</h3>
      
      <p className="my-6 leading-relaxed">
        Understanding your thought patterns, emotional responses, and typical reactions to stress creates the foundation for resilience. You can develop self-awareness through:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Mindfulness meditation:</strong> Regular practice strengthens the prefrontal cortex, which helps regulate emotions and make thoughtful decisions. Start with just 5 minutes daily of focused breathing.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Journaling:</strong> Writing about difficult experiences helps process emotions and identify patterns. Try a structured prompt like "What triggered my stress today, how did I respond, and what might work better next time?"
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Body awareness:</strong> Notice where you feel emotions physically (tension in shoulders, knot in stomach). This connection helps you recognize emotions earlier before they overwhelm.
          </div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/vector-1743801052603-739571d2ac03"
        alt="Person in a yoga pose outdoors"
        caption="Movement practices help build mind-body awareness and calm the nervous system"
        credit="Photo by Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Practice Cognitive Reframing</h3>
      
      <p className="my-6 leading-relaxed">
        How we interpret events profoundly impacts our emotional response. Cognitive reframing involves challenging unhelpful thought patterns and developing more balanced perspectives:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Question catastrophic thinking:</strong> When faced with thoughts like "This is a complete disaster," ask "Is this really true? What facts support or contradict this view?"
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Find alternative explanations:</strong> For challenging situations, brainstorm at least three different interpretations beyond your initial reaction.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Look for growth opportunities:</strong> Ask "What might I learn from this?" or "How might this help me develop?" when facing difficulties.
          </div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Build Your Support Network</h3>
      
      <p className="my-6 leading-relaxed">
        Strong social connections are consistently associated with greater resilience and faster recovery from adversity:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Identify key supporters:</strong> Make a list of people you can truly be yourself with and reach out to them regularly, not just in crisis.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Practice vulnerability:</strong> Share challenges with trusted others. Research shows that putting emotions into words reduces their intensity.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Join communities:</strong> Whether it's a support group, spiritual community, or hobby club, shared experiences foster connection.
          </div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Develop Self-Compassion</h3>
      
      <p className="my-6 leading-relaxed">
        How we treat ourselves during difficult times significantly impacts resilience. Self-compassion—treating yourself with the same kindness you'd offer a good friend—reduces anxiety and increases emotional strength:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Notice self-criticism:</strong> Become aware of your inner dialogue. Would you speak to someone you care about this way?
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Practice self-compassion phrases:</strong> When struggling, try statements like "This is really difficult right now. Many people would feel this way. How can I support myself through this?"
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Acknowledge common humanity:</strong> Remember that struggle is universal—you're not alone in facing challenges.
          </div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1609114214930-4f64ba35049f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Person writing a gratitude list in journal"
        caption="Gratitude practices help shift attention to what's going well, even during difficult times"
        credit="Photo by Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Maintain Physical Wellbeing</h3>
      
      <p className="my-6 leading-relaxed">
        Mind and body are deeply connected. Physical practices create the physiological foundation for emotional resilience:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Regular movement:</strong> Exercise reduces stress hormones and increases endorphins. Even short walks produce benefits.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Prioritize sleep:</strong> Sleep deprivation amplifies stress responses and weakens emotional regulation. Create consistent sleep routines.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Practice relaxation techniques:</strong> Deep breathing, progressive muscle relaxation, or yoga help activate the parasympathetic nervous system, calming the stress response.
          </div>
        </li>
      </ul>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Resilience During Major Life Challenges</h2>
      
      <p className="my-6 leading-relaxed">
        While the practices above build general resilience, certain life events require specific approaches:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Coping with Loss</h3>
      
      <p className="my-6 leading-relaxed">
        Grief is a natural response to loss that doesn't need to be "fixed," but resilience helps us integrate the experience:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Honor all emotions:</strong> Allow yourself to feel the full range of emotions without judgment.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Maintain routines:</strong> Basic structure provides stability during emotional turbulence.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Create meaningful rituals:</strong> Find ways to honor and remember what's been lost while gradually building a new normal.
          </div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Navigating Major Life Transitions</h3>
      
      <p className="my-6 leading-relaxed">
        Whether it's changing careers, moving, or ending relationships, transitions require adaptive resilience:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Acknowledge ambivalence:</strong> Most transitions involve mixed feelings—excitement and anxiety can coexist.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Focus on transferable strengths:</strong> Identify skills and qualities that have helped you adapt in the past.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Create continuity:</strong> Maintain some elements of your previous life while embracing new opportunities.
          </div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Facing Health Challenges</h3>
      
      <p className="my-6 leading-relaxed">
        Physical health crises test resilience in unique ways:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Become an informed advocate:</strong> Knowledge about your condition helps restore a sense of control.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Focus on what's possible:</strong> Adapt expectations while finding new ways to engage with valued activities.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Connect with others facing similar challenges:</strong> Shared experience provides both practical strategies and emotional support.
          </div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1604881991720-f91add269bed"
        alt="Group of people in a support circle holding hands"
        caption="Community support significantly enhances resilience during difficult times"
        credit="Photo by Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">When to Seek Professional Support</h2>
      
      <p className="my-6 leading-relaxed">
        While self-development practices strengthen resilience, sometimes professional support is needed, particularly when:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Emotional distress persists for weeks and interferes with daily functioning
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            You're using unhealthy coping mechanisms like substance use or isolation
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            You're experiencing thoughts of harming yourself or others
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            The challenge involves trauma or complex grief
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        Mental health professionals can provide evidence-based tools tailored to your specific situation. Seeking help demonstrates self-awareness and courage—key components of resilience itself.
      </p>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Journey of Resilience</h2>
      
      <p className="my-6 leading-relaxed">
        Building emotional resilience is not about reaching a destination, but rather engaging in an ongoing process. Like physical fitness, resilience requires consistent practice and evolves throughout life. The goal isn't to eliminate all negative emotions or challenges—these are inevitable parts of the human experience—but to develop the capacity to move through difficult times with greater ease and growth.
      </p>
      
      <p className="my-6 leading-relaxed">
        Remember that setbacks are part of the process. There will be days when resilience feels elusive, and that's normal. What matters is the commitment to continue developing these skills over time, knowing that each challenge provides an opportunity to strengthen your psychological immune system.
      </p>
      
      <p className="my-6 leading-relaxed">
        By investing in emotional resilience, you're not just preparing for future difficulties—you're enhancing your capacity to experience joy, connection, and meaning in all aspects of life. This inner strength becomes a foundation that supports not just survival during hard times, but genuine thriving throughout your life's journey.
      </p>
    </ArticleTemplate>
  );
} 