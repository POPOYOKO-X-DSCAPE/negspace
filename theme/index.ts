import { defineThemeContract } from "@pandacss/dev";
import { componentsTokens } from "./defaultTheme";
import { semantic } from "./semantic";
import { textStyles } from "./textStyles";
import { textStyles as kitTextStyles } from "@packages/ui/theme/textStyles";

// Negspace composes: its own brand + semantic (s.*) tokens (Figma variables,
// design-spec §3.4) + its c.* component token bundle (./components) which
// resolves the kit @packages/ui components against those tokens. The kit
// actionL text style is added on top of negspace's Figma text styles.
const themeContract = defineThemeContract({
	semanticTokens: componentsTokens,
});

export const theme = themeContract({
	tokens: semantic,
	semanticTokens: { ...componentsTokens },
	textStyles: { ...kitTextStyles, ...textStyles },
});
