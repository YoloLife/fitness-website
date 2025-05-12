import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function SpiritualArticleConnectingWithNature() {
  const navigate = useNavigate();
  const category = "spiritual";
  const slug = "connecting-with-nature";
  
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
        In our increasingly digital and urbanized world, many people feel a growing disconnect from the natural 
        environment. This separation isn't just physical—it's psychological and spiritual. Research consistently 
        shows that reconnecting with nature offers profound benefits for our mental wellbeing, emotional balance, 
        and spiritual health.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="Person sitting peacefully in a forest clearing with sunlight filtering through trees"
        caption="Finding moments of stillness in nature can create space for profound spiritual connection"
        credit="Photo from Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Science of Nature Connection</h2>
      
      <p className="my-6 leading-relaxed">
        The healing power of nature isn't just anecdotal—it's backed by a growing body of scientific research. 
        Studies in environmental psychology, neuroscience, and public health have documented numerous benefits:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Stress reduction</strong>: Exposure to natural environments reduces 
            cortisol levels, blood pressure, and heart rate while activating the parasympathetic nervous system.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Cognitive restoration</strong>: Nature provides the perfect environment 
            for "soft fascination"—a state where attention is captured effortlessly, allowing mental fatigue to recover.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Emotional regulation</strong>: Regular nature immersion is associated 
            with reduced symptoms of anxiety and depression, and improved emotional resilience.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Enhanced creativity</strong>: Natural settings stimulate divergent thinking, 
            problem-solving abilities, and creative insights.
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        These physiological and psychological benefits create the foundation for deeper spiritual experiences 
        in natural settings. When our nervous systems calm and our cognitive load lightens, we become more 
        receptive to the subtle experiences that many associate with spirituality.
      </p>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Nature in Spiritual Traditions</h2>
      
      <p className="my-6 leading-relaxed">
        Across cultures and throughout history, natural environments have played central roles in spiritual practices:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 bg-green-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Indigenous Traditions</h4>
          <p className="text-sm">
            Many indigenous cultures maintain deep spiritual connections to the land, recognizing nature as alive, 
            conscious, and sacred. Ceremonies often take place outdoors to strengthen these bonds, and natural 
            elements like fire, water, and plants play central roles in ritual practices.
          </p>
        </div>
        
        <div className="p-6 bg-green-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Eastern Philosophies</h4>
          <p className="text-sm">
            Traditions like Taoism and Buddhism emphasize harmony with natural cycles and draw wisdom from 
            natural phenomena. The concept of non-duality in many Eastern traditions dissolves the perceived 
            separation between self and environment, fostering direct experiences of interconnection.
          </p>
        </div>
        
        <div className="p-6 bg-green-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Western Mysticism</h4>
          <p className="text-sm">
            Christian contemplatives like St. Francis of Assisi and Celtic spiritual traditions recognized 
            divine presence within the natural world. Transcendentalist philosophers like Emerson and Thoreau 
            sought spiritual insight through immersion in wild places.
          </p>
        </div>
        
        <div className="p-6 bg-green-50 rounded-lg">
          <h4 className="font-medium text-lg mb-2 text-primary">Contemporary Spirituality</h4>
          <p className="text-sm">
            Many modern spiritual seekers identify as "spiritual but not religious" and find profound connection 
            through direct experiences in nature rather than through institutional structures. Practices like 
            forest bathing and vision quests have been adapted for contemporary contexts.
          </p>
        </div>
      </div>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1665730596456-3a928aba99c1"
        alt="Natural stone cairn by a peaceful stream"
        caption="Simple stone stacking can become a meditative practice that connects us to the present moment"
        credit="Photo from Unsplash"
      />
      
      <p className="my-6 leading-relaxed">
        What these diverse traditions share is a recognition that something transformative happens when 
        humans intentionally engage with natural environments. The specifics of belief may differ, but the 
        experiential dimension—feelings of awe, reverence, interconnection, and presence—remains remarkably consistent.
      </p>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Spiritual Gifts of Nature</h2>
      
      <p className="my-6 leading-relaxed">
        What makes natural settings so conducive to spiritual wellbeing? Several key qualities of nature 
        experiences seem particularly significant:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Awe and Transcendence</h3>
      
      <p className="my-6 leading-relaxed">
        Natural environments—particularly vast landscapes like mountain ranges, oceans, and star-filled 
        skies—reliably trigger experiences of awe. This emotion, characterized by a sense of vastness and 
        the need to accommodate new information, has profound effects on consciousness:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Shifts perspective</strong> beyond immediate concerns and expands 
            awareness of something greater than oneself
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Diminishes the ego</strong> and increases feelings of connection 
            to others and the wider ecosystem
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Creates "time abundance"</strong>—the perception that time is 
            more expansive and available
          </div>
        </li>
      </ul>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "The clearest way into the Universe is through a forest wilderness."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– John Muir</cite>
      </blockquote>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Presence and Embodiment</h3>
      
      <p className="my-6 leading-relaxed">
        The multisensory richness of natural environments naturally draws attention to the present moment. 
        The sound of flowing water, the scent of pine, the feel of wind—these sensations anchor consciousness 
        in the here and now. This present-moment awareness is central to many contemplative traditions.
      </p>
      
      <p className="my-6 leading-relaxed">
        Moreover, nature invites full-bodied engagement. Unlike virtual experiences that primarily engage 
        visual and auditory faculties, natural settings activate all our senses and encourage physical 
        movement—walking, climbing, swimming. This embodied experience counters the dissociation that often 
        characterizes modern life.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Rhythmic Attunement</h3>
      
      <p className="my-6 leading-relaxed">
        Natural environments operate according to rhythms and cycles fundamentally different from the linear, 
        clock-based time that dominates modern life. Spending time in nature allows us to resynchronize with 
        these organic patterns:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Diurnal cycles</strong> of light and dark that regulate circadian rhythms
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Seasonal shifts</strong> that remind us of larger life cycles of growth, 
            fruition, release, and renewal
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Weather patterns</strong> that teach adaptation and resilience
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        This attunement to natural rhythms can foster a more balanced relationship with time itself—less 
        driven by productivity metrics and more aligned with organic ebbs and flows of energy.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="Starry night sky viewed from a forest clearing"
        caption="Gazing at the night sky can evoke profound feelings of awe and perspective"
        credit="Photo from Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Practical Nature Connection Practices</h2>
      
      <p className="my-6 leading-relaxed">
        You don't need to live in a wilderness area or radically change your lifestyle to benefit from nature 
        connection. Here are accessible practices that can be adapted to various lifestyles and environments:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Mindful Nature Immersion</h3>
      
      <div className="p-6 bg-amber-50 rounded-lg my-6">
        <h4 className="font-medium text-lg mb-2 text-primary">The Senses Meditation</h4>
        <p className="mb-4">
          This simple practice can be done in any natural setting, from an urban park to a wilderness area. It helps 
          anchor awareness in direct experience rather than conceptual thinking:
        </p>
        <ol className="space-y-2 list-decimal pl-5">
          <li>Find a comfortable position sitting or standing in a natural space</li>
          <li>Take several deep breaths to center yourself</li>
          <li>Moving through each sense, notice:
            <ul className="space-y-1 list-disc pl-5 mt-1">
              <li><strong>5 things you can see</strong> (colors, movements, shapes)</li>
              <li><strong>4 things you can feel</strong> (air on skin, texture of ground)</li>
              <li><strong>3 things you can hear</strong> (near sounds, distant sounds)</li>
              <li><strong>2 things you can smell</strong> (plant aromas, earth scents)</li>
              <li><strong>1 thing you can taste</strong> (the air, moisture in mouth)</li>
            </ul>
          </li>
          <li>After moving through each sense, rest in open awareness of all sensations</li>
          <li>Notice how your body feels after this practice</li>
        </ol>
      </div>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Regular Micro-Connections</h3>
      
      <p className="my-6 leading-relaxed">
        Even brief encounters with natural elements can offer significant benefits when practiced consistently:
      </p>
      
      <div className="space-y-4 my-6">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-primary">Morning sky greeting</h4>
          <p className="text-sm mt-1">
            Begin each day by stepping outside (or looking out a window) to observe the sky for a full minute, 
            noting its colors, cloud patterns, and quality of light.
          </p>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-primary">Lunch outside</h4>
          <p className="text-sm mt-1">
            Even in urban environments, finding a tree or patch of grass to sit near during a meal break 
            provides a refreshing reset.
          </p>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-primary">Plant tending</h4>
          <p className="text-sm mt-1">
            Caring for houseplants or a small garden creates an ongoing relationship with living beings and 
            natural cycles.
          </p>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-primary">Evening stargazing</h4>
          <p className="text-sm mt-1">
            Taking a few moments to observe the night sky before bed provides perspective and connects you 
            to cosmic rhythms.
          </p>
        </div>
      </div>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Deeper Immersion Practices</h3>
      
      <p className="my-6 leading-relaxed">
        When more time is available, these practices offer opportunities for deeper connection:
      </p>
      
      <div className="space-y-4 my-6">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-primary">Forest bathing (Shinrin-yoku)</h4>
          <p className="text-sm mt-1">
            This Japanese practice involves slow, mindful walking in a forest environment with emphasis on 
            sensory awareness rather than destination. Research shows it reduces stress hormones and enhances 
            immune function.
          </p>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-primary">Solo sitting</h4>
          <p className="text-sm mt-1">
            Finding a spot in nature to sit quietly for an extended period (30+ minutes) allows deeper 
            settling of the nervous system and heightened awareness of the surroundings.
          </p>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-primary">Overnight wilderness time</h4>
          <p className="text-sm mt-1">
            Spending a full day-night cycle outdoors—whether camping or at a retreat center—allows 
            attunement to natural rhythms that are often missed in indoor environments.
          </p>
        </div>
      </div>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="Person walking mindfully through a forest path"
        caption="Forest bathing invites slow, sensory engagement with the forest environment"
        credit="Photo from Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Cultivating a Reciprocal Relationship</h2>
      
      <p className="my-6 leading-relaxed">
        Truly sustainable spiritual connection with nature involves reciprocity—not just receiving benefits 
        from natural environments, but also giving back through stewardship and advocacy. This ethic of care 
        emerges naturally from experiences of interconnection:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Local engagement</strong>: Participating in habitat restoration, 
            tree planting, or cleanup events in your community
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Consumer choices</strong>: Selecting products and services that 
            minimize environmental harm
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Collective advocacy</strong>: Supporting policies and initiatives 
            that protect natural areas and address environmental challenges
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        These actions not only benefit ecosystems but also deepen one's personal connection by creating 
        meaningful engagement with specific places and environmental issues.
      </p>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">The Path Forward: Integrating Nature Connection</h2>
      
      <p className="my-6 leading-relaxed">
        The relationship between humans and the natural world is both ancient and evolving. As we navigate 
        the complexities of contemporary life—with its unprecedented technological mediation and environmental 
        challenges—intentional nature connection offers a vital path to spiritual wellbeing.
      </p>
      
      <p className="my-6 leading-relaxed">
        By weaving regular nature connection into your life, you're not engaging in an optional recreational 
        activity or luxury experience—you're addressing a fundamental human need. The sense of belonging, 
        perspective, and reverence that emerges from these practices nourishes aspects of wellbeing that 
        many other approaches cannot reach.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, 
        and they're still beautiful."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Alice Walker</cite>
      </blockquote>
      
      <p className="my-6 leading-relaxed">
        Whether through momentary micro-practices or extended wilderness immersion, the invitation is the 
        same: step outside, open your senses, and allow yourself to be changed by the encounter. In doing 
        so, you participate in a form of spiritual practice accessible to all, regardless of philosophical 
        or religious background—a direct communion with the living world that sustains and includes us all.
      </p>
    </ArticleTemplate>
  );
} 