import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export interface Props {
  className?: string;
}

export function DatabaseGuide({ className = "" }: Props) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Firestore Database Structure</CardTitle>
        <CardDescription>
          Overview of the YOLO Life database collections and their relationships
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Core Collections</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">articles:</span> All blog content with rich details
              </li>
              <li>
                <span className="font-semibold">categories:</span> Wellness topic categories
              </li>
              <li>
                <span className="font-semibold">authors:</span> Content creator profiles
              </li>
              <li>
                <span className="font-semibold">users:</span> App user profiles and preferences
              </li>
              <li>
                <span className="font-semibold">comments:</span> User reactions to articles
              </li>
              <li>
                <span className="font-semibold">newsletter_subscribers:</span> Email subscription management
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Key Relationships</h3>
            <ul className="space-y-2">
              <li>Articles reference categories via <code>categoryId</code></li>
              <li>Articles reference authors via <code>authorId</code></li>
              <li>Comments reference articles via <code>articleId</code></li>
              <li>Comments reference users via <code>userId</code></li>
              <li>Users bookmark articles via <code>savedArticles</code> array</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Query Patterns</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Home page:</span> Featured articles, categories
              </li>
              <li>
                <span className="font-semibold">Category page:</span> Articles filtered by category
              </li>
              <li>
                <span className="font-semibold">Article page:</span> Article by slug, related content
              </li>
              <li>
                <span className="font-semibold">User profile:</span> Saved articles, preferences
              </li>
            </ul>
          </div>
          
          <div className="bg-muted p-4 rounded-md text-sm">
            <p className="font-medium mb-1">Security Rules Summary:</p>
            <ul className="space-y-1 list-disc pl-5">
              <li>Public read access to content (articles, categories, authors)</li>
              <li>User-specific read/write for their own profile</li>
              <li>Authenticated users can create comments on articles</li>
              <li>Users can only edit/delete their own comments</li>
              <li>Admin-only access to create/edit content collections</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
