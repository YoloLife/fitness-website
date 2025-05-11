// This file provides dummy type definitions for the Brain namespace
// No backend functionality is available in this frontend-only project

export namespace Brain {
  // Simplified health check types for frontend-only implementation
  export namespace check_health {
    export type RequestParams = {};
    export type ResponseBody = { status: string };
  }
}
