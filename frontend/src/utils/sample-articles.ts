import { ArticleProps } from "components/ArticleCard";

// Sample author data
const authors = [
  {
    name: "Emma Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Daniel Martinez",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Sarah Williams",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
  }
];

// Fitness Articles
export const fitnessArticles: ArticleProps[] = [
  {
    id: "fit-1",
    title: "The Science Behind High-Intensity Interval Training (HIIT)",
    description: "Discover why HIIT workouts are so effective for burning calories and improving cardiovascular health, plus get a 20-minute starter routine you can do anywhere.",
    author: authors[0],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-03-01T08:00:00Z",
    category: "fitness",
    readTime: "8 min",
    slug: "science-behind-hiit"
  },
  {
    id: "fit-2",
    title: "Strength Training for Beginners: Where to Start",
    description: "A comprehensive guide to beginning your strength training journey, including proper form fundamentals, a six-week starter program, and common mistakes to avoid.",
    author: authors[1],
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-02-15T10:30:00Z",
    category: "fitness",
    readTime: "10 min",
    slug: "strength-training-beginners"
  },
  {
    id: "fit-3",
    title: "The Importance of Mobility Work in Your Fitness Routine",
    description: "Learn why mobility training is crucial for long-term health and performance, and how incorporating just 10 minutes daily can reduce injury risk and improve your workout results.",
    author: authors[2],
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-01-22T14:45:00Z",
    category: "fitness",
    readTime: "7 min",
    slug: "importance-mobility-work"
  }
];

// Nutrition Articles
export const nutritionArticles: ArticleProps[] = [
  {
    id: "nut-1",
    title: "Balanced Macros: The Key to Sustainable Eating",
    description: "Understanding the right balance of proteins, carbs and fats for your body type and fitness goals, with practical meal planning advice and recipes.",
    author: authors[2],
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-03-05T11:00:00Z",
    category: "nutrition",
    readTime: "9 min",
    slug: "balanced-macros-sustainable-eating"
  },
  {
    id: "nut-2",
    title: "The Truth About Superfoods: Benefits and Myths",
    description: "A science-based analysis of popular superfoods, which ones are worth the hype, and how to incorporate them into your diet in practical, affordable ways.",
    author: authors[0],
    image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-02-18T13:20:00Z",
    category: "nutrition",
    readTime: "11 min",
    slug: "truth-about-superfoods"
  },
  {
    id: "nut-3",
    title: "Meal Prep 101: Save Time and Eat Healthier",
    description: "A beginner's guide to efficient meal prepping, including time-saving techniques, storage tips, and five make-ahead recipes that stay fresh all week.",
    author: authors[1],
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-01-30T09:45:00Z",
    category: "nutrition",
    readTime: "8 min",
    slug: "meal-prep-101"
  },
  {
    id: "nut-4",
    title: "Intuitive Eating: Breaking Free from Diet Culture",
    description: "How to develop a healthier relationship with food by learning to trust your body's hunger signals and moving away from restrictive dieting mentalities.",
    author: authors[3],
    image: "https://images.unsplash.com/photo-1531928351158-2f736078e0a1",
    date: "2024-12-12T15:30:00Z",
    category: "nutrition",
    readTime: "10 min",
    slug: "intuitive-eating"
  }
];

// Mental Health Articles
export const mentalHealthArticles: ArticleProps[] = [
  {
    id: "mh-1",
    title: "The Science of Stress: Understanding Your Body's Response",
    description: "A deeper look at how stress affects your body and mind, with evidence-based techniques to manage your stress response and build resilience.",
    author: authors[1],
    image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-03-08T10:15:00Z",
    category: "mental-health",
    readTime: "12 min",
    slug: "science-of-stress"
  },
  {
    id: "mh-2",
    title: "Mindfulness for Beginners: Simple Daily Practices",
    description: "Start your mindfulness journey with these accessible techniques that take just minutes a day but can transform how you experience stress and emotions.",
    author: authors[2],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-02-22T08:40:00Z",
    category: "mental-health",
    readTime: "9 min",
    slug: "mindfulness-beginners"
  },
  {
    id: "mh-3",
    title: "Digital Detox: Reclaiming Your Focus and Peace",
    description: "How constant connectivity affects your mental health and practical strategies for creating healthier boundaries with technology without going off-grid.",
    author: authors[0],
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    date: "2025-01-10T16:20:00Z",
    category: "mental-health",
    readTime: "7 min",
    slug: "digital-detox"
  },
  {
    id: "mh-4",
    title: "Building Emotional Resilience Through Difficult Times",
    description: "Strategies to develop the psychological strength needed to navigate life's challenges, bounce back from setbacks, and grow through adversity.",
    author: authors[3],
    image: "https://images.unsplash.com/photo-1557766039-413ea80eab43",
    date: "2024-12-18T12:00:00Z",
    category: "mental-health",
    readTime: "11 min",
    slug: "building-emotional-resilience"
  }
];

// Self-Care Articles
export const selfCareArticles: ArticleProps[] = [
  {
    id: "sc-1",
    title: "Creating a Personalized Self-Care Routine That Sticks",
    description: "How to design a realistic self-care practice tailored to your needs, personality, and schedule - one you'll actually maintain long-term.",
    author: authors[3],
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-03-12T09:30:00Z",
    category: "self-care",
    readTime: "8 min",
    slug: "personalized-self-care-routine"
  },
  {
    id: "sc-2",
    title: "The Science of Sleep: Optimizing Your Rest",
    description: "Research-backed strategies to improve your sleep quality, address common sleep problems, and create the ideal bedroom environment for restorative rest.",
    author: authors[1],
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "2025-02-25T14:15:00Z",
    category: "self-care",
    readTime: "10 min",
    slug: "science-of-sleep"
  },
  {
    id: "sc-3",
    title: "Skincare Essentials: Building a Routine for Your Skin Type",
    description: "Dermatologist-approved advice for creating an effective skincare regimen based on your unique skin needs, without unnecessary products or steps.",
    author: authors[0],
    image: "https://images.unsplash.com/photo-1586220742613-b731f66f7743",
    date: "2025-01-15T11:45:00Z",
    category: "self-care",
    readTime: "9 min",
    slug: "skincare-essentials"
  },
  {
    id: "sc-4",
    title: "The Art of Saying No: Setting Boundaries for Better Self-Care",
    description: "How to identify your limits, communicate them clearly, and prioritize your wellbeing without guilt - especially for people-pleasers and caregivers.",
    author: authors[2],
    image: "https://images.unsplash.com/photo-1566770050742-a8fbe51e69f4",
    date: "2024-12-20T13:10:00Z",
    category: "self-care",
    readTime: "7 min",
    slug: "art-of-saying-no"
  }
];

// Spiritual Wellness Articles
export const spiritualArticles: ArticleProps[] = [
  {
    id: "sp-1",
    title: "Meditation Fundamentals: Finding Your Practice",
    description: "An exploration of different meditation styles to help you discover which approach resonates with you, with guidance for building a sustainable daily practice.",
    author: authors[2],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-03-10T10:00:00Z",
    category: "spiritual",
    readTime: "10 min",
    slug: "meditation-fundamentals"
  },
  {
    id: "sp-2",
    title: "Connecting with Nature: A Path to Spiritual Wellbeing",
    description: "How spending time in natural environments can deepen your spiritual connection, reduce stress, and help you find meaning and perspective in everyday life.",
    author: authors[0],
    image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-02-28T13:45:00Z",
    category: "spiritual",
    readTime: "8 min",
    slug: "connecting-with-nature"
  },
  {
    id: "sp-3",
    title: "Finding Purpose: Aligning Your Actions with Your Values",
    description: "Practical exercises to help you identify your core values, uncover what gives your life meaning, and make decisions that align with your authentic self.",
    author: authors[3],
    image: "https://images.unsplash.com/photo-1484820301304-0b43512779dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-01-20T15:30:00Z",
    category: "spiritual",
    readTime: "11 min",
    slug: "finding-purpose"
  }
];

// Environmental Wellness Articles
export const environmentalArticles: ArticleProps[] = [
  {
    id: "env-1",
    title: "Creating a Non-Toxic Home: Simple Swaps for Healthier Living",
    description: "Room-by-room guide to identifying potential toxins in your home environment and affordable alternatives that are better for your health and the planet.",
    author: authors[0],
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-03-15T12:30:00Z",
    category: "environmental",
    readTime: "9 min",
    slug: "non-toxic-home"
  },
  {
    id: "env-2",
    title: "Sustainable Wellness: Eco-Friendly Self-Care Practices",
    description: "How to nurture your wellbeing while minimizing environmental impact, from plastic-free bathroom routines to mindful consumption of wellness products.",
    author: authors[2],
    image: "https://images.unsplash.com/photo-1564419320408-38e24e038739",
    date: "2025-02-10T09:15:00Z",
    category: "environmental",
    readTime: "7 min",
    slug: "sustainable-wellness"
  },
  {
    id: "env-3",
    title: "Biophilic Design: Bringing Nature Indoors for Wellbeing",
    description: "The science behind how natural elements in your home and workspace improve mental health, plus practical design ideas for spaces of any size and budget.",
    author: authors[1],
    image: "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-01-05T11:00:00Z",
    category: "environmental",
    readTime: "10 min",
    slug: "biophilic-design"
  }
];

// Health Conditions Articles
export const healthConditionsArticles: ArticleProps[] = [
  {
    id: "hc-1",
    title: "Living Well with Chronic Pain: A Holistic Approach",
    description: "Integrative strategies for managing chronic pain beyond medication, incorporating mindfulness, movement, nutrition, and sleep optimization for better quality of life.",
    author: authors[3],
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-03-18T14:00:00Z",
    category: "health-conditions",
    readTime: "12 min",
    slug: "living-with-chronic-pain"
  },
  {
    id: "hc-2",
    title: "Understanding Autoimmune Conditions: Latest Research and Lifestyle Support",
    description: "Current scientific findings on autoimmune disorders, with evidence-based lifestyle modifications that can complement medical treatment and reduce flare-ups.",
    author: authors[1],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-02-05T10:45:00Z",
    category: "health-conditions",
    readTime: "14 min",
    slug: "understanding-autoimmune-conditions"
  },
  {
    id: "hc-3",
    title: "Digestive Health: Building a Gut-Friendly Lifestyle",
    description: "The latest on the gut microbiome's role in overall health, with practical nutrition and lifestyle approaches to support digestive wellness and comfort.",
    author: authors[0],
    image: "https://images.unsplash.com/photo-1589534954619-ca628b1d54f9",
    date: "2025-01-12T09:30:00Z",
    category: "health-conditions",
    readTime: "9 min",
    slug: "digestive-health"
  }
];

// Lifestyle Articles
export const lifestyleArticles: ArticleProps[] = [
  {
    id: "ls-1",
    title: "Digital Minimalism: Simplifying Your Tech Life",
    description: "How to intentionally use technology in ways that support your goals and values, with step-by-step guidelines for digital decluttering and creating healthier habits.",
    author: authors[2],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-03-20T15:15:00Z",
    category: "lifestyle",
    readTime: "8 min",
    slug: "digital-minimalism"
  },
  {
    id: "ls-2",
    title: "Balancing Work and Wellness: Preventing Burnout",
    description: "Recognizing the signs of burnout before it takes hold, with actionable strategies to maintain boundaries and protect your wellbeing while meeting professional goals.",
    author: authors[1],
    image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    date: "2025-02-12T11:20:00Z",
    category: "lifestyle",
    readTime: "10 min",
    slug: "preventing-burnout"
  },
  {
    id: "ls-3",
    title: "Creating Morning Rituals for Productivity and Peace",
    description: "How the first hour of your day sets the tone for everything that follows, with customizable morning ritual ideas based on personality type and schedule constraints.",
    author: authors[3],
    image: "https://images.unsplash.com/photo-1559595500-e15296bdbb48?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    date: "2025-01-08T08:00:00Z",
    category: "lifestyle",
    readTime: "7 min",
    slug: "morning-rituals"
  }
];

// Helper functions
export const getCategoryArticles = (category: string): ArticleProps[] => {
  switch (category) {
    case "fitness":
      return fitnessArticles;
    case "nutrition":
      return nutritionArticles;
    case "mental-health":
      return mentalHealthArticles;
    case "self-care":
      return selfCareArticles;
    case "spiritual":
      return spiritualArticles;
    case "environmental":
      return environmentalArticles;
    case "health-conditions":
      return healthConditionsArticles;
    case "lifestyle":
      return lifestyleArticles;
    default:
      return [];
  }
};

export const getCategoryTitle = (category: string): string => {
  switch (category) {
    case "fitness":
      return "Fitness & Exercise";
    case "nutrition":
      return "Nutrition & Diet";
    case "mental-health":
      return "Mental Health";
    case "self-care":
      return "Self-Care";
    case "spiritual":
      return "Spiritual Wellness";
    case "environmental":
      return "Environmental Wellness";
    case "health-conditions":
      return "Health Conditions";
    case "lifestyle":
      return "Lifestyle Tips";
    default:
      return "Articles";
  }
};

export const filterArticles = (articles: ArticleProps[], filter: string): ArticleProps[] => {
  const articlesCopy = [...articles];
  
  switch (filter) {
    case "latest":
      return articlesCopy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    case "oldest":
      return articlesCopy.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    case "popular":
      // This would normally be based on view counts or some other metric
      // For this example, we'll just shuffle the array
      return articlesCopy.sort(() => Math.random() - 0.5);
    default:
      return articlesCopy;
  }
};
