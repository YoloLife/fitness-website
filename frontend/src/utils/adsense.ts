// Utility functions for initializing and managing Google AdSense

// Replace this with your actual AdSense publisher ID when available
export const ADSENSE_CLIENT_ID = 'ca-pub-3894631460373390';

interface AdUnitProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical';
  style?: React.CSSProperties;
  className?: string;
}

// Initialize AdSense script
export const initializeAdsense = (): void => {
  if (typeof window !== 'undefined' && !document.getElementById('adsense-script')) {
    // Check if the script is already loaded
    const script = document.createElement('script');
    script.id = 'adsense-script';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
    document.head.appendChild(script);
  }
};

// Calculate the number of ads to display based on page height
export const calculateAdCount = (minCount: number = 2, maxCount: number = 6): number => {
  if (typeof window === 'undefined') return minCount;
  
  const pageHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;
  
  // Base calculation: 1 ad per 1000px of content, with min/max constraints
  const adCount = Math.floor(pageHeight / 1000);
  
  // Enforce minimum and maximum
  return Math.max(minCount, Math.min(adCount, maxCount));
}; 