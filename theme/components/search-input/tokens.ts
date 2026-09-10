import { defineTokens } from "@pandacss/dev";
import { fg } from "../../semantic/colors";
import { radii } from "../../semantic/radii";
import { sizes } from "../../semantic/sizes";
import { spacing } from "../../semantic/spacings";

// SearchInput c.* tokens for the negspace search field (design-spec §3.4):
// gray gradient field, 8px radius, 44px control height.
const radiiDef = defineTokens.radii({
	radius: radii.radius8,
});

const spacingDef = defineTokens.spacing({
	padding: spacing.padding.s,
	gap: spacing.padding.xs,
});

// The field gradient lives on the c.searchInput.bg token itself (the kit
// field reads it through `background`), so the project no longer overlays it
// from a css class. Panda does not resolve s.* refs inside gradient values,
// so the stops point at the emitted CSS variables of those same theme
// colors (s.bg.default.initial #F5F5F5 → s.surface #E8E8E8).
const colorsDef = defineTokens.colors({
	bg: {
		value:
			"linear-gradient(180deg, var(--colors-s-bg-default-initial) 0%, var(--colors-s-surface) 100%)",
	},
	fg: fg.default.initial,
});

const sizesDef = defineTokens.sizes({
	height: sizes.control,
});

export const searchInput = defineTokens({
	radii: radiiDef,
	spacing: spacingDef,
	colors: colorsDef,
	sizes: sizesDef,
});
