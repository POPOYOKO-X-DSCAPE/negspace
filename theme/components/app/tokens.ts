import { defineTokens } from "@pandacss/dev";
import { bg, fg } from "../../semantic/colors";

// App shell colors for the kit App component (c.app.bg / c.app.fg).
// Negspace: page bg + ink text.
export const app = defineTokens({
	colors: {
		bg: bg.default.initial,
		fg: fg.default.initial,
	},
});
