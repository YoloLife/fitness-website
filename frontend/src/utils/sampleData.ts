// Mock implementation of sampleData.ts

// Sample data mock storage
const mockDataInitialized = { value: false };

// Function to upload sample data (mock implementation)
export const uploadSampleData = async (): Promise<void> => {
  console.log('Mock: Uploading sample data');
  
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mark as initialized
  mockDataInitialized.value = true;
  console.log('Mock: Sample data uploaded successfully!');
};

// Function to check if sample data exists (mock implementation)
export const checkSampleDataExists = async (): Promise<boolean> => {
  console.log('Mock: Checking if sample data exists');
  return mockDataInitialized.value;
};
