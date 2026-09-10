import { Card } from "@packages/ui";
import { Link } from "react-router-dom";
import type { Film } from "../../data/films";
import {
	brandChip,
	brandChipMark,
	cardBox,
	cardSlot,
	chipRow,
	filmImage,
	filmThumb,
	highlights,
	nameColumn,
	nameRow,
	previewGradient,
	tBaselineM,
	tTitleL,
} from "../../styles";
import { Chip } from "../chip";
import { Separator } from "../footer";

interface IHighlightsProps {
	film: Film;
	/** Dense card: leading 56px thumbnail. */
	miniature?: boolean;
}

export const Highlights = ({ film, miniature }: IHighlightsProps) => {
	return (
		<div className={highlights}>
			<div className={nameRow}>
				{miniature ? (
					<img
						src={film.image}
						alt={film.commercialName}
						className={filmThumb}
					/>
				) : null}
				<div className={nameColumn}>
					<div className={nameRow}>
						<span
							className={tTitleL}
							style={{ overflow: "hidden", textOverflow: "ellipsis" }}
						>
							{film.commercialName}
						</span>
						<span className={brandChip}>
							<img
								src={film.brand.logo}
								alt={film.brand.name}
								className={brandChipMark}
							/>
						</span>
					</div>
					<span className={tBaselineM}>{film.series}</span>
				</div>
			</div>
			{!miniature ? (
				<div className={chipRow}>
					{film.chips.map((chip) => (
						<Chip key={chip.label} icon={chip.icon}>
							{chip.label}
						</Chip>
					))}
				</div>
			) : null}
		</div>
	);
};

interface IFilmCardProps {
	film: Film;
	dense?: boolean;
}

export const FilmCard = ({ film, dense }: IFilmCardProps) => {
	return (
		<Link
			to={`/film/${film.id}`}
			className={dense ? undefined : cardSlot}
			style={{ textDecoration: "none", color: "inherit" }}
		>
			<Card className={cardBox}>
				{!dense ? (
					<div
						style={{
							width: "100%",
							aspectRatio: "1 / 1",
							background: previewGradient,
						}}
					>
						<img
							src={film.image}
							alt={film.commercialName}
							className={filmImage}
						/>
					</div>
				) : null}
				<Separator />
				<Highlights film={film} miniature={dense} />
			</Card>
		</Link>
	);
};
