import { QueryClient } from "@tanstack/react-query";
import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import type { paths } from "../openai/schema";

export const queryClient = new QueryClient();

export const fetchClient = createFetchClient<paths>({
	baseUrl: "https://yumemi-frontend-engineer-codecheck-api.vercel.app",

	headers: {
		"X-API-KEY": import.meta.env.VITE_X_API_KEY,
	},
});
export const $api = createClient(fetchClient);
