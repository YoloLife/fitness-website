import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function LifestyleArticleDigitalMinimalism() {
  const navigate = useNavigate();
  const category = "lifestyle";
  const slug = "digital-minimalism";
  
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
        In our hyper-connected world, the concept of digital minimalism offers a thoughtful approach to technology use. 
        Rather than rejecting technology outright or embracing it unconditionally, digital minimalism encourages us to be 
        intentional about which technologies we allow into our lives and how we interact with them.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Person enjoying a book away from technology"
        caption="Digital minimalism emphasizes meaningful offline activities"
        credit="Photo by Andrew Neel on Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">What Is Digital Minimalism?</h2>
      
      <p className="my-6 leading-relaxed">
        Computer science professor and author Cal Newport defines digital minimalism as "a philosophy that helps you 
        question what digital communication tools (and behaviors surrounding these tools) add the most value to your life." 
        At its core, it's about recognizing that our relationship with technology should be deliberate rather than habitual.
      </p>
      
      <p className="my-6 leading-relaxed">
        Unlike more extreme approaches that advocate abandoning modern technology altogether, digital minimalism acknowledges 
        the tremendous benefits that digital tools can provide. However, it emphasizes that these benefits should significantly 
        outweigh any costs to your time, attention, and mental wellbeing.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "The key to thriving in our high-tech world, according to digital minimalism, is to use technology to support your 
        goals and values, rather than letting it use you."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Cal Newport, Digital Minimalism</cite>
      </blockquote>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Signs You Might Need a Digital Reset</h2>
      
      <p className="my-6 leading-relaxed">
        Before diving into implementation strategies, it's worth considering whether your current technological habits 
        are actually serving you well. Common signs that you might benefit from a more minimalist approach include:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Reflexive phone checking</strong>: Do you grab your phone without thinking 
            whenever there's a momentary lull in activity? This autopilot behavior often indicates an unhealthy relationship with technology.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Social media comparison</strong>: Finding yourself regularly comparing your 
            life, body, achievements, or possessions to what you see online can significantly impact your self-esteem and happiness.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Phantom vibration syndrome</strong>: Experiencing the sensation that your 
            phone is vibrating when it isn't reflects how deeply connected our nervous systems have become to our devices.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Difficulty focusing</strong>: Finding it challenging to read a book, complete a task, 
            or engage in a conversation without checking your phone may indicate your attention has been fragmented by digital habits.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">FOMO (Fear of Missing Out)</strong>: Feeling anxious when you're not constantly 
            connected or up-to-date with the latest posts, news, or trends can be a sign of unhealthy digital dependence.
          </div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Person relaxing in nature away from devices"
        caption="Creating space between yourself and technology fosters mental clarity"
        credit="Photo by Ales Krivec on Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Digital Declutter Process</h2>
      
      <p className="my-6 leading-relaxed">
        Moving toward digital minimalism typically begins with a period of intentional disconnection—what Newport calls a "digital declutter." 
        This 30-day process gives you space to reevaluate your relationship with technology and rediscover offline activities that bring genuine satisfaction.
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Define your technology rules</strong>: Decide which digital tools and behaviors you'll 
            temporarily eliminate and which (if any) are absolutely necessary for work or key relationships. Be specific about when 
            and how you'll use essential technologies.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Take a 30-day break</strong>: For the next month, eliminate optional technologies and use 
            only what's necessary according to your predefined rules. This isn't forever—it's an experiment to help you reset your digital habits.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Rediscover high-value activities</strong>: During this period, actively explore rewarding 
            offline pursuits. What engaged you before smartphones? What have you always wanted to try? This exploration is crucial—nature 
            abhors a vacuum, and without replacement activities, you'll likely revert to old digital habits.
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Reintroduce technology selectively</strong>: After 30 days, carefully evaluate which digital tools 
            to allow back into your life. For each, ask: "Does this technology directly support something I deeply value?" and "Is this the best 
            way to use technology to support this value?"
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
          <div>
            <strong className="font-medium">Implement operating procedures</strong>: For each technology you reintroduce, establish strict parameters 
            around when and how you'll use it. These aren't just vague intentions but concrete rules: "I'll check social media only on my computer, 
            between 5-6 PM, after work hours."
          </div>
        </li>
      </ol>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Sample Digital Operating Procedures</h3>
      
      <p className="my-6 leading-relaxed">
        Once you've determined which technologies add genuine value to your life, create specific guidelines for their use. 
        Here are some examples of thoughtful digital operating procedures:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Schedule specific times to check email (e.g., 10 AM and 3 PM) rather than leaving your inbox open all day</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Delete social media apps from your phone and only access them from a computer browser</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Use a physical alarm clock instead of your phone to avoid morning screen time</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Establish tech-free zones in your home, particularly bedrooms and dining areas</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Set your phone to grayscale mode to reduce its visual appeal and addictive nature</div>
        </li>
      </ul>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Beyond the Declutter: Building a Sustainable Practice</h2>
      
      <p className="my-6 leading-relaxed">
        True digital minimalism is an ongoing practice, not a one-time reset. After completing your initial declutter, 
        consider these strategies for maintaining a healthy relationship with technology long-term:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">1. Embrace Slow Communication</h3>
      
      <p className="my-6 leading-relaxed">
        The expectation of immediate response has created significant stress in our digital communications. Reclaim your 
        attention by embracing "slow communication"—the practice of responding to messages on your schedule, not instantly. 
        Most things genuinely aren't urgent.
      </p>
      
      <p className="my-6 leading-relaxed">
        Set expectations with colleagues and friends about your communication patterns. You might even add an email signature 
        explaining that you check messages at specific times and will respond accordingly.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">2. Practice Digital Sabbath</h3>
      
      <p className="my-6 leading-relaxed">
        Many digital minimalists find tremendous value in taking regular, scheduled breaks from technology—often called a 
        "digital sabbath." This might be a tech-free evening each week, a screen-free Saturday, or even a commitment to power 
        down all devices after 8 PM daily.
      </p>
      
      <p className="my-6 leading-relaxed">
        These intentional breaks remind us that the world continues to function perfectly well without our constant digital 
        engagement, and they provide invaluable space for presence, connection, and recovery.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">3. Invest in Quality Leisure</h3>
      
      <p className="my-6 leading-relaxed">
        A key component of successful digital minimalism is having meaningful alternatives to digital distraction. Newport 
        emphasizes the importance of "high-quality leisure"—activities that engage you physically, creatively, socially, or intellectually.
      </p>
      
      <p className="my-6 leading-relaxed">
        Whether it's woodworking, playing a musical instrument, participating in community sports, or joining a book club, 
        these activities provide the kind of deep satisfaction that scrolling can never deliver, making it easier to resist 
        the pull of digital distraction.
      </p>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Is Digital Minimalism Right for Everyone?</h2>
      
      <p className="my-6 leading-relaxed">
        While the principles of digital minimalism can benefit most people, the specific implementation will look different 
        for everyone. Your professional requirements, family needs, geographic location, and personal interests will all 
        influence what constitutes a healthy technological balance for you.
      </p>
      
      <p className="my-6 leading-relaxed">
        The goal isn't a competition to see who can use technology the least—it's to create an intentional relationship with 
        digital tools that enhances rather than diminishes your quality of life. For some, this might mean maintaining active 
        social media accounts but accessing them only at scheduled times; for others, it could mean eliminating certain platforms entirely.
      </p>
      
      <p className="my-6 leading-relaxed">
        What matters most is that your technology use reflects your deeper values and supports the life you want to live, 
        rather than distracting you from it.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "The cost of a thing is the amount of what I will call life which is required to be exchanged for it, immediately or in the long run."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Henry David Thoreau</cite>
      </blockquote>
      
      <p className="my-6 leading-relaxed">
        In the end, digital minimalism asks us to regularly consider Thoreau's wisdom—what are we exchanging our limited 
        time and attention for, and is that exchange truly worthwhile? By approaching technology with intention rather than 
        habit, we can ensure that our digital lives enhance rather than diminish our experience of what matters most.
      </p>
    </ArticleTemplate>
  );
} 