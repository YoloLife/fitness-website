// This file provides a dummy implementation for backwards compatibility
// No backend functionality is available in this frontend-only project

const dummyBrain = {
  // Add dummy methods if needed by components
  check_health: () => Promise.resolve({ status: "ok" })
};

export default dummyBrain;
