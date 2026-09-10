import { defineTokens } from "@pandacss/dev";
import { bg, fg } from "../../../semantic/colors";
import { radii } from "../../../semantic/radii";
import { spacing } from "../../../semantic/spacings";

// Form input c.* tokens (kit Input/Form fields): page-bg field, 8px radius.
const inputColors = defineTokens.colors({
	bg: bg.default.initial,
	fg: fg.default.initial,
});

const labelColors = defineTokens.colors({
	color: fg.default.initial,
});

const containerSpacing = defineTokens.spacing({
	gap: spacing.padding.xxs,
});

const inputSpacing = defineTokens.spacing({
	padding: spacing.padding.s,
});

export const inputContainer = defineTokens({
	spacing: containerSpacing,
});

export const inputLabel = defineTokens({
	colors: labelColors,
});

export const input = defineTokens({
	radii: { radius: radii.radius8 },
	spacing: inputSpacing,
	colors: inputColors,
});
