/*
This file is here for exporting a stable API for users apps.

Usage examples in a frontend-only context:

  // Constants and configuration
  import { APP_BASE_PATH, APP_ID, Mode, mode } from "app";
*/

export {
  APP_BASE_PATH,
  APP_ID,
  Mode,
  mode,
} from "../constants";

// Define dummy values for previously backend-dependent constants
export const API_URL = '';
export const WS_API_URL = '';

// Dummy backend object for frontend-only implementation
export const backend = {
  // Add dummy methods if needed by components
};

// export * as types from "../brain/data-contracts";
