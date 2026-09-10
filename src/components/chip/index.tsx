import { Badge } from "@packages/ui";
import { css } from "@styles";
import type React from "react";
import type { FilmChip } from "../../data/films";
import { Icon } from "../icon";

// Figma chip (design-spec §5): pill h-32, bg surface, ink body/l.
// Height/bg/radius/color come from the kit Badge via c.badge.*
// (theme/components/badge/tokens.ts); typography + paddings ride on these
// project classes (plain vs icon-prefixed box).
const chipBox = css({
	textStyle: "bodyL",
});

const chipPlain = css({
	paddingBlock: "0",
	paddingInline: "s.x12",
});

const chipWithIcon = css({
	paddingBlock: "0",
	paddingInlineStart: "s.x04",
	paddingInlineEnd: "s.x12",
	gap: "s.x04",
});

const chipIcon = css({
	width: "24px",
	height: "24px",
	display: "block",
	flexShrink: "0",
});

interface IChipProps {
	children: React.ReactNode;
	icon?: FilmChip["icon"];
	/** Icon variant has tighter left padding + a 24px glyph. */
}

export const Chip = ({ children, icon }: IChipProps) => {
	return (
		<Badge
			className={
				!icon ? `${chipBox} ${chipPlain}` : `${chipBox} ${chipWithIcon}`
			}
		>
			{icon ? (
				<Icon name={icon} size={24} className={chipIcon} />
			) : null}
			{children}
		</Badge>
	);
};
