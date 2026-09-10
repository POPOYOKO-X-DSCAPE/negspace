import { defineSemanticTokens } from "@pandacss/dev";
import { brand } from "../../brand";

// Purposeful aliases built only from brand.* . Single light theme — no _dark yet.
export const colors = defineSemanticTokens.colors({
	ink: brand.colors.ink,
	inkSoft: brand.colors.inkSoft,
	inkMuted: brand.colors.inkMuted,
	placeholder: brand.colors.placeholder,
	surface: brand.colors.surface,
	border: brand.colors.border,
	kodak: brand.colors.kodak,
	onInk: brand.colors.onInk,

	bg: {
		default: {
			initial: brand.colors.bg,
			hover: brand.colors.surface,
			active: brand.colors.surface,
		},
		elevated: {
			initial: brand.colors.bg,
			hover: brand.colors.surface,
			active: brand.colors.surface,
		},
		actionLow: {
			initial: brand.colors.surface,
			hover: brand.colors.border,
		},
		actionHigh: {
			initial: brand.colors.ink,
			hover: brand.colors.inkSoft,
			active: brand.colors.ink,
		},
	},
	fg: {
		default: {
			initial: brand.colors.ink,
			hover: brand.colors.inkSoft,
			active: brand.colors.inkMuted,
		},
		elevated: {
			initial: brand.colors.ink,
			hover: brand.colors.inkSoft,
			active: brand.colors.inkMuted,
		},
		actionLow: {
			initial: brand.colors.ink,
			hover: brand.colors.inkSoft,
		},
		actionHigh: {
			initial: brand.colors.onInk,
			hover: brand.colors.onInk,
			active: brand.colors.onInk,
		},
	},
});

export const { bg, fg } = colors;
