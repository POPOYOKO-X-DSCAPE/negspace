import { defineConfig } from "@pandacss/dev";
import { theme } from "./theme";

export default defineConfig({
	jsxFramework: "react",
	globalCss: {
		"#root": {
			height: "100vh",
		},
		"html, body": {
			height: "100vh",
			margin: 0,
			padding: 0,
		},
		body: {
			backgroundColor: "s.bg.default.initial",
			color: "s.fg.default.initial",
			fontFamily: "s.display",
		},
	},
	// emitTokensOnly: true,
	conditions: {
		light: "[data-color-mode=light] &",
		dark: "[data-color-mode=dark] &",
	},

	// Whether to use css reset
	preflight: true,
	outExtension: "js",
	// watch: true,

	// Where to look for your css declarations: negspace source + the shared
	// @packages/ui kit components (both read the same root styled-system).
	include: [
		"./packages/**/*.{js,jsx,ts,tsx}",
		"./projects/negspace/src/**/*.{js,jsx,ts,tsx}",
	],

	presets: [],

	// Negspace composed theme: Figma brand + semantic (s.*) tokens
	// (design-spec §3.4) + the c.* component token bundle that resolves the
	// @packages/ui kit components against those tokens (./components) +
	// Figma text styles + the kit actionL.
	theme,
	// The output directory for your css system
	outdir: "styled-system",
});
