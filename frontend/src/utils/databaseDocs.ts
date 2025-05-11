/**
 * YOLO Life Firestore Database Structure
 *
 * This file documents the database structure for the YOLO Life wellness application.
 */

import { Article, Author, Category, Comment, NewsletterSubscriber, UserProfile } from './models';
import { db, articlesRef, categoriesRef, authorsRef, usersRef, commentsRef, subscribersRef } from './firestore';
import { getDocs } from 'firebase/firestore';

/**
 * Database Structure:
 * 
 * 1. articles - Stores article content
 *    - id: string - Unique identifier
 *    - title: string - Article title
 *    - slug: string - URL-friendly identifier
 *    - description: string - Brief summary
 *    - content: string - Full article content (HTML/Markdown)
 *    - categoryId: string - Reference to category document
 *    - categorySlug: string - URL-friendly category identifier
 *    - authorId: string - Reference to author document
 *    - coverImage: string - URL to featured image
 *    - readTime: string - Estimated reading time
 *    - publishedAt: timestamp - Publication date
 *    - updatedAt: timestamp - Last update date
 *    - tags: string[] - Array of tags for filtering
 *    - featured: boolean - Whether article is featured
 *    - likes: number - Count of user likes
 *    - views: number - Count of page views
 * 
 * 2. categories - Stores wellness categories
 *    - id: string - Unique identifier
 *    - name: string - Display name
 *    - slug: string - URL-friendly identifier
 *    - description: string - Brief description
 *    - imageUrl: string - Category image URL
 *    - order: number - Display order
 * 
 * 3. authors - Stores author information
 *    - id: string - Unique identifier
 *    - name: string - Author's name
 *    - avatar: string - Profile picture URL
 *    - bio: string - Short biography
 *    - email: string - Contact email
 *    - socialLinks: object - Social media profiles
 *      - website: string
 *      - twitter: string
 *      - instagram: string
 *      - linkedin: string
 * 
 * 4. users - Stores user profiles
 *    - uid: string - Firebase Auth user ID
 *    - displayName: string - User's name
 *    - email: string - User's email
 *    - photoURL: string - Profile picture URL
 *    - bio: string - User biography
 *    - interests: string[] - Wellness interests
 *    - savedArticles: string[] - Bookmarked articles
 *    - createdAt: timestamp - Account creation date
 *    - lastLogin: timestamp - Last login date
 * 
 * 5. comments - Stores article comments
 *    - id: string - Unique identifier
 *    - articleId: string - Related article ID
 *    - userId: string - User ID who created comment
 *    - userDisplayName: string - User's display name
 *    - userPhotoURL: string - User's profile picture URL
 *    - content: string - Comment text
 *    - createdAt: timestamp - Creation date
 *    - updatedAt: timestamp - Last edit date
 *    - likes: number - Number of likes
 * 
 * 6. newsletter_subscribers - Stores newsletter subscribers
 *    - id: string - Unique identifier
 *    - email: string - Subscriber's email
 *    - subscribed: boolean - Subscription status
 *    - subscribedAt: timestamp - Signup date
 *    - unsubscribedAt: timestamp - Date unsubscribed (if applicable)
 *
 * 7. admins - Stores admin users for security rules
 *    - Document ID: Firebase Auth user ID of admin
 *    - role: string - Admin role (e.g., "editor", "super_admin")
 * 
 * Relationships:
 * - Articles reference categories via categoryId
 * - Articles reference authors via authorId
 * - Comments reference articles via articleId
 * - Comments reference users via userId
 * - Users reference articles via savedArticles array
 */

/**
 * Function to test database connection and verify basic structure
 */
export const testFirestoreConnection = async (): Promise<{
  success: boolean;
  collections: Record<string, number>;
  message: string;
}> => {
  try {
    // Test connection by querying various collections
    const collectionsToTest = [
      { ref: articlesRef, name: 'articles' },
      { ref: categoriesRef, name: 'categories' },
      { ref: authorsRef, name: 'authors' },
      { ref: usersRef, name: 'users' },
      { ref: commentsRef, name: 'comments' },
      { ref: subscribersRef, name: 'newsletter_subscribers' }
    ];
    
    // Get document counts for each collection
    const results = await Promise.all(
      collectionsToTest.map(async ({ ref, name }) => {
        const snapshot = await getDocs(ref);
        return { name, count: snapshot.size };
      })
    );
    
    // Format results
    const collections = results.reduce<Record<string, number>>((acc, { name, count }) => {
      acc[name] = count;
      return acc;
    }, {});
    
    return {
      success: true,
      collections,
      message: 'Firestore connection successful!'
    };
  } catch (error) {
    console.error('Error testing Firestore connection:', error);
    return {
      success: false,
      collections: {},
      message: `Firestore connection failed: ${error instanceof Error ? error.message : String(error)}`
    };
  }
};

/**
 * Sample data access patterns used in the application
 */
export const firebaseDataAccessPatterns = {
  // Home page data loading
  homePage: [
    'Load featured articles',
    'Load all wellness categories',
    'Load testimonials' 
  ],
  
  // Category page data loading
  categoryPage: [
    'Load category details by slug',
    'Load articles filtered by category',
    'Sort articles by date (newest first)'
  ],
  
  // Article detail page data loading
  articleDetailPage: [
    'Load article by slug',
    'Load author details',
    'Load related articles from same category',
    'Load comments for article',
    'Check if current user has saved this article'
  ],
  
  // User account management
  userAccount: [
    'Create new user profile after registration',
    'Update user profile information',
    'Save/unsave articles',
    'View saved articles',
    'Update notification preferences'
  ],
  
  // Content interaction
  contentInteraction: [
    'Add comment to article',
    'Like/unlike article or comment',
    'Subscribe to newsletter',
    'Share article via social media'
  ]
};
