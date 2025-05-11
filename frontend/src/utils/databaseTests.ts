// This file is used to test database functionality directly
import { testFirestoreConnection } from './databaseDocs';
import { uploadSampleData, checkSampleDataExists } from './sampleData';

// Function to run database tests in development
export const runDatabaseTests = async () => {
  try {
    console.log('Starting database tests...');
    
    // Test 1: Check connection and structure
    console.log('Test 1: Testing database connection...');
    const connectionResult = await testFirestoreConnection();
    console.log('Connection test result:', connectionResult);
    
    // Test 2: Check if sample data exists
    console.log('Test 2: Checking if sample data exists...');
    const dataExists = await checkSampleDataExists();
    console.log('Sample data exists:', dataExists);
    
    // Test 3: Upload sample data if it doesn't exist
    if (!dataExists) {
      console.log('Test 3: Uploading sample data...');
      await uploadSampleData();
      console.log('Sample data uploaded successfully');
    } else {
      console.log('Test 3: Sample data already exists, skipping upload');
    }
    
    // Final connection test after potential data upload
    const finalConnectionResult = await testFirestoreConnection();
    console.log('Final connection test result:', finalConnectionResult);
    
    return {
      success: true,
      message: 'All database tests completed successfully',
      details: {
        connection: connectionResult,
        dataExists,
        finalConnection: finalConnectionResult
      }
    };
  } catch (error) {
    console.error('Database tests failed:', error);
    return {
      success: false,
      message: `Database tests failed: ${error instanceof Error ? error.message : String(error)}`,
      error
    };
  }
};
