import { css } from "@styles";

// Box-neutral pill driven by the c.badge.* component tokens (themed per
// project via theme/components/badge/tokens.ts). Paddings, typography and
// height are left to the consumer's className so themed boxes (e.g. negspace
// chips) keep their own metrics; color / radius resolve against the project
// theme.
const badge = css({
	borderRadius: "c.badge.radius",
	backgroundColor: "c.badge.bg",
	color: "c.badge.fg",
	whiteSpace: "nowrap",
});

// Unthemed fallback (no className): the count circle the kit Badge had
// before tokenization — literal black dot / white .5em text, 16px
// (c.badge.height in the kit theme). minWidth (not width) so a multi-digit
// count grows the pill instead of spilling out of the circle. Themed
// consumers never hit this branch.
const dot = css({
	minWidth: "c.badge.height",
	height: "c.badge.height",
	paddingInline: "1px",
	borderRadius: "9999px",
	backgroundColor: "black",
	color: "white",
	fontSize: ".5em",
	flexShrink: "0",
});

export const Styles = {
	badge,
	dot,
};
