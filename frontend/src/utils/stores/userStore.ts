import { create } from 'zustand';
import { UserProfile } from '../models';

// Mock data for frontend-only implementation
const mockUserProfile: UserProfile = {
  uid: 'user123',
  displayName: 'Demo User',
  email: 'demo@example.com',
  photoURL: 'https://via.placeholder.com/150',
  savedArticles: ['article1', 'article2'],
  interests: ['fitness', 'nutrition'],
  createdAt: new Date(),
  lastLogin: new Date()
};

interface UserState {
  profile: UserProfile | null;
  isLoading: boolean;
  error: Error | null;
  
  // Actions
  fetchUserProfile: (userId: string) => Promise<UserProfile | null>;
  createUserProfile: (userId: string, profileData: Partial<UserProfile>) => Promise<void>;
  updateUserProfile: (userId: string, profileData: Partial<UserProfile>) => Promise<void>;
  saveArticle: (userId: string, articleId: string) => Promise<void>;
  unsaveArticle: (userId: string, articleId: string) => Promise<void>;
  updateUserInterests: (userId: string, interests: string[]) => Promise<void>;
  subscribeToUserProfile: (userId: string) => () => void;
}

const useUserStore = create<UserState>((set, get) => ({
  profile: null,
  isLoading: false,
  error: null,

  // Fetch user profile - mock implementation
  fetchUserProfile: async (userId: string) => {
    if (!userId) {
      set({ profile: null, isLoading: false });
      return null;
    }
    
    set({ isLoading: true, error: null });
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Return mock user profile
      set({ profile: mockUserProfile, isLoading: false });
      return mockUserProfile;
    } catch (error) {
      console.error(`Error fetching user profile for ${userId}:`, error);
      set({ error: error as Error, isLoading: false });
      return null;
    }
  },

  // Create new user profile - mock implementation
  createUserProfile: async (userId: string, profileData: Partial<UserProfile>) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const createdProfile = {
        ...mockUserProfile,
        ...profileData,
        uid: userId,
      };
      
      set({ profile: createdProfile as UserProfile, isLoading: false });
    } catch (error) {
      console.error(`Error creating user profile for ${userId}:`, error);
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  // Update user profile - mock implementation
  updateUserProfile: async (userId: string, profileData: Partial<UserProfile>) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Update local state
      const currentProfile = get().profile;
      if (currentProfile && currentProfile.uid === userId) {
        set({ 
          profile: {
            ...currentProfile,
            ...profileData,
            lastLogin: new Date(),
          },
          isLoading: false
        });
      }
    } catch (error) {
      console.error(`Error updating user profile for ${userId}:`, error);
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  // Save an article - mock implementation
  saveArticle: async (userId: string, articleId: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Update local state
      const currentProfile = get().profile;
      if (currentProfile && currentProfile.uid === userId) {
        const savedArticles = [...(currentProfile.savedArticles || []), articleId];
        set({ 
          profile: {
            ...currentProfile,
            savedArticles
          },
          isLoading: false
        });
      }
    } catch (error) {
      console.error(`Error saving article ${articleId} for user ${userId}:`, error);
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  // Unsave an article - mock implementation
  unsaveArticle: async (userId: string, articleId: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Update local state
      const currentProfile = get().profile;
      if (currentProfile && currentProfile.uid === userId) {
        const savedArticles = (currentProfile.savedArticles || []).filter(id => id !== articleId);
        set({ 
          profile: {
            ...currentProfile,
            savedArticles
          },
          isLoading: false
        });
      }
    } catch (error) {
      console.error(`Error unsaving article ${articleId} for user ${userId}:`, error);
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  // Update user interests - mock implementation
  updateUserInterests: async (userId: string, interests: string[]) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Update local state
      const currentProfile = get().profile;
      if (currentProfile && currentProfile.uid === userId) {
        set({ 
          profile: {
            ...currentProfile,
            interests
          },
          isLoading: false
        });
      }
    } catch (error) {
      console.error(`Error updating interests for user ${userId}:`, error);
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  // Subscribe to user profile - mock implementation
  subscribeToUserProfile: (userId: string) => {
    if (!userId) return () => {};
    
    // In a frontend-only project, we simply fetch once rather than subscribing
    get().fetchUserProfile(userId);
    
    // Return dummy unsubscribe function
    return () => {};
  },
}));

export default useUserStore;
