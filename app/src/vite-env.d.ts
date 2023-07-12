/// <reference types="vite/client" />

// see vite.config.ts
declare const SUPPORTED_BROWSERS: string[];

interface ImportMetaEnv {
  readonly VITE_APP_VER: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
