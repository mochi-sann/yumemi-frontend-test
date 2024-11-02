/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />
interface ImportMetaEnv {
	readonly "VITE_X-API-KEY": string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
