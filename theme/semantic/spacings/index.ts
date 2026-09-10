import { defineTokens } from "@pandacss/dev";
import { defineSemanticTokens } from "@pandacss/dev";
import { margin, padding } from "../../brand/spacings";

// Spacing lives under the `spacing` token type; `s.x<px>` is how styles read
// it (e.g. `s.x16` = 16px — the complete Figma spacing-variable set, §3.4).
// Plus the kit padding/margin alias scale: kit c.* tokens and css hooks
// reference s.padding.*/s.margin.* (see brand/spacings for the values).
const brandSpacings = {
	x04: { value: "4px" },
	x08: { value: "8px" },
	x12: { value: "12px" },
	x16: { value: "16px" },
	x20: { value: "20px" },
	x24: { value: "24px" },
	x32: { value: "32px" },
};

const spacingTokens = defineTokens.spacing({
	...brandSpacings,
	padding,
	margin,
});

export const spacing = defineSemanticTokens.spacing(spacingTokens);
