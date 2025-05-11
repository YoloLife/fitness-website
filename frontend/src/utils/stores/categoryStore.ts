import { create } from 'zustand';
import { Category } from '../models';

// Mock categories data
const mockCategories: Category[] = [
  {
    id: "1",
    name: 'Fitness & Exercise',
    slug: 'fitness',
    description: 'Tips, routines, and guides for staying active and maintaining physical health.',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    order: 1
  },
  {
    id: "2",
    name: 'Nutrition & Diet',
    slug: 'nutrition',
    description: 'Healthy eating habits, recipes, and dietary advice for optimal wellness.',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    order: 2
  },
  {
    id: "3",
    name: 'Mental Health',
    slug: 'mental-health',
    description: 'Stress management, mindfulness, and techniques for emotional well-being.',
    imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    order: 3
  },
  {
    id: "4",
    name: 'Self-Care',
    slug: 'self-care',
    description: 'Practices for relaxation, skincare, and personal growth for a balanced life.',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    order: 4
  },
  {
    id: "5",
    name: 'Spiritual Wellness',
    slug: 'spiritual',
    description: 'Meditation, yoga, and practices for finding purpose and inner peace.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    order: 5
  }
];

interface CategoryState {
  categories: Category[];
  currentCategory: Category | null;
  isLoading: boolean;
  error: Error | null;
  
  // Actions
  fetchCategories: () => Promise<void>;
  fetchCategoryBySlug: (slug: string) => Promise<Category | null>;
  addCategory: (category: Omit<Category, 'id'>) => Promise<string>;
  updateCategory: (id: string, categoryData: Partial<Category>) => Promise<void>;
  deleteCategory: (id: string) => Promise<void>;
  subscribeToCategories: () => () => void;
}

const useCategoryStore = create<CategoryState>((set, get) => ({
  categories: [],
  currentCategory: null,
  isLoading: false,
  error: null,

  // Fetch all categories - returns mock data
  fetchCategories: async () => {
    set({ isLoading: true, error: null });
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      set({ categories: mockCategories, isLoading: false });
    } catch (error) {
      console.error('Error fetching categories:', error);
      set({ error: error as Error, isLoading: false });
    }
  },

  // Fetch category by slug - returns mock data
  fetchCategoryBySlug: async (slug: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      const category = mockCategories.find(cat => cat.slug === slug) || null;
      
      set({ currentCategory: category, isLoading: false });
      return category;
    } catch (error) {
      console.error(`Error fetching category with slug ${slug}:`, error);
      set({ error: error as Error, isLoading: false });
      return null;
    }
  },

  // Add new category - mock implementation
  addCategory: async (category) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const newId = `mock-${Date.now()}`;
      // We don't actually add to the mock data to keep it statically defined
      
      set({ isLoading: false });
      return newId;
    } catch (error) {
      console.error('Error adding category:', error);
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  // Update category - mock implementation
  updateCategory: async (id, categoryData) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // We don't actually update the mock data to keep it statically defined
      set({ isLoading: false });
    } catch (error) {
      console.error(`Error updating category ${id}:`, error);
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  // Delete category - mock implementation
  deleteCategory: async (id) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // We don't actually delete from the mock data to keep it statically defined
      set({ isLoading: false });
    } catch (error) {
      console.error(`Error deleting category ${id}:`, error);
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  // Subscribe to categories - mock implementation just returns a no-op unsubscribe function
  subscribeToCategories: () => {
    // Immediately load mock data
    setTimeout(() => {
      set({ categories: mockCategories, isLoading: false });
    }, 0);
    
    // Return a no-op unsubscribe function
    return () => {};
  },
}));

export default useCategoryStore;
