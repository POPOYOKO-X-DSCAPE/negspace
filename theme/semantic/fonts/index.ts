import { defineSemanticTokens } from "@pandacss/dev";
import { fonts as brandFonts } from "../../brand/fonts";

export const fonts = defineSemanticTokens.fonts({
	display: brandFonts.display,
	mono: brandFonts.mono,
});

export const { display, mono } = fonts;
