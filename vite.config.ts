import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
	plugins: [TanStackRouterVite(), react()],
	test: {
		environment: "jsdom", // Vitestでjsdomをテスト環境として使用
		globals: true,
		exclude: [...configDefaults.exclude, "dist"],
	},
});
