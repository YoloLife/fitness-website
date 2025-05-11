import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AdLayout } from './AdLayout';
import { Toaster } from 'sonner';

interface PageWrapperProps {
  children: React.ReactNode;
  showAds?: boolean;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  showAds = true,
  className = '',
}) => {
  return (
    <AdLayout showAds={showAds}>
      <div className={`flex flex-col min-h-screen ${className}`}>
        <Header />
        <main className="flex-grow mx-auto md:mx-[250px] transition-all duration-300">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </AdLayout>
  );
}; 