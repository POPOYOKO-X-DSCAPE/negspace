import { defineTokens } from "@pandacss/dev";
import { bg, fg } from "../../semantic/colors";
import { radii } from "../../semantic/radii";
import { spacing } from "../../semantic/spacings";

// DocumentViewer c.* tokens: page-bg canvas, s.radius8.
export const documentViewer = defineTokens({
	colors: {
		bg: bg.default.initial,
		fg: fg.default.initial,
	},
	spacing: {
		padding: spacing.padding.m,
		gap: spacing.padding.m,
	},
	radii: {
		radius: radii.radius8,
	},
});

export const documentViewerZoom = defineTokens({
	spacing: {
		gap: spacing.padding.xs,
	},
});
