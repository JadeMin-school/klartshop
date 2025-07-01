/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_CLIENT_ID_GOOGLE: string;
}
interface ImportMeta {
	readonly env: ImportMetaEnv;
}