import { defineTokens } from "@pandacss/dev";

// Figma control / screen dimensions (design-spec.md §3.3).
// `chip` and `control` live in `sizes` (heights); paddings live in `spacing`.
export const sizes = defineTokens.sizes({
	screen: { value: "400px" },
	card: { value: "318px" },
	thumb: { value: "56px" },
	chip: { value: "32px" },
	control: { value: "44px" },
	logo: { value: "92px" },
	brandChip: { value: "32px" },
});
