import { Button } from "@packages/ui";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import logoAsset from "../../assets/logo.svg";
import { FilmCard } from "../../components/film_card";
import { Footer, Separator } from "../../components/footer";
import { SearchHeader } from "../../components/search_header";
import { films } from "../../data/films";
import {
	baselineCentered,
	buttonFull,
	buttonOutline,
	carousel,
	categoryPush,
	headliner,
	logotype,
	pushHeading,
	tBodyM,
	tHeadingM,
} from "../../styles";

const POSITIONS = [0, 1, 2, 3, 4] as const;

interface ICategoryPushProps {
	title: string;
	scrollOnSeeMore?: boolean;
}

const CategoryPush = ({
	title,
	scrollOnSeeMore,
}: ICategoryPushProps) => {
	const ref = useRef<HTMLDivElement>(null);
	return (
		<section className={categoryPush}>
			<div className={pushHeading}>
				<h2 className={tHeadingM}>{title}</h2>
				<span className={tBodyM}>
					Discover the latest films photographers can use.
				</span>
			</div>
			{/* v1: one film × 5 slots to fill the 5-card row in the design. */}
			<div className={carousel} ref={ref}>
				{POSITIONS.map((slot) => (
					<FilmCard
						key={`${slot}-${films[slot % films.length].id}`}
						film={films[slot % films.length]}
					/>
				))}
			</div>
			<Button
				level="secondary"
				className={buttonOutline}
				onClick={() =>
					ref.current?.scrollTo({ left: 0, behavior: "smooth" })
				}
			>
				{scrollOnSeeMore ? "Explore" : "See more"}
			</Button>
		</section>
	);
};

const Landing = () => {
	const navigate = useNavigate();
	return (
		<div>
			<SearchHeader
				onInput={(value) =>
					navigate(`/search?q=${encodeURIComponent(value)}`)
				}
			/>
			<div className={headliner}>
				<img src={logoAsset} alt="Negspace" className={logotype} />
				<h1 className={tHeadingM} style={{ textAlign: "center" }}>
					The Analog Film Database
				</h1>
				<p className={baselineCentered}>
					THE WORLD OF FILM IS ACCESSIBLE TO EVERYONE. NAVIGATING
					COMPLEX DATA FINALLY BECOMES FLUID
				</p>
				<Button
					level="primary"
					className={buttonFull}
					onClick={() =>
						document
							.getElementById("category-1")
							?.scrollIntoView({ behavior: "smooth" })
					}
				>
					Explore films
				</Button>
			</div>
			<Separator />
			<div id="category-1">
				<CategoryPush title="Latest added" />
			</div>
			<Separator />
			<CategoryPush title="Trending" />
			<Separator />
			<Footer />
		</div>
	);
};

export default Landing;
