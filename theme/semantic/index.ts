import { defineSemanticTokens } from "@pandacss/dev";

import { brand } from "../brand";
import { colors } from "./colors";
import { fontSizes } from "./fontSizes";
import { fontWeights } from "./fontWeights";
import { fonts } from "./fonts";
import { radii } from "./radii";
import { sizes } from "./sizes";
import { spacing } from "./spacings";

// Per-category: b.* = raw negspace brand, s.* = purposeful aliases.
//
// The kit c.* component tokens (and the kit css hooks inside
// @packages/ui) reference the kit s.* alias namespace: bg/fg (already here),
// padding/margin alias names, the radius scale, s.head and s.md.
// So that the kit components keep working in negspace without breaking its
// Figma token set, the missing alias layers are merged into s.*:
// - spacing.s: x04..x32 (Figma) + padding/margin alias (kit scale → negspace px).
// - radii.s: pill/radius8/…/none (Figma) + the s.radius.xs..xl scale.
// - sizes.s: screen/card/… (Figma) + s.md (kit size scale).
// - fonts.s: display/mono (Figma) + s.head (kit App font → display typeface).
export const semantic = defineSemanticTokens({
	colors: {
		b: brand.colors,
		s: colors,
	},
	sizes: {
		b: brand.sizes,
		s: sizes,
	},
	fonts: {
		b: brand.fonts,
		s: fonts,
	},
	fontSizes: {
		b: fontSizes,
		s: fontSizes,
	},
	spacing: {
		b: spacing,
		s: spacing,
	},
	fontWeights: {
		b: fontWeights,
		s: fontWeights,
	},
	radii: {
		b: radii,
		s: radii,
	},
});
