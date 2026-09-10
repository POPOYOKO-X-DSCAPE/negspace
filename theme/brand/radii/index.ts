import { defineTokens } from "@pandacss/dev";

// Figma radii (design-spec.md §3.3)
export const radii = defineTokens.radii({
	pill: { value: "9999px" },
	radius8: { value: "8px" },
	radius4: { value: "4px" },
	radius3: { value: "3px" },
	radius2: { value: "2px" },
	none: { value: "0" },
});

// Kit scale names (s.radius.xs..xl) referenced by the kit's c.* component
// tokens, mapped onto the Figma radius set above.
export const radius = {
	xs: { value: "2px" },
	s: { value: "4px" },
	m: { value: "4px" },
	l: { value: "8px" },
	xl: { value: "8px" },
};
