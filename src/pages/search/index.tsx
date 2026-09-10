import { Button } from "@packages/ui";
import { useSearchParams } from "react-router-dom";
import { FilmCard } from "../../components/film_card";
import { Footer, Separator } from "../../components/footer";
import { SearchHeader } from "../../components/search_header";
import { searchFilms } from "../../data/films";
import {
	buttonFull,
	buttonGhostBox,
	buttonOutline,
	resultsBar,
	resultsList,
	searchEmpty,
	searchOr,
	tBodyL,
	tHeadingM,
} from "../../styles";

const SUGGESTIONS = ["Kodak Gold 200", "Portra", "Color 35mm"];

const Search = () => {
	const [params, setParams] = useSearchParams();
	const query = params.get("q") ?? "";
	const results = searchFilms(query);
	const hasQuery = query.trim().length > 0;
	const showEmpty = !hasQuery || results.length === 0;

	const setQuery = (value: string) => {
		setParams(value.trim() ? { q: value } : {}, {
			replace: true,
		});
	};

	return (
		<div>
			<SearchHeader
				query={query}
				onInput={setQuery}
				showFilters
				filterCount={0}
			/>

			{showEmpty ? (
				<div className={searchEmpty}>
					<h1 className={tHeadingM} style={{ textAlign: "center" }}>
						Start typing to explore
					</h1>
					<p className={tBodyL} style={{ textAlign: "center" }}>
						Here's what you can search
					</p>
					{SUGGESTIONS.map((suggestion) => (
						<Button
							key={suggestion}
							level="secondary"
							className={buttonOutline}
							onClick={() => setQuery(suggestion)}
						>
							{suggestion}
						</Button>
					))}
					<p
						className={`${tBodyL} ${searchOr}`}
						style={{ textAlign: "center" }}
					>
						or
					</p>
					<Button
						level="primary"
						className={buttonFull}
						onClick={() => window.location.replace("#/")}
					>
						Explore by categories
					</Button>
				</div>
			) : (
				<>
					<div className={resultsBar}>
						<span className={tBodyL}>
							{results.length} result{results.length === 1 ? "" : "s"}{" "}
							found
						</span>
						<Button
							level="ghost"
							className={buttonGhostBox}
							onClick={() => {}}
						>
							Sort
						</Button>
					</div>
					<Separator />
					<div className={resultsList}>
						{results.map((film) => (
							<FilmCard key={film.id} film={film} dense />
						))}
					</div>
					<Footer />
				</>
			)}
		</div>
	);
};

export default Search;
