import { defineTokens } from "@pandacss/dev";
import { bg, fg } from "../../semantic/colors";

// Header c.* tokens: page-bg sticky bar. The kit Header owns the sticky
// positioning (top 0 / z-index 10) and reads paddingBlock/paddingInline
// from these tokens; negspace keeps the bar padding at 0 because the inner
// search-header row carries its own s.x08/s.x16 metrics.
export const header = defineTokens({
	colors: {
		bg: bg.default.initial,
		fg: fg.default.initial,
	},
	spacing: {
		paddingBlock: { value: "0" },
		paddingInline: { value: "0" },
	},
});
