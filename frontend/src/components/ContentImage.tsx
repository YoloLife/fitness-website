import React, { useState } from "react";

export interface ContentImageProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  className?: string;
}

export function ContentImage({ src, alt, caption, credit, className = "" }: ContentImageProps) {
  const [imageError, setImageError] = useState(false);
  
  // Handle image loading error
  const handleImageError = () => {
    console.error(`Failed to load image: ${src}`);
    setImageError(true);
  };

  return (
    <figure className={`my-8 ${className}`}>
      <div className="rounded-lg overflow-hidden bg-gray-100">
        {!imageError ? (
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto"
            loading="lazy"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-64 flex items-center justify-center text-gray-500 p-4 text-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 10v2M19 14v4a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h5" />
              </svg>
              <p>Image could not be loaded</p>
              <p className="text-xs mt-1">{alt}</p>
            </div>
          </div>
        )}
      </div>
      {(caption || credit) && (
        <figcaption className="mt-2 text-sm text-muted-foreground text-center">
          {caption && <span>{caption}</span>}
          {caption && credit && <span> — </span>}
          {credit && <span className="italic">{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}