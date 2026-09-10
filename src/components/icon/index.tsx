import type { ComponentType, CSSProperties, SVGProps } from "react";
import ApertureIcon from "../../assets/icon-aperture.svg?react";
import BackIcon from "../../assets/icon-back.svg?react";
import CloseIcon from "../../assets/icon-close.svg?react";
import ColorIcon from "../../assets/icon-color.svg?react";
import DayLightIcon from "../../assets/icon-day-light.svg?react";
import DownloadableSheetIcon from "../../assets/icon-downloadable-sheet.svg?react";
import FiltersIcon from "../../assets/icon-filters.svg?react";
import IndoorLightIcon from "../../assets/icon-indoor-light.svg?react";
import ProcessIcon from "../../assets/icon-process.svg?react";
import SearchIcon from "../../assets/icon-search.svg?react";
import ShareIcon from "../../assets/icon-share.svg?react";
import SortAscendingIcon from "../../assets/icon-sort-ascending.svg?react";
import SortDescendingIcon from "../../assets/icon-sort-descending.svg?react";

export type IconName =
	| "aperture"
	| "back"
	| "close"
	| "color"
	| "day-light"
	| "downloadable-sheet"
	| "filters"
	| "indoor-light"
	| "process"
	| "search"
	| "share"
	| "sort-ascending"
	| "sort-descending";

const icons: Record<IconName, ComponentType<SVGProps<SVGSVGElement>>> = {
	aperture: ApertureIcon,
	back: BackIcon,
	close: CloseIcon,
	color: ColorIcon,
	"day-light": DayLightIcon,
	"downloadable-sheet": DownloadableSheetIcon,
	filters: FiltersIcon,
	"indoor-light": IndoorLightIcon,
	process: ProcessIcon,
	search: SearchIcon,
	share: ShareIcon,
	"sort-ascending": SortAscendingIcon,
	"sort-descending": SortDescendingIcon,
};

interface IIconProps {
	name: IconName;
	size?: number;
	className?: string;
	style?: CSSProperties;
}

export const Icon = ({ name, size = 24, className, style }: IIconProps) => {
	const Glyph = icons[name];
	return (
		<Glyph
			className={className}
			style={{ width: size, height: size, ...style }}
			aria-hidden="true"
		/>
	);
};
