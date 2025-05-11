import { create } from 'zustand';
import { Article } from '../models';

// Mock articles data
const mockArticles: Article[] = [
  {
    id: '1',
    title: 'The Science Behind HIIT Workouts',
    slug: 'science-behind-hiit-workouts',
    description: 'Discover why High-Intensity Interval Training is so effective for fitness and weight loss.',
    content: '<p>This is a sample article about HIIT workouts.</p>',
    categoryId: '1',
    categorySlug: 'fitness',
    authorId: '1',
    coverImage: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    readTime: '8',
    publishedAt: new Date('2023-09-15'),
    tags: ['fitness', 'hiit', 'exercise'],
    featured: true,
    likes: 120,
    views: 1500
  },
  {
    id: '2',
    title: 'Balanced Macros for Optimal Health',
    slug: 'balanced-macros-optimal-health',
    description: 'Learn how to balance proteins, carbs and fats for your specific health goals.',
    content: '<p>This is a sample article about balanced macros.</p>',
    categoryId: '2',
    categorySlug: 'nutrition',
    authorId: '2',
    coverImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    readTime: '12',
    publishedAt: new Date('2023-09-10'),
    tags: ['nutrition', 'diet', 'macros'],
    featured: true,
    likes: 95,
    views: 1200
  },
  {
    id: '3',
    title: 'The Science of Stress and How to Manage It',
    slug: 'science-of-stress-management',
    description: 'Understanding the physiological effects of stress and evidence-based strategies to reduce it.',
    content: '<p>This is a sample article about stress management.</p>',
    categoryId: '3',
    categorySlug: 'mental-health',
    authorId: '3',
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    readTime: '10',
    publishedAt: new Date('2023-09-05'),
    tags: ['mental-health', 'stress', 'mindfulness'],
    featured: true,
    likes: 150,
    views: 1800
  },
  {
    id: '4',
    title: 'Creating an Effective Self-Care Routine',
    slug: 'effective-self-care-routine',
    description: 'Simple steps to design a self-care routine that fits your lifestyle and supports wellbeing.',
    content: '<p>This is a sample article about self-care routines.</p>',
    categoryId: '4',
    categorySlug: 'self-care',
    authorId: '4',
    coverImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    readTime: '7',
    publishedAt: new Date('2023-08-28'),
    tags: ['self-care', 'wellness', 'routine'],
    featured: true,
    likes: 85,
    views: 950
  },
  {
    id: '5',
    title: 'Meditation Practices for Beginners',
    slug: 'meditation-practices-beginners',
    description: 'Start your meditation journey with these simple, effective techniques for mental clarity.',
    content: '<p>This is a sample article about meditation practices.</p>',
    categoryId: '5',
    categorySlug: 'spiritual',
    authorId: '1',
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    readTime: '9',
    publishedAt: new Date('2023-08-20'),
    tags: ['spiritual', 'meditation', 'mindfulness'],
    featured: true,
    likes: 110,
    views: 1300
  }
];

interface ArticleState {
  articles: Article[];
  featuredArticles: Article[];
  articlesByCategory: Record<string, Article[]>;
  currentArticle: Article | null;
  isLoading: boolean;
  error: Error | null;
  
  // Actions
  fetchArticles: () => Promise<void>;
  fetchFeaturedArticles: () => Promise<void>;
  fetchArticlesByCategory: (categorySlug: string) => Promise<void>;
  fetchArticleBySlug: (slug: string) => Promise<Article | null>;
  addArticle: (article: Omit<Article, 'id'>) => Promise<string>;
  updateArticle: (id: string, articleData: Partial<Article>) => Promise<void>;
  deleteArticle: (id: string) => Promise<void>;
  subscribeToArticles: () => () => void;
}

const useArticleStore = create<ArticleState>((set, get) => ({
  articles: [],
  featuredArticles: [],
  articlesByCategory: {},
  currentArticle: null,
  isLoading: false,
  error: null,

  // Fetch all articles - mock implementation
  fetchArticles: async () => {
    set({ isLoading: true, error: null });
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      set({ articles: mockArticles, isLoading: false });
    } catch (error) {
      console.error('Error fetching articles:', error);
      set({ error: error as Error, isLoading: false });
    }
  },

  // Fetch featured articles - mock implementation
  fetchFeaturedArticles: async () => {
    set({ isLoading: true, error: null });
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      const featured = mockArticles.filter(article => article.featured);
      set({ featuredArticles: featured, isLoading: false });
    } catch (error) {
      console.error('Error fetching featured articles:', error);
      set({ error: error as Error, isLoading: false });
    }
  },

  // Fetch articles by category - mock implementation
  fetchArticlesByCategory: async (categorySlug: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      const articles = mockArticles.filter(article => article.categorySlug === categorySlug);
      set({ 
        articlesByCategory: { 
          ...get().articlesByCategory, 
          [categorySlug]: articles 
        }, 
        isLoading: false 
      });
    } catch (error) {
      console.error(`Error fetching articles for category ${categorySlug}:`, error);
      set({ error: error as Error, isLoading: false });
    }
  },

  // Fetch article by slug - mock implementation
  fetchArticleBySlug: async (slug: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      const article = mockArticles.find(article => article.slug === slug) || null;
      set({ currentArticle: article, isLoading: false });
      return article;
    } catch (error) {
      console.error(`Error fetching article with slug ${slug}:`, error);
      set({ error: error as Error, isLoading: false });
      return null;
    }
  },

  // Add new article - mock implementation
  addArticle: async (article) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      const newId = `mock-${Date.now()}`;
      // We don't actually add to the mock data to keep it statically defined
      set({ isLoading: false });
      return newId;
    } catch (error) {
      console.error('Error adding article:', error);
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  // Update article - mock implementation
  updateArticle: async (id, articleData) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      // We don't actually update the mock data to keep it statically defined
      set({ isLoading: false });
    } catch (error) {
      console.error(`Error updating article ${id}:`, error);
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  // Delete article - mock implementation
  deleteArticle: async (id) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      // We don't actually delete from the mock data to keep it statically defined
      set({ isLoading: false });
    } catch (error) {
      console.error(`Error deleting article ${id}:`, error);
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  // Subscribe to articles - mock implementation
  subscribeToArticles: () => {
    // Immediately load mock data
    setTimeout(() => {
      set({ articles: mockArticles, isLoading: false });
    }, 0);
    
    // Return a no-op unsubscribe function
    return () => {};
  },
}));

export default useArticleStore;
