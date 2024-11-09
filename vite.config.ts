import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";
import { configDefaults } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
	plugins: [TanStackRouterVite(), react(), analyzer()],
	test: {
		environment: "jsdom", // Vitestでjsdomをテスト環境として使用
		globals: true,
		exclude: [...configDefaults.exclude, "dist"],
	},
});
