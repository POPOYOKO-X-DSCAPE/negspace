import { defineTokens } from "@pandacss/dev";

// Heading sizes for the kit `c.app.*` bundle. Negspace display type comes from
// the s.textStyles tokens; these keep the app heading font-sizes sane.
export const fontSizes = defineTokens.fontSizes({
	h1: { value: "2.375rem" },
	h2: { value: "1.75rem" },
	h3: { value: "1.5rem" },
	h4: { value: "1.125rem" },
	h5: { value: "1rem" },
	h6: { value: "0.875rem" },
});
