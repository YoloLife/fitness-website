import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { testFirestoreConnection } from '../utils/databaseDocs';
import { uploadSampleData, checkSampleDataExists } from '../utils/sampleData';

export interface Props {
  className?: string;
}

export function DatabaseTester({ className = "" }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Record<string, any> | null>(null);

  const testConnection = async () => {
    setIsLoading(true);
    setResults(null);
    
    try {
      const result = await testFirestoreConnection();
      setResults(result);
      
      if (result.success) {
        toast.success('Database connection successful!');
      } else {
        toast.error('Database connection failed!');
      }
    } catch (error) {
      console.error('Error testing connection:', error);
      toast.error('Failed to test database connection');
    } finally {
      setIsLoading(false);
    }
  };

  const initializeDatabase = async () => {
    setIsLoading(true);
    
    try {
      const exists = await checkSampleDataExists();
      
      if (exists) {
        toast.info('Database already has sample data');
      } else {
        await uploadSampleData();
        toast.success('Successfully initialized database with sample data');
      }
      
      // Update the test results
      testConnection();
    } catch (error) {
      console.error('Error initializing database:', error);
      toast.error('Failed to initialize database');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Firestore Database Status</CardTitle>
        <CardDescription>
          Test connection and verify the database structure for YOLO Life wellness app.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={testConnection} 
              disabled={isLoading}
              variant="outline"
            >
              Test Database Connection
            </Button>
            
            <Button 
              onClick={initializeDatabase} 
              disabled={isLoading}
              variant="default"
            >
              Initialize Sample Data
            </Button>
          </div>
          
          {results && (
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Connection Results:</h3>
              <div className="bg-muted p-4 rounded-md">
                <p className="font-medium">{results.message}</p>
                
                {results.success && results.collections && (
                  <div className="mt-2">
                    <h4 className="text-sm font-medium mb-1">Collection Counts:</h4>
                    <ul className="space-y-1 text-sm">
                      {Object.entries(results.collections).map(([name, count]) => (
                        <li key={name}>
                          <span className="font-medium">{name}:</span> {count} documents
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Use the Database Tester to verify Firestore connection and manage sample data.
        </p>
      </CardFooter>
    </Card>
  );
}
