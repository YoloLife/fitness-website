import React from "react";
import { getCategoryArticles, getCategoryTitle } from "utils/sample-articles";
import { ContentImage } from "components/ContentImage";
import { useNavigate } from "react-router-dom";
import { ArticleTemplate } from "components/ArticleTemplate";

export default function HealthConditionsArticleUnderstandingAutoimmune() {
  const navigate = useNavigate();
  const category = "health-conditions";
  const slug = "understanding-autoimmune-conditions";
  
  // Get article data
  const articles = getCategoryArticles(category);
  const article = articles.find(a => a.slug === slug);
  
  // Article not found fallback
  if (!article) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <h1 className="text-3xl font-serif font-semibold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Go Back
        </button>
      </div>
    );
  }
  
  // Format article metadata
  const articleMetadata = {
    title: article.title,
    description: article.description,
    image: article.image,
    date: new Date(article.date),
    readTime: article.readTime,
    author: article.author,
    category: article.category,
    categoryLabel: getCategoryTitle(article.category)
  };
  
  return (
    <ArticleTemplate article={articleMetadata}>
      <p className="my-6 leading-relaxed">
        Autoimmune conditions represent a complex group of disorders where the body's immune system 
        mistakenly attacks its own tissues. Understanding these conditions and their management has 
        evolved significantly with recent research, offering new insights and hope for those affected.
      </p>

      <ContentImage 
        src="https://images.unsplash.com/photo-1524683745036-b46f52b8505a?w=1500&h=1000&q=80&fit=crop"
        alt="Medical professional examining diagnostic results"
        caption="Modern diagnostic approaches help understand and manage autoimmune conditions"
        credit="Photo by Unsplash"
      />

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Understanding Autoimmune Conditions</h2>

      <div className="bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="font-medium text-lg mb-4">Common Autoimmune Conditions:</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Rheumatoid Arthritis (RA)</strong>
              <p className="text-gray-600">Affects joints and surrounding tissues</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Multiple Sclerosis (MS)</strong>
              <p className="text-gray-600">Impacts the central nervous system</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Lupus (SLE)</strong>
              <p className="text-gray-600">Can affect multiple organs and systems</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <strong>Type 1 Diabetes</strong>
              <p className="text-gray-600">Affects insulin-producing cells in the pancreas</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Latest Research Insights</h2>

      <ContentImage 
        src="https://images.unsplash.com/vector-1739112852224-1835510b8b14?w=1500&h=1000&q=80&fit=crop"
        alt="Scientific illustration representing autoimmune research"
        caption="Visual representation of current research in autoimmune mechanisms"
        credit="Vector by Unsplash"
      />

      <div className="space-y-4 my-6">
        <h3 className="text-xl font-serif font-semibold text-primary">Recent Discoveries</h3>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <ol className="space-y-4">
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</span>
              <div>
                <strong>Gut Microbiome Connection</strong>
                <p className="text-gray-600">Research shows strong links between gut health and autoimmune conditions</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</span>
              <div>
                <strong>Environmental Triggers</strong>
                <p className="text-gray-600">New understanding of how environmental factors can trigger autoimmune responses</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</span>
              <div>
                <strong>Genetic Factors</strong>
                <p className="text-gray-600">Identification of specific genes associated with autoimmune risk</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Lifestyle Support Strategies</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Dietary Considerations</h4>
          <ul className="space-y-2">
            <li>• Anti-inflammatory foods</li>
            <li>• Omega-3 rich sources</li>
            <li>• Gut-healing nutrients</li>
            <li>• Adequate protein intake</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Stress Management</h4>
          <ul className="space-y-2">
            <li>• Regular meditation</li>
            <li>• Gentle exercise</li>
            <li>• Adequate sleep</li>
            <li>• Support networks</li>
          </ul>
        </div>
      </div>

      <ContentImage 
        src="https://images.unsplash.com/photo-1605447813584-26aeb3f8e6ae?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        alt="Fresh, colorful anti-inflammatory foods"
        caption="A nutrient-rich diet plays a crucial role in managing autoimmune conditions"
        credit="Photo by Unsplash"
      />

      <h3 className="text-xl font-serif font-semibold mt-8 mb-4 text-primary">Daily Management Tips</h3>

      <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-400">
        <h4 className="font-medium mb-3">Key Strategies for Daily Living:</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <div>
              <strong>Energy Conservation</strong>
              <p className="text-gray-600">Plan activities around energy levels, prioritize tasks</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <div>
              <strong>Symptom Tracking</strong>
              <p className="text-gray-600">Keep detailed records of symptoms and triggers</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <div>
              <strong>Regular Movement</strong>
              <p className="text-gray-600">Gentle exercise within personal limits</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-semibold mt-10 mb-6 text-primary">Working with Healthcare Providers</h2>

      <div className="space-y-4 my-6">
        <p className="leading-relaxed">
          Building a strong relationship with your healthcare team is crucial for managing autoimmune conditions effectively:
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <strong>Regular Check-ups</strong>
                <p className="text-gray-600">Maintain scheduled appointments and monitoring</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <strong>Open Communication</strong>
                <p className="text-gray-600">Share symptoms, concerns, and treatment responses</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <strong>Medication Management</strong>
                <p className="text-gray-600">Follow prescribed treatments and report side effects</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <blockquote className="border-l-4 border-primary pl-4 italic my-8 py-2 text-gray-700 bg-gray-50 rounded">
        "Understanding your condition is the first step toward effective management. With proper support 
        and care, many people with autoimmune conditions lead full, active lives."
        <cite className="block mt-2 text-sm text-gray-600 not-italic">– Dr. Sarah Thompson, Rheumatologist</cite>
      </blockquote>

      <div className="bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="text-xl font-serif font-semibold mb-4 text-primary">When to Seek Immediate Care</h3>
        <p className="mb-4">Contact your healthcare provider immediately if you experience:</p>
        <ul className="space-y-2">
          <li>• Severe pain or sudden symptom changes</li>
          <li>• Signs of infection during immunosuppressive therapy</li>
          <li>• Unusual or severe medication reactions</li>
          <li>• Significant changes in fatigue or mobility</li>
        </ul>
      </div>

      <p className="my-6 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
        Living with an autoimmune condition requires patience, understanding, and a comprehensive approach 
        to health. While these conditions present unique challenges, advances in research and treatment 
        options continue to improve outcomes and quality of life for those affected. Remember that each 
        person's journey is unique, and finding the right combination of treatments and lifestyle 
        modifications may take time.
      </p>
    </ArticleTemplate>
  );
} 