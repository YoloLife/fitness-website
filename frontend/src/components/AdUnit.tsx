import React, { useEffect, useRef } from 'react';
import { ADSENSE_CLIENT_ID } from 'utils/adsense';

interface AdUnitProps {
  adSlot: string;
  format?: 'auto' | 'rectangle' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
}

export const AdUnit: React.FC<AdUnitProps> = ({ 
  adSlot, 
  format = 'auto', 
  className = '', 
  style = {} 
}) => {
  // Using any type to avoid type issues with ins element
  const adRef = useRef<any>(null);

  useEffect(() => {
    try {
      if (adRef.current && typeof window !== 'undefined') {
        // This cast to any is necessary for TypeScript since window.adsbygoogle is added by the external script
        const adsbygoogle = (window as any).adsbygoogle || [];
        adsbygoogle.push({});
      }
    } catch (error) {
      console.error('Error initializing AdSense ad:', error);
    }
  }, [adSlot]);

  // Set default dimensions based on format
  const getAdDimensions = () => {
    switch (format) {
      case 'rectangle':
        return { width: '300px', height: '250px' };
      case 'vertical':
        return { width: '160px', height: '600px' };
      case 'auto':
      default:
        return { width: '100%', height: 'auto' };
    }
  };

  const dimensions = getAdDimensions();

  return (
    <div className={`ad-unit-container ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: 'block',
          ...dimensions,
          ...style
        }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}; 