import { Header, SearchInput } from "@packages/ui";
import {
	badgeCount,
	headerIcon,
	iconButton,
	searchField,
	searchHeaderRow,
} from "../../styles";
import { Icon } from "../icon";

interface ISearchHeaderProps {
	query?: string;
	onInput?: (value: string) => void;
	placeholder?: string;
	showFilters?: boolean;
	filterCount?: number;
}

export const SearchHeader = ({
	query,
	onInput,
	placeholder = "Search films",
	showFilters,
	filterCount = 0,
}: ISearchHeaderProps) => {
	return (
		<Header>
			<div className={searchHeaderRow}>
				<SearchInput
					className={searchField}
					value={query ?? ""}
					placeholder={placeholder}
					aria-label="Search films"
					icon={<Icon name="search" size={24} />}
					onFocus={() => {
						if (query === undefined) onInput?.("");
					}}
					onChange={(value) => onInput?.(value)}
				/>
				{showFilters ? (
					<button
						type="button"
						className={iconButton}
						aria-label="Filters"
					>
						<Icon name="filters" size={32} className={headerIcon} />
						{filterCount > 0 ? (
							<span className={badgeCount}>{filterCount}</span>
						) : null}
					</button>
				) : null}
			</div>
		</Header>
	);
};
