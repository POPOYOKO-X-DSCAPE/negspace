import { brand } from "../../brand";
import { defineSemanticTokens } from "@pandacss/dev";

// Figma control/screen dimensions + the kit `s.sizes.md` alias (16px dot /
// small-control height) referenced by the kit c.* component tokens.
export const sizes = defineSemanticTokens.sizes({
	...brand.sizes,
	md: { value: "16px" },
});
