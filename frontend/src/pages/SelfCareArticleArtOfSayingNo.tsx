import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function SelfCareArticleArtOfSayingNo() {
  const navigate = useNavigate();
  const category = "self-care";
  const slug = "art-of-saying-no";
  
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
    title: article.title || "The Art of Saying No: Setting Boundaries for Better Self-Care",
    description: article.description || "Learn how setting healthy boundaries through the power of saying 'no' can protect your time, energy, and mental wellbeing.",
    image: article.image || "https://images.unsplash.com/photo-1513258496099-48168024aec0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    date: new Date(article.date || Date.now()),
    readTime: article.readTime || "8 min",
    author: article.author,
    category: article.category,
    categoryLabel: getCategoryTitle(article.category)
  };
  
  // Return the article with content
  return (
    <ArticleTemplate article={articleMetadata}>
      <p className="my-6 leading-relaxed">
        In a culture that celebrates productivity and availability, saying "no" can feel like a radical act. Yet learning to set boundaries is one of the most powerful self-care tools available to us. Whether it's declining additional work responsibilities, stepping back from draining social obligations, or simply protecting your personal time, mastering the art of saying "no" is essential for maintaining wellbeing in today's demanding world.
      </p>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Why Saying "No" Is So Difficult</h2>
      
      <p className="my-6 leading-relaxed">
        For many of us, declining requests or invitations triggers feelings of guilt, fear, or anxiety. These emotional responses often stem from deep-seated beliefs and social conditioning:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">People-pleasing tendencies</strong> that tie our self-worth to others' approval
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Fear of missing out (FOMO)</strong> on opportunities or experiences
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Concern about damaging relationships</strong> or being perceived as selfish
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Cultural or family expectations</strong> that prioritize availability and self-sacrifice
          </div>
        </li>
      </ul>

      <ContentImage 
        src="https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1"
        alt="Two people in conversation discussing boundaries in an office setting"
        caption="The pressure to always be available can lead to burnout and diminished wellbeing"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Hidden Costs of Always Saying "Yes"</h2>
      
      <p className="my-6 leading-relaxed">
        While accommodating others' needs can strengthen relationships and create opportunities, habitually saying "yes" when you want to say "no" comes with significant costs:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Chronic stress and burnout</strong> from overcommitment and insufficient recovery time
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Resentment toward others</strong> for requests you felt unable to decline
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Diminished quality of work</strong> due to spreading yourself too thin
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Lost personal and professional opportunities</strong> that align more closely with your values and goals
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Erosion of self-trust</strong> from repeatedly overriding your own needs and intuition
          </div>
        </li>
      </ul>

      <p className="my-6 leading-relaxed">
        Research published in the Journal of Consumer Research found that saying "I don't have time" still makes people feel disempowered, while saying "It doesn't work for me" helps people feel more in control and less overwhelmed.
      </p>

      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "When you say 'yes' to others, make sure you're not saying 'no' to yourself."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Paulo Coelho</cite>
      </blockquote>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Recognizing When to Say "No"</h2>
      
      <p className="my-6 leading-relaxed">
        Learning to recognize situations that warrant a "no" is the first step toward healthier boundaries. Consider declining requests when:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            You're already at capacity with existing commitments
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            The request conflicts with your core values or priorities
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            You notice physical tension, anxiety, or dread when considering the request
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            You'd only be saying "yes" out of guilt, fear, or obligation
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            The request would require sacrificing needed rest or recovery time
          </div>
        </li>
      </ul>

      <ContentImage 
        src="https://images.unsplash.com/photo-1557321259-edfc29fa4053"
        alt="Yellow NO text painted on dark asphalt"
        caption="Taking a moment to check in with yourself before responding to requests can help identify your true priorities"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Practical Ways to Say "No" Gracefully</h2>
      
      <p className="my-6 leading-relaxed">
        Saying "no" doesn't have to be harsh or abrupt. These approaches allow you to decline requests while maintaining relationships and self-respect:
      </p>

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">1. The Simple, Direct Approach</h3>
      
      <p className="my-6 leading-relaxed">
        When possible, be straightforward but kind:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            "Thank you for thinking of me, but I'm not able to take this on."
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            "I appreciate the invitation, but I need to decline."
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            "I've carefully considered your request, and I need to say no at this time."
          </div>
        </li>
      </ul>

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">2. The Honesty Approach</h3>
      
      <p className="my-6 leading-relaxed">
        Sometimes, sharing your reasoning (without oversharing) helps others understand your position:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            "I've committed to reducing my workload to prevent burnout, so I'm declining new projects right now."
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            "I'm focusing on spending more time with my family this month, so I'll need to pass on this opportunity."
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            "I've promised myself I wouldn't overcommit this year, and I need to honor that personal boundary."
          </div>
        </li>
      </ul>

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">3. The Alternative Offer</h3>
      
      <p className="my-6 leading-relaxed">
        When you value the relationship but can't fulfill the specific request:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            "I can't take on the whole project, but I could review the proposal by Thursday."
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            "I'm not available this weekend, but let's schedule something for next month."
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            "I can't help personally, but I know someone who might be interested—would you like an introduction?"
          </div>
        </li>
      </ul>

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">4. The Raincheck Approach</h3>
      
      <p className="my-6 leading-relaxed">
        When you're interested but the timing doesn't work:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            "I can't commit to this now, but please keep me in mind for future opportunities."
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            "My schedule is full until May—could we revisit this then?"
          </div>
        </li>
      </ul>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Building Your "No" Muscle: A Practice</h2>
      
      <p className="my-6 leading-relaxed">
        Like any skill, saying "no" becomes easier with practice. Try this step-by-step approach to strengthen your boundary-setting abilities:
      </p>

      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Start small:</strong> Practice with low-stakes situations, like declining a store clerk's offer for additional services
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Use the pause technique:</strong> When asked to commit to something, say "Let me check my schedule and get back to you" to give yourself time to decide mindfully
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Prepare scripts:</strong> Have ready-made responses for common requests that you typically find difficult to refuse
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Practice in front of a mirror:</strong> Rehearse saying "no" with a firm but kind tone to build confidence
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
          <div>
            <strong className="font-medium">Reflect on outcomes:</strong> Notice how people actually respond to your "no" (often more positively than expected)
          </div>
        </li>
      </ol>

      <ContentImage 
        src="https://images.unsplash.com/vector-1743801055485-05dc13a15295"
        alt="Silhouettes of two people in conversation with gestures"
        caption="Mindfulness practices can help build awareness of when we're saying 'yes' out of habit rather than genuine desire"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">When Your "No" Isn't Respected</h2>
      
      <p className="my-6 leading-relaxed">
        Sometimes, despite your best efforts to communicate boundaries clearly, others may continue to press or disregard your "no." This is often more about their patterns and expectations than any failure on your part. In these situations:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Restate your boundary calmly but firmly:</strong> "As I mentioned, I'm not able to take this on."
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Avoid over-explaining:</strong> Lengthy justifications can invite negotiation.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Use the broken record technique:</strong> Consistently repeat your position without escalating emotionally.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Recognize patterns:</strong> If certain relationships consistently involve boundary violations, this may indicate a need for deeper changes.
          </div>
        </li>
      </ul>

      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Daring to set boundaries is about having the courage to love ourselves, even when we risk disappointing others."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Brené Brown</cite>
      </blockquote>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Unexpected Benefits of Saying "No"</h2>
      
      <p className="my-6 leading-relaxed">
        While setting boundaries may initially feel uncomfortable, the long-term benefits extend far beyond just having more time:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Increased energy and creativity</strong> for projects and people that truly matter to you
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Greater authenticity in relationships,</strong> as people come to know your true preferences and capacity
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Improved self-esteem</strong> from honoring your own needs and values
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">More meaningful "yeses"</strong> when you do choose to commit
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Role modeling healthy boundaries</strong> for others in your life
          </div>
        </li>
      </ul>

      <p className="my-6 leading-relaxed">
        The paradox of boundaries is that they create not just protection but also freedom—the freedom to dedicate your finite time and energy to what truly matters to you. By mastering the art of saying "no," you're actually saying "yes" to a more intentional, balanced, and fulfilling life.
      </p>

      <p className="my-6 leading-relaxed">
        Remember that setting boundaries is not selfish; it's necessary self-care. By protecting your time and energy, you ensure that when you do give to others, you can do so from a place of genuine generosity rather than obligation or resentment.
      </p>
    </ArticleTemplate>
  );
} 