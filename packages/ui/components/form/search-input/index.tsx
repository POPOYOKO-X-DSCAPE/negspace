import { css } from "@styles";
import classNames from "classnames";
import type { ChangeEvent, FocusEvent, ReactNode } from "react";

const fieldWrapper = css({
	height: "100%",
	display: "flex",
	alignItems: "center",
	gap: "c.searchInput.gap",
	// `background` (not backgroundColor): c.searchInput.bg is a color or a
	// gradient token depending on the project theme.
	background: "c.searchInput.bg",
	borderRadius: "c.searchInput.radius",
	padding: "c.searchInput.padding",
	minWidth: 0,
});

const glyph = css({
	display: "block",
	flexShrink: 0,
	color: "c.searchInput.fg",
	opacity: 0.6,
});

const input = css({
	flex: 1,
	minWidth: 0,
	border: "none",
	outline: "none",
	background: "transparent",
	font: "inherit",
	color: "c.searchInput.fg",
	_placeholder: {
		opacity: 0.55,
	},
});

interface ISearchInputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	"aria-label": string;
	onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
	icon?: ReactNode;
	className?: string;
}

export const SearchInput = ({
	value,
	onChange,
	placeholder,
	onFocus,
	icon,
	className,
	...aria
}: ISearchInputProps) => {
	return (
		<label className={classNames(fieldWrapper, className)}>
			{icon ? <span className={glyph}>{icon}</span> : null}
			<input
				type="search"
				value={value}
				placeholder={placeholder}
				onFocus={onFocus}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					onChange(event.target.value)
				}
				className={input}
				{...aria}
			/>
		</label>
	);
};
