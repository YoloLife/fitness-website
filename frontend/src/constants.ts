export enum Mode {
  DEV = "development",
  PROD = "production",
}

interface WithEnvMode {
  readonly env: {
    readonly MODE: Mode;
  };
}

export const mode = (import.meta as unknown as WithEnvMode).env.MODE;

declare const __APP_ID__: string;
export const APP_ID = __APP_ID__;

// Frontend-only constants - no backend needed
export const API_PATH = '';
export const API_URL = '';
export const WS_API_URL = '';

declare const __APP_BASE_PATH__: string;
export const APP_BASE_PATH = __APP_BASE_PATH__;

declare const __APP_TITLE__: string;
export const APP_TITLE = __APP_TITLE__;

declare const __APP_FAVICON_LIGHT__: string;
export const APP_FAVICON_LIGHT = __APP_FAVICON_LIGHT__;

declare const __APP_FAVICON_DARK__: string;
export const APP_FAVICON_DARK = __APP_FAVICON_DARK__;

declare const __APP_DEPLOY_USERNAME__: string;
export const APP_DEPLOY_USERNAME = __APP_DEPLOY_USERNAME__;

declare const __APP_DEPLOY_APPNAME__: string;
export const APP_DEPLOY_APPNAME = __APP_DEPLOY_APPNAME__;

declare const __APP_DEPLOY_CUSTOM_DOMAIN__: string;
export const APP_DEPLOY_CUSTOM_DOMAIN = __APP_DEPLOY_CUSTOM_DOMAIN__;
