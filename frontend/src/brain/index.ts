// This file provides a dummy implementation for the brain module
// No backend functionality is available in this frontend-only project

// Dummy brain client for frontend-only implementation
const brain = {
  // Add dummy methods used by components
  check_health: () => Promise.resolve({ status: "ok" })
};

export default brain;
