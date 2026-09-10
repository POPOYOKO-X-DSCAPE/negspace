import { defineTokens } from "@pandacss/dev";
import { bg, fg } from "../../semantic/colors";
import { radii } from "../../semantic/radii";
import { sizes } from "../../semantic/sizes";

// Badge c.* tokens — the negspace chip (design-spec §5 `chip`): pill
// h-32, bg surface (#E8E8E8), ink text. Paddings are box-local and ride on
// the consumer className (the pill can be plain or icon-prefixed), so no
// spacing group here.
export const badge = defineTokens({
	colors: {
		bg: bg.actionLow.initial,
		fg: fg.actionLow.initial,
	},
	radii: {
		radius: radii.pill,
	},
	sizes: {
		height: sizes.chip,
	},
});
