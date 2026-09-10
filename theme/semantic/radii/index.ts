import { defineSemanticTokens } from "@pandacss/dev";
import { radii as brandRadii, radius } from "../../brand/radii";

// Negspace's own radii (design-spec §3.3 / §3.4 Figma variables): pill,
// radius8, radius4, radius3, radius2, none. Plus the kit scale names
// (s.radius.xs..xl) referenced by the kit's c.* component tokens.
export const radii = defineSemanticTokens.radii({
	...brandRadii,
	radius,
});
