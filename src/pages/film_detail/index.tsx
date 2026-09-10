import { css } from "@styles";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Chip } from "../../components/chip";
import { Footer, Separator } from "../../components/footer";
import { Icon } from "../../components/icon";
import { getFilm } from "../../data/films";
import {
	brandChip,
	brandChipMark,
	chipRow,
	clippedText,
	detailHighlights,
	detailPreview,
	detailSection,
	detailsHeading,
	downloadFile,
	downloadFilename,
	downloadIcon,
	downloadLeft,
	downloadRow,
	extPill,
	highlights,
	inlineSubsection,
	inlineSubsectionTitle,
	nameRow,
	navBar,
	seeMore,
	tBaselineM,
	tBodyM,
	tHeadingM,
	tTitleL,
	tTitleS,
} from "../../styles";

const notFound = css({
	paddingBlock: "s.x32",
	paddingInline: "s.x16",
	display: "flex",
	flexDirection: "column",
	gap: "s.x16",
});

interface ISectionProps {
	title: string;
	children: React.ReactNode;
}

const Section = ({ title, children }: ISectionProps) => (
	<div className={detailSection}>
		<h2 className={tBaselineM}>{title}</h2>
		{children}
	</div>
);

const InlineRow = ({
	title,
	children,
}: { title: string; children: React.ReactNode }) => (
	<div className={inlineSubsection}>
		<span className={inlineSubsectionTitle}>{title}</span>
		<div className={chipRow}>{children}</div>
	</div>
);

const NotFound = () => (
	<div className={notFound}>
		<h1 className={tHeadingM}>Film not found</h1>
		<Link to="/" className={seeMore}>
			Back to home
		</Link>
	</div>
);

const FilmDetail = () => {
	const { id } = useParams();
	const film = id ? getFilm(id) : undefined;
	const navigate = useNavigate();
	const [expanded, setExpanded] = useState(false);

	if (!film) {
		return (
			<div>
				<div className={navBar}>
					<button
						type="button"
						aria-label="Back"
						onClick={() => navigate(-1)}
					>
						<Icon name="back" size={24} />
					</button>
					<button type="button" aria-label="Share" onClick={() => {}}>
						<Icon name="share" size={24} />
					</button>
				</div>
				<NotFound />
			</div>
		);
	}

	return (
		<div>
			<div className={navBar}>
				<button
					type="button"
					aria-label="Back"
					onClick={() => navigate(-1)}
				>
					<Icon name="back" size={24} />
				</button>
				<button type="button" aria-label="Share" onClick={() => {}}>
					<Icon name="share" size={24} />
				</button>
			</div>
			<div className={detailPreview}>
				<img
					src={film.image}
					alt={film.commercialName}
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			</div>
			<div className={`${highlights} ${detailHighlights}`}>
				<div className={nameRow}>
					<h1 className={tTitleL} style={{ flex: 1, minWidth: 0 }}>
						{film.commercialName}
					</h1>
					<span className={brandChip}>
						<img
							src={film.brand.logo}
							alt={film.brand.name}
							className={brandChipMark}
						/>
					</span>
				</div>
				<span className={tBaselineM}>{film.series}</span>
				<div className={chipRow}>
					{film.chips.map((chip) => (
						<Chip key={chip.label} icon={chip.icon}>
							{chip.label}
						</Chip>
					))}
				</div>
			</div>
			<Separator />
			<h2 className={`${tTitleS} ${detailsHeading}`}>
				Product details
			</h2>
			<Section title="Available formats">
				<InlineRow title="Sheet">
					{film.formats.sheet.map((format) => (
						<Chip key={format}>{format}</Chip>
					))}
				</InlineRow>
				<InlineRow title="Rolls">
					{film.formats.rolls.map((roll) => (
						<Chip key={roll}>{roll}</Chip>
					))}
				</InlineRow>
			</Section>
			<Separator />
			<Section title="Description">
				<p className={clippedText} data-expanded={expanded}>
					{film.description}
				</p>
				<button
					type="button"
					className={seeMore}
					onClick={() => setExpanded((value) => !value)}
					aria-expanded={expanded}
				>
					{expanded ? "See less" : "See more"}
				</button>
			</Section>
			<Separator />
			<Section title="Performances">
				<InlineRow title="Granularity">
					<Chip>{film.performance.granularity}</Chip>
				</InlineRow>
				<InlineRow title="Film speed">
					<Chip>{film.performance.filmSpeed}</Chip>
				</InlineRow>
			</Section>
			<Separator />
			<Section title="Technical sheet">
				<button
					type="button"
					className={`${downloadRow} app-download-row`}
					onClick={() => {}}
				>
					<div className={downloadLeft}>
						<Icon
							name="downloadable-sheet"
							size={24}
							className={downloadIcon}
						/>
						<span className={tBodyM}>{film.techSheet.size}</span>
					</div>
					<div className={downloadFile}>
						<span className={downloadFilename}>
							{film.techSheet.filename}
						</span>
						<span className={extPill}>{film.techSheet.extension}</span>
					</div>
				</button>
			</Section>
			<Separator />
			<Footer />
		</div>
	);
};

export default FilmDetail;
