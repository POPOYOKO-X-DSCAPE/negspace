import { defineTokens } from "@pandacss/dev";
import { bg, fg } from "../../semantic/colors";
import { radii } from "../../semantic/radii";
import { spacing } from "../../semantic/spacings";

// Sidebar c.* tokens: page-bg rail, elevated hover on items, s.radius8.
export const sidebar = defineTokens({
	colors: {
		bg: {
			initial: bg.default.initial,
			hover: bg.default.hover,
		},
		fg: { initial: fg.default.initial },
		element: {
			bg: {
				initial: bg.default.initial,
				hover: bg.elevated.hover,
				active: bg.elevated.active,
			},
			fg: {
				initial: fg.default.initial,
				hover: fg.default.hover,
				active: fg.actionHigh.initial,
			},
		},
	},
	spacing: {
		element: {
			gap: spacing.padding.xs,
			padding: spacing.padding.xs,
			paddingLeft: spacing.padding.m,
		},
		group: {
			paddingLeft: spacing.padding.xxl,
		},
	},
	radii: { element: { radius: radii.radius8 } },
});
