import { defineTokens } from "@pandacss/dev";

// Negspace spacing scale = the complete set of Figma spacing variables
// (design-spec §3.4). Token names encode the px value, so each step maps 1:1
// to a Figma variable: x04 ← 204:55, x08 ← 204:58, x12 ← 204:59, x16 ←
// 204:60, x20 ← 204:61, x24 ← 204:62, x32 ← 204:63.
// Values NOT in this set (6px, 10px) are not Figma variables → kept as raw px.
export const spacings = defineTokens.spacing({
	x04: { value: "4px" },
	x08: { value: "8px" },
	x12: { value: "12px" },
	x16: { value: "16px" },
	x20: { value: "20px" },
	x24: { value: "24px" },
	x32: { value: "32px" },
});

// Kit-scale aliases (s.padding.*/s.margin.*): the kit's c.* tokens and css
// hooks reference this scale, and its projects hardcode their own px scale —
// here the kit scale resolves against negspace Figma values (see design-spec
// §3.4). The x* scale above stays the source of truth for project styles.
export const padding = {
	xxs: { value: "4px" },
	xs: { value: "8px" },
	s: { value: "12px" },
	m: { value: "16px" },
	l: { value: "20px" },
	xl: { value: "24px" },
	xxl: { value: "32px" },
};

export const margin = {
	xxs: { value: "4px" },
	xs: { value: "8px" },
	s: { value: "12px" },
	m: { value: "16px" },
	l: { value: "20px" },
	xl: { value: "24px" },
	xxl: { value: "32px" },
};
