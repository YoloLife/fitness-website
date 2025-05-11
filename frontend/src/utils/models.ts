// Article, category and user data models for Firestore

// Basic user profile
export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  bio?: string;
  interests?: string[];
  savedArticles?: string[];
  createdAt: Date | string;
  lastLogin: Date | string;
}

// Category data model
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  order: number;
}

// Author data model
export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  email?: string;
  socialLinks?: {
    website?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

// Article data model
export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  categoryId: string;
  categorySlug: string;
  authorId: string;
  coverImage: string;
  readTime: string;
  publishedAt: Date | string;
  updatedAt?: Date | string;
  tags?: string[];
  featured?: boolean;
  likes?: number;
  views?: number;
}

// Comment data model
export interface Comment {
  id: string;
  articleId: string;
  userId: string;
  userDisplayName: string;
  userPhotoURL?: string;
  content: string;
  createdAt: Date | string;
  updatedAt?: Date | string;
  likes?: number;
}

// Newsletter subscriber data model
export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed: boolean;
  subscribedAt: Date | string;
  unsubscribedAt?: Date | string;
}
