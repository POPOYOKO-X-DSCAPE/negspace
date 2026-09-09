import { defineTokens } from "@pandacss/dev";
import { app } from "./components/app/tokens";
import { buildComponentTokens } from "./flatten";
import { keyframes } from "./keyframes";
import { semantic } from "./semantic";
import { themeContract } from "./themeContract";

const components = {
	app,
};

export const componentsTokens = defineTokens(
	buildComponentTokens(components),
);

export const defaultTheme = themeContract({
	tokens: semantic,
	semanticTokens: { ...componentsTokens },
	keyframes,
});
