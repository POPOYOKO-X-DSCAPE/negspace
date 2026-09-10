import { css } from "@styles";

// Negspace design-system styles (design-spec.md §3 / §7).
// Gaps, paddings, radii and colors are always read from the s.* token layer so
// they stay in lock-step with the Figma variables (design-spec §3.4). Raw px is
// used ONLY for values that are not Figma variables (icon/photo widths &
// heights, 1px separators, 2px focus rings, 6px/10px micro-gaps).
// Spacing token = the px value: s.x04=4px · x08 · x12 · x16 · x20 · x24 · x32.

// --- Shell -------------------------------------------------------------
// negspace adopts the @packages/ui kit <App> (full-bleed 100vw/100vh, c.app
// bg/fg) as the root. Kit App is a non-scrolling flex column, so the app
// content scrolls in a dedicated child that we also use as the scroll-reset
// target on route change.
export const appShell = "app-ns app-core";

export const appScroll = css({
	flex: "1 1",
	minHeight: "0",
	overflowY: "auto",
});

// --- Buttons -----------------------------------------------------------
// Level buttons render via the kit <Button level>; the kit supplies level
// color + radius (c.button*) and actionL text. Per-project box metrics
// (width/height/border/padding) ride on these className additions. The adopted
// kit App emits `& button { align/justify: stretch; display: flex }` utility
// atoms; the unlayered app-button.css counters them to re-assert centered
// layout, so these box classes only add the geometry.
const buttonBoxCommon = {
	display: "flex" as const,
	alignItems: "center" as const,
	justifyContent: "center" as const,
	height: "s.control",
	appearance: "none" as const,
	cursor: "pointer",
	_focusVisible: {
		outlineWidth: "2px",
		outlineStyle: "solid" as const,
		outlineColor: "s.ink",
		outlineOffset: "2px",
	},
};

export const buttonFull = css({
	...buttonBoxCommon,
	width: "100%",
	paddingBlock: "0",
	paddingInline: "s.x16",
});

export const buttonOutline = css({
	...buttonBoxCommon,
	width: "100%",
	paddingBlock: "0",
	paddingInline: "s.x16",
	borderWidth: "1px",
	borderColor: "s.border",
});

export const buttonGhostBox = css({
	...buttonBoxCommon,
	height: "s.control",
	paddingBlock: "0",
	paddingInline: "s.x16",
});

// --- Search header -----------------------------------------------------
// The sticky bar is the kit <Header> (c.header.* bg, sticky, top 0, z 10);
// the inner flex row keeps its own layout metrics here.
export const searchHeaderRow = css({
	display: "flex",
	alignItems: "center",
	gap: "s.x16",
	paddingBlock: "s.x08",
	paddingInline: "s.x16",
});

// The search field renders via the kit <SearchInput>; the Figma field
// gradient lives on the c.searchInput.bg token (theme/components/search-input),
// so this class only adds the row layout (stretch + 44px control height).
export const searchField = css({
	flex: "1",
	height: "s.control",
});

export const headerIcon = css({
	width: "32px",
	height: "32px",
	display: "block",
});

// --- Filter / nav icon buttons -------------------------------------
export const iconButton = css({
	position: "relative",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	width: "32px",
	height: "32px",
	border: "none",
	background: "transparent",
	cursor: "pointer",
	flexShrink: "0",
	_focusVisible: {
		outlineWidth: "2px",
		outlineStyle: "solid",
		outlineColor: "s.ink",
		outlineOffset: "2px",
	},
});

export const badgeCount = css({
	position: "absolute",
	top: "-4px",
	right: "-4px",
	width: "18px",
	height: "18px",
	borderRadius: "s.pill",
	background: "s.ink",
	color: "s.onInk",
	fontSize: "10px",
	lineHeight: "18px",
	textAlign: "center",
	fontWeight: "500",
});

// --- Cards -------------------------------------------------------------
// Visual frame carried on the kit <Card> (non-interactive: it lives inside
// the <Link>, which owns the focus/keyboard semantics).
export const cardBox = css({
	background: "s.bg.default.initial",
	borderWidth: "1px",
	borderColor: "s.border",
	borderRadius: "s.radius4",
	overflow: "hidden",
	flexShrink: "0",
	width: "100%",
});

// Carousel slot: keeps the card at its 318 min size on wide screens, but on
// mobile the card scales down to ~70% of the viewport instead of forcing
// horizontal overflow.
export const cardSlot = css({
	textDecoration: "none",
	color: "inherit",
	flexShrink: "0",
	width: "min(var(--sizes-s-card), 69.5vw)",
});

// Figma preview gradient, token-referenced (s.bg.default.initial →
// s.surface). Panda does not resolve s.* refs inside gradient values, so the
// stops point at the emitted CSS variables of those theme colors.
export const previewGradient =
	"linear-gradient(180deg, var(--colors-s-bg-default-initial) 0%, var(--colors-s-surface) 100%)";

export const filmImage = css({
	display: "block",
	width: "100%",
	height: "100%",
	objectFit: "cover",
});

// Dense-card leading thumbnail (s.thumb square, s.radius3 corner).
export const filmThumb = css({
	width: "s.thumb",
	height: "s.thumb",
	borderRadius: "s.radius3",
	objectFit: "cover",
	flexShrink: "0",
});

export const separator = css({
	height: "1px",
	width: "100%",
	background: "s.surface",
	border: "none",
	flexShrink: "0",
});

// --- Highlights --------------------------------------------------------
export const highlights = css({
	paddingBlock: "s.x24",
	paddingInline: "s.x16",
	display: "flex",
	flexDirection: "column",
	gap: "s.x16",
});

export const nameRow = css({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "10px",
});

// Card highlights: the title/series column beside the brand chip.
export const nameColumn = css({
	display: "flex",
	flexDirection: "column",
	gap: "s.x04",
	flex: "1",
	minWidth: "0",
});

export const brandChip = css({
	width: "s.brandChip",
	height: "s.brandChip",
	borderRadius: "s.radius3",
	background: "s.kodak",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: "0",
});

export const brandChipMark = css({
	width: "76%",
	height: "auto",
	display: "block",
});

// --- Headliner ---------------------------------------------------------
export const headliner = css({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "s.x20",
	paddingTop: "s.x16",
	paddingBottom: "0",
	paddingInline: "s.x16",
	textAlign: "center",
});

// Category push heading block (title + baseline).
export const pushHeading = css({
	display: "flex",
	flexDirection: "column",
	gap: "s.x04",
});

// Search empty state: "or" separator between the suggestions and the CTA.
export const searchOr = css({
	marginBlock: "s.x04",
});

export const logotype = css({
	width: "auto",
	height: "s.logo",
	display: "block",
});

// Centered mono baseline (landing heading + splash).
export const baselineCentered = css({
	textStyle: "baselineM",
	textAlign: "center",
	color: "s.ink",
});

// --- Typography (Figma text styles) ------------------------------------
// Vite doesn't transform a `textStyle` JSX prop (no panda plugin in the
// pipeline), so text styles are applied through css() classes — this is how
// `textStyle_*` classes end up on the rendered elements. Color inherits
// s.ink from the shell.
export const tHeadingM = css({ textStyle: "headingM" });
export const tTitleL = css({ textStyle: "titleL" });
export const tTitleS = css({ textStyle: "titleS" });
export const tBodyL = css({ textStyle: "bodyL" });
export const tBodyM = css({ textStyle: "bodyM" });
export const tBaselineM = css({ textStyle: "baselineM" });

// --- Category push -----------------------------------------------------
export const categoryPush = css({
	paddingBlock: "s.x32",
	paddingInline: "s.x16",
	display: "flex",
	flexDirection: "column",
	gap: "s.x24",
});

export const carousel = css({
	display: "flex",
	gap: "s.x16",
	overflowX: "auto",
	scrollbarWidth: "none",
	paddingBlock: "0",
	paddingInline: "s.x04",
	margin: "0 -4px",
	"&::-webkit-scrollbar": {
		display: "none",
	},
});

// --- Footer ------------------------------------------------------------
export const footer = css({
	background: "s.surface",
	padding: "s.x16",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "s.x16",
});

export const footerLinks = css({
	display: "flex",
	gap: "s.x24",
});

export const footerLink = css({
	textStyle: "linkL",
	color: "s.ink",
	textDecoration: "underline",
	textUnderlineOffset: "3px",
	cursor: "pointer",
	background: "none",
	border: "none",
	padding: "0",
});

export const footerLogo = css({
	height: "32px",
	width: "auto",
	display: "block",
});

// --- Search ------------------------------------------------------------
export const searchEmpty = css({
	paddingTop: "s.x16",
	paddingBottom: "s.x24",
	paddingInline: "s.x16",
	display: "flex",
	flexDirection: "column",
	gap: "s.x12",
});

export const resultsBar = css({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "s.x32",
	paddingBlock: "0",
	paddingInline: "s.x16",
	height: "s.control",
});

export const resultsList = css({
	paddingTop: "0",
	paddingBottom: "s.x24",
	paddingInline: "s.x16",
	display: "flex",
	flexDirection: "column",
	gap: "s.x08",
	position: "relative",
});

// --- Product detail ----------------------------------------------------
export const navBar = css({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	paddingBlock: "s.x08",
	paddingInline: "s.x16",
	background: "s.bg.default.initial",
	height: "64px",
});

export const detailPreview = css({
	width: "100%",
	height: "s.screen",
	background: previewGradient,
});

// Highlights block on the detail page (Figma: p 16).
export const detailHighlights = css({
	padding: "s.x16",
});

// "Product details" heading (centered, p 16).
export const detailsHeading = css({
	padding: "s.x16",
	textAlign: "center",
});

export const detailSection = css({
	padding: "s.x16",
	display: "flex",
	flexDirection: "column",
	gap: "s.x12",
});

export const inlineSubsection = css({
	display: "flex",
	alignItems: "center",
	gap: "s.x08",
});

export const inlineSubsectionTitle = css({
	width: "110px",
	flexShrink: "0",
	color: "s.inkMuted",
	textStyle: "bodyL",
});

export const chipRow = css({
	display: "flex",
	flexWrap: "wrap",
	gap: "s.x08",
});

// --- Download row ------------------------------------------------------
// Bespoke row. Its two-ends (space-between) layout is kept alive by the
// unlayered `.app-download-row` counter in app-button.css (the kit App's
// `& button` stretch atom would otherwise win as a higher-specificity
// utilities-layer rule).
export const downloadRow = css({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "s.x12",
	paddingBlock: "s.x16",
	paddingInline: "s.x12",
	borderRadius: "s.radius2",
	background: "s.surface",
	cursor: "pointer",
	border: "none",
	width: "100%",
	textAlign: "left",
	_focusVisible: {
		outlineWidth: "2px",
		outlineStyle: "solid",
		outlineColor: "s.ink",
		outlineOffset: "2px",
	},
});

export const downloadLeft = css({
	display: "flex",
	alignItems: "center",
	gap: "s.x12",
});

export const downloadIcon = css({
	width: "24px",
	height: "24px",
	display: "block",
	flexShrink: "0",
	color: "s.inkMuted",
});

export const downloadFile = css({
	display: "flex",
	alignItems: "center",
	gap: "s.x08",
	justifyContent: "flex-end",
	flex: "1",
	minWidth: "0",
});

export const downloadFilename = css({
	textStyle: "bodyL",
	color: "s.ink",
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis",
});

export const extPill = css({
	height: "s.chip",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	paddingBlock: "0",
	paddingInline: "s.x12",
	borderRadius: "s.pill",
	background: "s.surface",
	borderWidth: "1px",
	borderColor: "s.border",
	textStyle: "bodyL",
	color: "s.ink",
	flexShrink: "0",
});

// --- Clipped text ------------------------------------------------------
export const clippedText = css({
	textStyle: "bodyL",
	color: "s.ink",
	lineClamp: "2",
	overflow: "hidden",
	"&.expanded": {
		lineClamp: "unset",
		overflow: "visible",
	},
});

export const seeMore = css({
	textStyle: "seeMore",
	color: "s.inkMuted",
	background: "none",
	border: "none",
	padding: "0",
	cursor: "pointer",
	alignSelf: "flex-start",
	_disabled: {
		cursor: "default",
	},
});

// --- Splash ------------------------------------------------------------
export const splash = css({
	position: "absolute",
	inset: "0",
	backgroundSize: "cover",
	backgroundPosition: "center",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
});

export const splashLogo = css({
	width: "106px",
	height: "106px",
	marginTop: "256px",
	display: "block",
});
