import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			semanticTokens: {
				colors: {
					foreground: {
						DEFAULT: {
							value: {
								base: "{colors.neutral.950}",
								_dark: "{colors.neutral.50}",
							},
						},
						muted: {
							value: {
								base: "{colors.neutral.600}",
								_dark: "{colors.neutral.400}",
							},
						},
						accent: {
							value: {
								base: "{colors.neutral.100}",
								_dark: "{colors.neutral.800}",
							},
						},
					},
					background: {
						DEFAULT: {
							value: {
								base: "{colors.white}",
								_dark: "{colors.neutral.950}",
							},
						},
						muted: {
							value: {
								base: "{colors.neutral.100}",
								_dark: "{colors.neutral.900}",
							},
						},
						accent: {
							value: {
								base: "{colors.neutral.800}",
								_dark: "{colors.neutral.100}",
							},
						},
					},
					border: {
						value: {
							base: "{colors.neutral.200}",
							_dark: "{colors.neutral.800}",
						},
					},
					outline: {
						value: {
							base: "{colors.sky.400}",
							_dark: "{colors.sky.600}",
						},
					},
				},
			},
		},
	},
	eject: false,
	utilities: {
		color: {
			values: "colors",
		},
	},

	// The output directory for your css system
	outdir: "styled-system",
});
