// Mock implementation of firestore.ts

// Import models for type definitions only
import { Article, Category, Author, UserProfile, Comment, NewsletterSubscriber } from "./models";

// Mock Firestore database with in-memory collections
const mockCollections = {
  articles: new Map(),
  categories: new Map(),
  authors: new Map(),
  users: new Map(),
  comments: new Map(),
  newsletter_subscribers: new Map()
};

// Mock collection references that return empty objects with the needed methods
const createMockCollection = (collectionName: string) => ({
  id: collectionName,
  // Any other properties needed
});

// Define mock collection references
const db = {} as any;
const articlesRef = createMockCollection('articles');
const categoriesRef = createMockCollection('categories');
const authorsRef = createMockCollection('authors');
const usersRef = createMockCollection('users');
const commentsRef = createMockCollection('comments');
const subscribersRef = createMockCollection('newsletter_subscribers');

// Mock converter functions that just return the input with an id
const convertArticle = (doc: any): Article => {
  return { 
    ...doc.data(),
    id: doc.id 
  } as Article;
};

const convertCategory = (doc: any): Category => {
  return { 
    ...doc.data(),
    id: doc.id
  } as Category;
};

const convertAuthor = (doc: any): Author => {
  return { 
    ...doc.data(),
    id: doc.id
  } as Author;
};

const convertUser = (doc: any): UserProfile => {
  return { 
    ...doc.data(),
    uid: doc.id
  } as UserProfile;
};

const convertComment = (doc: any): Comment => {
  return { 
    ...doc.data(),
    id: doc.id
  } as Comment;
};

const convertSubscriber = (doc: any): NewsletterSubscriber => {
  return { 
    ...doc.data(),
    id: doc.id
  } as NewsletterSubscriber;
};

// Export mock Firestore database and collection references
export {
  db,
  articlesRef,
  categoriesRef,
  authorsRef,
  usersRef,
  commentsRef,
  subscribersRef,
  convertArticle,
  convertCategory,
  convertAuthor,
  convertUser,
  convertComment,
  convertSubscriber,
};
