import React, { useEffect, useState } from 'react';
import { AdUnit } from './AdUnit';
import { calculateAdCount } from 'utils/adsense';

interface AdColumnProps {
  position: 'left' | 'right';
  className?: string;
  adSlotPrefix?: string;
}

export const AdColumn: React.FC<AdColumnProps> = ({ 
  position, 
  className = '',
  adSlotPrefix = 'sidebar'
}) => {
  const [adCount, setAdCount] = useState(2);
  const [topOffset, setTopOffset] = useState('50vh');
  
  // Calculate how many ads should be displayed based on page height
  useEffect(() => {
    const updateAdCount = () => {
      setAdCount(calculateAdCount(2, 6));
    };
    
    // Calculate top offset based on hero image height
    const calculateTopOffset = () => {
      // Find the hero image section
      const heroSection = document.querySelector('.h-\\[40vh\\], .h-\\[50vh\\]');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        // Set top offset to the bottom of the hero section plus header height
        setTopOffset(`${heroRect.bottom + window.scrollY}px`);
      }
    };
    
    // Initial calculations
    updateAdCount();
    
    // Use a short delay to ensure the page has fully rendered
    const timer = setTimeout(() => {
      calculateTopOffset();
    }, 500);
    
    // Recalculate on resize
    window.addEventListener('resize', () => {
      updateAdCount();
      calculateTopOffset();
    });
    
    // Clean up
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateAdCount);
    };
  }, []);
  
  return (
    <div 
      className={`ad-column fixed ${position === 'left' ? 'left-0' : 'right-0'} bottom-0
                  w-[250px] z-0 flex flex-col items-center gap-6 pb-8
                  bg-white/95 ${className}`}
      style={{ top: topOffset }}
    >
      {/* Generate the appropriate number of ad units */}
      {Array.from({ length: adCount }).map((_, index) => (
        <AdUnit 
          key={`${position}-ad-${index}`}
          adSlot={`${adSlotPrefix}-${position}-${index + 1}`}
          format="vertical"
          className="mb-6"
        />
      ))}
    </div>
  );
}; 