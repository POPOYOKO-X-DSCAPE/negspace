import { defineTokens } from "@pandacss/dev";
import { bg, fg } from "../../semantic/colors";
import { radii } from "../../semantic/radii";
import { spacing } from "../../semantic/spacings";

// Snackbar c.* tokens: elevated surface, s.radius8.
export const snackbar = defineTokens({
	colors: {
		bg: bg.elevated.initial,
		fg: fg.elevated.initial,
	},
	spacing: {
		padding: spacing.padding.m,
		margin: spacing.margin.m,
	},
	radii: {
		radius: radii.radius8,
	},
});
