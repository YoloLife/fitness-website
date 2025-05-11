// This file contains the Firestore security rules for the VitaBalance application
// These rules should be copied to the Firebase console

/*

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Common helper functions
    function isSignedIn() {
      return request.auth != null;
    }
    
    function isOwner(userId) {
      return isSignedIn() && request.auth.uid == userId;
    }
    
    function isAdmin() {
      return isSignedIn() && 
        exists(/databases/$(database)/documents/admins/$(request.auth.uid));
    }
    
    // Categories collection - public read, admin write
    match /categories/{categoryId} {
      allow read: if true;
      allow write: if isAdmin();
    }
    
    // Articles collection - public read, admin write
    match /articles/{articleId} {
      allow read: if true;
      allow write: if isAdmin();
    }
    
    // Authors collection - public read, admin write
    match /authors/{authorId} {
      allow read: if true;
      allow write: if isAdmin();
    }
    
    // Users collection - own profile read/write only
    match /users/{userId} {
      allow read: if isOwner(userId) || isAdmin();
      allow create: if isOwner(userId);
      allow update: if isOwner(userId) || isAdmin();
      allow delete: if isAdmin();
    }
    
    // Comments collection - public read, authenticated create, owner update/delete
    match /comments/{commentId} {
      allow read: if true;
      allow create: if isSignedIn() && request.resource.data.userId == request.auth.uid;
      allow update, delete: if isOwner(resource.data.userId) || isAdmin();
    }
    
    // Newsletter subscribers - admin only access
    match /newsletter_subscribers/{subscriberId} {
      allow read, write: if isAdmin();
      // Allow anonymous users to subscribe
      allow create: if true;
    }
    
    // Admins collection - admin only access
    match /admins/{adminId} {
      allow read, write: if isAdmin();
    }
  }
}

*/

// Export a placeholder function to avoid linting issues
export const getFirestoreRules = () => {
  return 'Firestore security rules defined in the file. Copy them to Firebase console.';
};
