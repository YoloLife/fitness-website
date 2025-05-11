import React, { useEffect } from 'react';
import { AdColumn } from './AdColumn';
import { initializeAdsense } from 'utils/adsense';

interface AdLayoutProps {
  children: React.ReactNode;
  className?: string;
  showAds?: boolean;
}

export const AdLayout: React.FC<AdLayoutProps> = ({ 
  children, 
  className = '',
  showAds = true
}) => {
  // Initialize AdSense script when component mounts
  useEffect(() => {
    if (showAds) {
      initializeAdsense();
    }
  }, [showAds]);

  if (!showAds) {
    return <>{children}</>;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main Content - Rendered first to ensure it has priority */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Ad Columns - Positioned absolutely so they don't affect main content flow */}
      <AdColumn position="left" className="hidden md:flex" />
      <AdColumn position="right" className="hidden md:flex" />
    </div>
  );
}; 