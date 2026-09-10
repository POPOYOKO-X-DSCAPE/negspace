import { defineTokens } from "@pandacss/dev";
import type { Recursive, Token, TokenDataTypes } from "@pandacss/types";
import { app } from "./components/app/tokens";
import { badge } from "./components/badge/tokens";
import {
	buttonGhost,
	buttonMenu,
	buttonMenuItem,
	buttonPrimary,
	buttonSecondary,
} from "./components/button/tokens";
import {
	documentViewer,
	documentViewerZoom,
} from "./components/documentViewer/tokens";
import { header } from "./components/header/tokens";
import {
	input,
	inputContainer,
	inputLabel,
} from "./components/form/input/tokens";
import { searchInput } from "./components/search-input/tokens";
import { sidebar } from "./components/sidebar/tokens";
import { snackbar } from "./components/snackBar/tokens";

// Negspace's c.* component token bundle — same mechanics as the @packages/ui
// kit's defaultTheme: per-component token groups are flattened into the
// semantic `c.` namespace, resolved against negspace's own semantic (s.*)
// layer so the kit components render with negspace Figma values.
const getTokensFromTokenDataTypes = <T extends keyof TokenDataTypes>(
	tokenType: T,
	tokens: Recursive<Token<string>>,
	prefix: string,
) => {
	return Object.values(
		Object.entries(tokens).map(([key, value]) => {
			return { [key]: value[tokenType as keyof typeof value] };
		}),
	)
		.filter((subElement) => {
			return Object.entries(subElement)[0][1] !== undefined;
		})
		.reduce(
			(acc, item) => {
				const [componentName] = Object.keys(item);

				Object.assign(acc, {
					[`${prefix}.${componentName}`]: item[componentName],
				});
				return acc;
			},
			{} as Record<string, Recursive<Token<string>>>,
		) as Recursive<Token<string>>;
};

const components = {
	app,
	header,
	sidebar,
	documentViewer,
	documentViewerZoom,
	buttonPrimary,
	buttonSecondary,
	buttonGhost,
	buttonMenu,
	buttonMenuItem,
	snackbar,
	inputContainer,
	inputLabel,
	input,
	searchInput,
	badge,
};

const getAllComponentTokens = () => {
	const tokenTypes = [
		"colors",
		"sizes",
		"spacing",
		"fonts",
		"fontSizes",
		"fontWeights",
		"radii",
	] as const;

	return tokenTypes.reduce(
		(acc, tokenType) => {
			const tokens = getTokensFromTokenDataTypes(
				tokenType,
				components,
				"c",
			);
			if (Object.keys(tokens).length > 0) {
				acc[tokenType] = tokens;
			}
			return acc;
		},
		{} as Record<string, Recursive<Token<string>>>,
	);
};

export const componentsTokens = defineTokens(getAllComponentTokens());
