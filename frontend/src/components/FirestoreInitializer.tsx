import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { checkSampleDataExists, uploadSampleData } from '../utils/sampleData';

export interface Props {
  onInitialized?: () => void;
}

export function FirestoreInitializer({ onInitialized }: Props) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const initializeDatabase = async () => {
      if (isInitialized || isInitializing) return;
      
      setIsInitializing(true);
      setError(null);
      
      try {
        // Check if sample data already exists
        const exists = await checkSampleDataExists();
        
        if (exists) {
          console.log('Database already initialized with sample data');
          setIsInitialized(true);
          if (onInitialized) onInitialized();
          return;
        }
        
        // Upload sample data
        await uploadSampleData();
        console.log('Database initialized with sample data');
        
        setIsInitialized(true);
        if (onInitialized) onInitialized();
      } catch (err) {
        console.error('Error initializing database:', err);
        setError(err instanceof Error ? err : new Error('Failed to initialize database'));
        toast.error('Failed to initialize database');
      } finally {
        setIsInitializing(false);
      }
    };
    
    initializeDatabase();
  }, [isInitialized, isInitializing, onInitialized]);

  return null; // This is a non-visual component
}
