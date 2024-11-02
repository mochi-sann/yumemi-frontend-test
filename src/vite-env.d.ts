/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />
interface ImportMetaEnv {
	readonly VITE_X_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
