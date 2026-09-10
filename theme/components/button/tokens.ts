import { defineTokens } from "@pandacss/dev";
import { bg, fg } from "../../semantic/colors";
import { radii } from "../../semantic/radii";
import { spacing } from "../../semantic/spacings";

// Button c.* tokens, resolved against the negspace Figma semantic layer
// (design-spec §3.4). The kit Button (packages/ui) reads these tokens for
// its level treatment; per-project box metrics (width/height/border) are
// carried on the kit Button className, so only the level-specific color +
// radius live here:
//   primary  → ink pill (design CTA)
//   secondary→ outline button: page bg, s.radius4
//   ghost    → transparent icon/link button, s.radius4
//   menu/items→ elevated surface (kit dropdown menu)
const primaryColors = defineTokens.colors({
	bg: {
		initial: bg.actionHigh.initial,
		hover: bg.actionHigh.hover,
	},
	fg: {
		initial: fg.actionHigh.initial,
		hover: fg.actionHigh.hover,
	},
});

const secondaryColors = defineTokens.colors({
	bg: {
		initial: bg.default.initial,
		hover: bg.default.hover,
	},
	fg: {
		initial: fg.elevated.initial,
		hover: fg.elevated.initial,
	},
});

const ghostColors = defineTokens.colors({
	bg: {
		initial: { value: "transparent" },
		hover: bg.default.hover,
	},
	fg: {
		initial: fg.default.initial,
		hover: fg.default.initial,
	},
});

const menuColors = defineTokens.colors({
	bg: {
		initial: bg.elevated.initial,
		hover: bg.elevated.hover,
	},
	fg: {
		initial: fg.elevated.initial,
		hover: fg.elevated.initial,
	},
});

const menuItemColors = defineTokens.colors({
	bg: {
		initial: bg.actionLow.initial,
		hover: bg.actionLow.hover,
	},
	fg: {
		initial: fg.actionLow.initial,
		hover: fg.actionLow.initial,
	},
});

const paddingNoneGapXs = defineTokens.spacing({
	padding: { value: "0" },
	gap: spacing.padding.xs,
});

export const buttonPrimary = defineTokens({
	radii: { radius: radii.pill },
	spacing: paddingNoneGapXs,
	colors: primaryColors,
});

export const buttonSecondary = defineTokens({
	radii: { radius: radii.radius4 },
	spacing: paddingNoneGapXs,
	colors: secondaryColors,
});

export const buttonGhost = defineTokens({
	radii: { radius: radii.radius4 },
	spacing: paddingNoneGapXs,
	colors: ghostColors,
});

export const buttonMenu = defineTokens({
	radii: { radius: radii.radius8 },
	spacing: defineTokens.spacing({
		padding: spacing.padding.s,
		gap: spacing.padding.xs,
	}),
	colors: menuColors,
});

export const buttonMenuItem = defineTokens({
	radii: { radius: radii.radius4 },
	spacing: defineTokens.spacing({
		padding: spacing.padding.s,
		gap: spacing.padding.xs,
	}),
	colors: menuItemColors,
});
