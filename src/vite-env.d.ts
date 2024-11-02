/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly "VITE_X-API-KEY": string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
