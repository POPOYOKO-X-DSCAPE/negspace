import { defineTextStyles } from "@pandacss/dev";
import { colors } from "../brand/colors";

// Figma text styles (design-spec.md §3.2). letter-spacing -0.02em is the house rule.
// font-family references the Figma display/mono Variable tokens (s.display / s.mono)
// so these styles stay wired to the design tokens, not hardcoded stacks.
const tracking = "-0.02em";

const display = "s.display";
const mono = "s.mono";

const headingM = {
	fontFamily: display,
	fontSize: "38px",
	fontWeight: "600",
	lineHeight: "0.85em",
	letterSpacing: tracking,
};

const titleL = {
	fontFamily: display,
	fontSize: "28px",
	fontWeight: "600",
	letterSpacing: tracking,
};

const titleS = {
	fontFamily: display,
	fontSize: "24px",
	fontWeight: "500",
	letterSpacing: tracking,
};

const bodyL = {
	fontFamily: display,
	fontSize: "14px",
	fontWeight: "500",
	lineHeight: "17px",
	letterSpacing: tracking,
};

const actionL = {
	fontFamily: display,
	fontSize: "12px",
	fontWeight: "500",
	lineHeight: "18px",
	textTransform: "uppercase" as const,
	letterSpacing: tracking,
};

const linkL = {
	fontFamily: display,
	fontSize: "12px",
	fontWeight: "500",
	lineHeight: "18px",
	textTransform: "uppercase" as const,
	textDecoration: "underline" as const,
	letterSpacing: tracking,
};

const baselineM = {
	fontFamily: mono,
	fontSize: "14px",
	fontWeight: "400",
	letterSpacing: tracking,
};

const bodyM = {
	fontFamily: mono,
	fontSize: "10px",
	fontWeight: "400",
	lineHeight: "1.01em",
	letterSpacing: tracking,
};

const seeMore = {
	fontFamily: display,
	fontSize: "14px",
	fontWeight: "500",
	color: colors.inkMuted.value,
	letterSpacing: tracking,
};

export const textStyles = defineTextStyles({
	headingM: { value: headingM },
	titleL: { value: titleL },
	titleS: { value: titleS },
	bodyL: { value: bodyL },
	actionL: { value: actionL },
	linkL: { value: linkL },
	baselineM: { value: baselineM },
	bodyM: { value: bodyM },
	seeMore: { value: seeMore },
});
