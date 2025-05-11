import { create } from 'zustand';
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  arrayUnion, 
  arrayRemove, 
  serverTimestamp, 
  onSnapshot
} from 'firebase/firestore';
import { db, usersRef, convertUser } from '../firestore';
import { UserProfile } from '../models';
import { firebaseApp, firebaseAuth } from 'app';

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

  // Fetch user profile
  fetchUserProfile: async (userId: string) => {
    if (!userId) {
      set({ profile: null, isLoading: false });
      return null;
    }
    
    set({ isLoading: true, error: null });
    try {
      const userRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userRef);
      
      if (!userDoc.exists()) {
        set({ profile: null, isLoading: false });
        return null;
      }
      
      const profile = convertUser(userDoc);
      set({ profile, isLoading: false });
      return profile;
    } catch (error) {
      console.error(`Error fetching user profile for ${userId}:`, error);
      set({ error: error as Error, isLoading: false });
      return null;
    }
  },

  // Create new user profile
  createUserProfile: async (userId: string, profileData: Partial<UserProfile>) => {
    set({ isLoading: true, error: null });
    try {
      const userRef = doc(db, 'users', userId);
      
      // Get current auth user details
      const user = firebaseAuth.currentUser;
      const displayName = user?.displayName || 'Anonymous User';
      const email = user?.email || '';
      const photoURL = user?.photoURL || undefined;
      
      const newProfile: Omit<UserProfile, 'uid'> = {
        displayName,
        email,
        photoURL,
        savedArticles: [],
        interests: [],
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        ...profileData
      };
      
      await setDoc(userRef, newProfile);
      
      const createdProfile = {
        uid: userId,
        ...newProfile,
        // Convert timestamps to dates
        createdAt: new Date(),
        lastLogin: new Date(),
      };
      
      set({ profile: createdProfile as UserProfile, isLoading: false });
    } catch (error) {
      console.error(`Error creating user profile for ${userId}:`, error);
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  // Update user profile
  updateUserProfile: async (userId: string, profileData: Partial<UserProfile>) => {
    set({ isLoading: true, error: null });
    try {
      const userRef = doc(db, 'users', userId);
      
      // Remove uid from the data being updated
      const { uid, ...dataToUpdate } = profileData;
      
      // Add lastLogin timestamp
      const updates = {
        ...dataToUpdate,
        lastLogin: serverTimestamp(),
      };
      
      await updateDoc(userRef, updates);
      
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

  // Save an article
  saveArticle: async (userId: string, articleId: string) => {
    set({ isLoading: true, error: null });
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        savedArticles: arrayUnion(articleId)
      });
      
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

  // Unsave an article
  unsaveArticle: async (userId: string, articleId: string) => {
    set({ isLoading: true, error: null });
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        savedArticles: arrayRemove(articleId)
      });
      
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

  // Update user interests
  updateUserInterests: async (userId: string, interests: string[]) => {
    set({ isLoading: true, error: null });
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, { interests });
      
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

  // Subscribe to user profile for real-time updates
  subscribeToUserProfile: (userId: string) => {
    if (!userId) return () => {};
    
    const userRef = doc(db, 'users', userId);
    
    const unsubscribe = onSnapshot(userRef, (doc) => {
      if (doc.exists()) {
        const profile = convertUser(doc);
        set({ profile, isLoading: false });
      } else {
        set({ profile: null, isLoading: false });
      }
    }, (error) => {
      console.error(`Error in user profile subscription for ${userId}:`, error);
      set({ error: error as Error, isLoading: false });
    });
    
    return unsubscribe;
  },
}));

export default useUserStore;
