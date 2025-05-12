import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function EnvironmentalArticleNonToxicHome() {
  const navigate = useNavigate();
  const category = "environmental";
  const slug = "non-toxic-home";
  
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
        Our homes should be sanctuaries—places where we rest, recharge, and feel safe. Yet many 
        conventional household products contain chemicals that may compromise our health and the environment. 
        Creating a non-toxic home environment doesn't have to be overwhelming or expensive. With some knowledge 
        and simple swaps, you can significantly reduce your exposure to potentially harmful substances while creating 
        a healthier space for you and your loved ones.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Bright, clean living room with plants and natural materials"
        caption="A non-toxic home incorporates natural materials, plants, and minimizes synthetic chemicals"
        credit="Photo by Spacejoy on Unsplash"
      />
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Understanding Household Toxins</h2>
      
      <p className="my-6 leading-relaxed">
        Before diving into specific changes, it's helpful to understand what we mean by "toxins" in the home context. 
        These include various synthetic chemicals found in cleaning products, furniture, building materials, and everyday items 
        that have been linked to health concerns ranging from respiratory irritation to hormone disruption and, in some cases, 
        more serious long-term health effects.
      </p>
      
      <p className="my-6 leading-relaxed">
        Common household toxins to be aware of include:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Volatile Organic Compounds (VOCs)</strong>: Found in paints, varnishes, cleaning products, 
            and many fragranced items, VOCs can cause eye, nose, and throat irritation, headaches, and may contribute to long-term health issues.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Phthalates</strong>: These chemicals make plastics flexible and are found in vinyl flooring, 
            shower curtains, and many scented products. They can disrupt hormones and have been linked to reproductive issues.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Per- and Polyfluoroalkyl Substances (PFAS)</strong>: Often called "forever chemicals," 
            these are found in stain-resistant and waterproof items, non-stick cookware, and some food packaging. They persist in the 
            environment and in our bodies and have been associated with a range of health concerns.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Flame Retardants</strong>: Common in furniture, electronics, and some children's products, 
            these chemicals have been linked to thyroid disruption, impaired neurodevelopment, and cancer concerns.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Pesticide Residues</strong>: These can enter our homes through conventional produce, 
            pest control methods, and tracked-in dirt, potentially affecting the nervous system and hormonal balance.
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        The good news is that our bodies are remarkably resilient, and we can significantly reduce our exposure through 
        mindful choices. Let's explore practical strategies for creating a healthier home environment, room by room.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "The home should be the treasure chest of living."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Le Corbusier</cite>
      </blockquote>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Kitchen Detox</h2>
      
      <p className="my-6 leading-relaxed">
        The kitchen is often the heart of the home, but it can also harbor a surprising number of potential toxins. 
        Here's how to create a healthier cooking and eating space:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">1. Cookware and Food Storage</h3>
      
      <p className="my-6 leading-relaxed">
        Many conventional non-stick cookware items contain PFAS chemicals that can leach into food, especially when pans 
        are overheated or scratched. Consider these healthier alternatives:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Cast iron</strong>: Naturally non-stick when properly seasoned, these pans last for generations 
            and even add a bit of iron to your food
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Stainless steel</strong>: Durable and versatile for most cooking needs
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Ceramic-coated cookware</strong>: A better non-stick option without PFAS (though the coating 
            will eventually wear off)
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Glass bakeware</strong>: Inert and excellent for oven use
          </div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        For food storage, opt for glass containers rather than plastic, which can leach chemicals into food, 
        especially when heated. Stainless steel containers are also excellent, particularly for lunches and outdoor meals.
      </p>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1621318551436-68573392fd5c"
        alt="Glass food storage containers and stainless steel cookware in a kitchen"
        caption="Glass and stainless steel containers offer safer food storage alternatives to plastic"
        credit="Photo by Ella Olsson on Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">2. Water Quality</h3>
      
      <p className="my-6 leading-relaxed">
        Tap water can contain various contaminants depending on your location, including lead, chlorine 
        byproducts, and in some areas, PFAS. Consider these options for cleaner drinking water:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Install a high-quality water filter certified to remove contaminants specific to your area's water issues</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>If you rent or can't install a permanent system, use a pitcher filter that removes lead and other heavy metals</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>For homes with older plumbing, run the tap for 30-60 seconds before collecting drinking water, especially in the morning</div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">3. Cleaning Products</h3>
      
      <p className="my-6 leading-relaxed">
        Conventional cleaning products often contain harsh chemicals that can irritate airways and leave problematic 
        residues on food preparation surfaces. Simple swaps include:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>White vinegar and water (1:1 ratio) for all-purpose cleaning</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Baking soda as a gentle abrasive for sinks and stovetops</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Castile soap for hand washing and general cleaning</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>If you prefer ready-made products, look for those certified by Green Seal or the EPA's Safer Choice program</div>
        </li>
      </ul>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Bathroom Improvements</h2>
      
      <p className="my-6 leading-relaxed">
        Our personal care routines can involve dozens of products containing hundreds of ingredients, 
        many of which lack substantial safety testing. The bathroom is also prone to moisture issues that can lead to mold. 
        Here's how to create a healthier space:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">1. Personal Care Products</h3>
      
      <p className="my-6 leading-relaxed">
        Many conventional personal care products contain potential endocrine disruptors, carcinogens, 
        and other concerning ingredients. Consider these strategies:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Use the Environmental Working Group's Skin Deep database or the Think Dirty app to research 
            product safety while shopping
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Look for products with simpler ingredient lists—fewer ingredients generally means fewer potential reactions
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Be particularly cautious with anything strongly fragranced, as synthetic fragrances can contain dozens 
            of undisclosed chemicals
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            For DIY options, simple ingredients like coconut oil (moisturizer), apple cider vinegar (hair rinse), 
            and aloe vera (skin soother) can be effective alternatives
          </div>
        </li>
      </ul>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1564594218151-a67498fb2922"
        alt="Natural personal care products with plants and essential oils"
        caption="Simple, natural ingredients can replace many conventional personal care products"
        credit="Photo by Content Pixie on Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">2. Shower and Bath</h3>
      
      <p className="my-6 leading-relaxed">
        Hot showers can actually increase our exposure to certain chemicals:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Install a shower filter to reduce chlorine exposure, which can be inhaled as steam and absorbed through skin
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Replace vinyl shower curtains (which can off-gas phthalates) with cotton, linen, hemp, or PEVA alternatives
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Ensure good ventilation to prevent mold growth, using exhaust fans or opening windows during and after showers
          </div>
        </li>
      </ul>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Living Areas and Bedrooms</h2>
      
      <p className="my-6 leading-relaxed">
        We spend most of our time in living areas and bedrooms, making the air quality and materials in 
        these spaces particularly important for our health.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">1. Indoor Air Quality</h3>
      
      <p className="my-6 leading-relaxed">
        Indoor air is typically more polluted than outdoor air due to limited ventilation and the accumulation 
        of chemicals from products and materials. To improve your air quality:
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Ventilate regularly</strong>: Open windows when weather permits to allow fresh air circulation
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Use air-purifying plants</strong>: Spider plants, peace lilies, and snake plants can help 
            filter certain pollutants
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">Consider an air purifier</strong>: Look for models with HEPA filters to capture particulate 
            matter and activated carbon to absorb VOCs
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Remove shoes at the door</strong>: This prevents tracking in pesticides, lead dust, and other outdoor pollutants
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">5</span>
          <div>
            <strong className="font-medium">Vacuum with a HEPA filter</strong>: This helps capture dust, allergens, and small particles rather than 
            recirculating them
          </div>
        </li>
      </ol>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1632380211596-b96123618ca8"
        alt="Air purifier in living room with houseplants"
        caption="Combining air purifiers with plants creates a multi-layered approach to cleaner indoor air"
        credit="Photo by Giorgio Trovato on Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">2. Furniture and Textiles</h3>
      
      <p className="my-6 leading-relaxed">
        Conventional furniture often contains formaldehyde in adhesives, flame retardants in upholstery, 
        and VOCs in finishes. For healthier options:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Look for solid wood furniture with low-VOC or water-based finishes rather than pressed wood products, 
            which typically contain formaldehyde
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Choose furniture certified by GREENGUARD, which tests for chemical emissions
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            For textiles, opt for natural fibers like organic cotton, wool, or linen, which contain fewer chemicals 
            than synthetic materials
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Select mattresses made from natural materials like organic cotton, wool, and natural latex rather than 
            conventional polyurethane foam, which can off-gas VOCs
          </div>
        </li>
      </ul>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">3. Electronics and EMFs</h3>
      
      <p className="my-6 leading-relaxed">
        While research is still emerging on the health effects of electromagnetic fields (EMFs) from electronics, 
        some people report sensitivity. As a precautionary approach:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Keep electronics, especially Wi-Fi routers, out of bedrooms if possible</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Put devices in airplane mode or power them down at night</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Maintain some distance between electronics and your body during extended use</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>Consider establishing tech-free zones or times in your home to reduce overall exposure</div>
        </li>
      </ul>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Laundry Room Detox</h2>
      
      <p className="my-6 leading-relaxed">
        Conventional laundry products can be particularly problematic, as they leave residues on clothing 
        that remain in contact with skin 24/7 and can affect indoor air quality.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Healthier Laundry Practices</h3>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Detergent</strong>: Use fragrance-free, plant-based detergents or make your own 
            with simple ingredients like castile soap, washing soda, and baking soda
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Fabric softeners</strong>: Replace with white vinegar in the rinse cycle, which softens 
            clothes naturally without leaving chemical residues
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Dryer sheets</strong>: Swap for wool dryer balls, which reduce static and drying time without 
            synthetic fragrances
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Stain treatment</strong>: Try sunlight (a natural bleaching agent), hydrogen peroxide, 
            or oxygen bleach instead of chlorine bleach or chemical stain removers
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            <strong className="font-medium">Air drying</strong>: When possible, line-dry clothing to save energy and avoid high-heat 
            exposure that can activate chemical residues
          </div>
        </li>
      </ul>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Practical Approach to Non-Toxic Living</h2>
      
      <p className="my-6 leading-relaxed">
        Transitioning to a non-toxic home shouldn't be overwhelming or cause undue stress (which itself is 
        harmful to health!). Here's a balanced approach:
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Prioritize Changes</h3>
      
      <p className="my-6 leading-relaxed">
        Focus first on the changes that will have the biggest impact:
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <strong className="font-medium">Items with direct body contact</strong>: Mattresses, bedding, clothing, and personal care products
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <strong className="font-medium">Food-related items</strong>: Cookware, water quality, and food storage
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <strong className="font-medium">High-use spaces</strong>: Bedroom air quality (where you spend 8+ hours daily) and 
            cleaning products for frequently cleaned surfaces
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <strong className="font-medium">Special considerations</strong>: Higher standards for spaces where children, pregnant women, 
            or vulnerable individuals spend time
          </div>
        </li>
      </ol>
      
      <ContentImage 
        src="https://images.unsplash.com/photo-1556911073-38141963c9e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt="Person making homemade cleaning solution with natural ingredients"
        caption="Simple ingredients like vinegar, baking soda, and lemon can replace many conventional cleaning products"
        credit="Photo by Daiga Ellaby on Unsplash"
      />
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Make Gradual Swaps</h3>
      
      <p className="my-6 leading-relaxed">
        A sustainable approach is to replace items as they're used up rather than throwing everything out at once:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>When your shampoo runs out, research and purchase a healthier option</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>As cleaning products are depleted, replace with non-toxic alternatives or DIY solutions</div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>When it's time for new furniture, invest in pieces made with healthier materials</div>
        </li>
      </ul>
      
      <p className="my-6 leading-relaxed">
        This approach is not only more budget-friendly but also reduces waste, which is better for 
        environmental wellness—another important dimension of a truly non-toxic lifestyle.
      </p>
      
      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Budget-Friendly Options</h3>
      
      <p className="my-6 leading-relaxed">
        Creating a healthier home doesn't have to be expensive:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            DIY cleaning products made from pantry staples cost a fraction of commercial products
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Second-hand solid wood furniture (which has likely already off-gassed) is often more affordable 
            than new pressed-wood items
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Simple habits like ventilation, shoe removal, and dust reduction cost nothing but can significantly 
            improve indoor air quality
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <div>
            Many companies now offer more affordable non-toxic options as consumer demand has increased
          </div>
        </li>
      </ul>
      
      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Conclusion: Balance Over Perfection</h2>
      
      <p className="my-6 leading-relaxed">
        Creating a truly non-toxic home is more of a journey than a destination. Modern life makes 
        it virtually impossible to eliminate all synthetic chemicals from our environments, and striving for 
        absolute purity can create its own form of stress.
      </p>
      
      <p className="my-6 leading-relaxed">
        Instead, focus on making informed, intentional choices that meaningfully reduce your exposure 
        to potentially harmful substances. Even small changes add up, and each healthier choice you make 
        supports both your wellbeing and sends a market signal encouraging more companies to develop safer products.
      </p>
      
      <p className="my-6 leading-relaxed">
        Remember that environmental wellness extends beyond your home's walls—your choices also 
        impact the broader environment. By selecting products with fewer harmful chemicals, you're not only 
        creating a healthier space for yourself but also supporting cleaner air, water, and soil for everyone.
      </p>
      
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Your home should tell the story of who you are, and be a collection of what you love."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Nate Berkus</cite>
      </blockquote>
      
      <p className="my-6 leading-relaxed">
        Let your home tell the story of a life well-lived, where wellness is prioritized without 
        sacrificing joy, beauty, or ease. A thoughtfully created non-toxic home not only protects your 
        physical health but provides the peace of mind that comes from knowing you've created a truly nourishing sanctuary.
      </p>
    </ArticleTemplate>
  );
} 