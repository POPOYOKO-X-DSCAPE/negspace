import { colors } from "./colors";
import { fonts } from "./fonts";
import { radii } from "./radii";
import { sizes } from "./sizes";
import { spacings } from "./spacings";
import { defineSemanticTokens } from "@pandacss/dev";

export const brand = defineSemanticTokens({
	colors,
	fonts,
	radii,
	sizes,
	spacings,
});
