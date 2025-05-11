// This file provides a dummy implementation for the Brain class
// No backend functionality is available in this frontend-only project

export class Brain<SecurityDataType = unknown> {
  // Dummy method for backwards compatibility
  check_health = (params = {}) => {
    return Promise.resolve({ status: "ok" });
  };
}
