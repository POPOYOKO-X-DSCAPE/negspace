import filmPortra160nc from "../assets/film-portra-160nc.png";
import kodakMark from "../assets/kodak-mark.png";

export type ChipIcon =
	| "color"
	| "aperture"
	| "day-light"
	| "indoor-light"
	| "process";

export interface FilmChip {
	label: string;
	icon: ChipIcon;
}

export interface Film {
	id: string;
	series: string;
	commercialName: string;
	brand: { name: string; logo: string };
	image: string;
	chips: FilmChip[];
	formats: { sheet: string[]; rolls: string[] };
	description: string;
	performance: { granularity: string; filmSpeed: string };
	techSheet: { filename: string; size: string; extension: string };
}

// v1: single film — Kodak Portra 160NC (design content, PRD OQ-2/OQ-3).
export const films: Film[] = [
	{
		id: "kodak-portra-160nc",
		series: "KODAK PORTRA",
		commercialName: "Portra 160NC",
		brand: { name: "Kodak", logo: kodakMark },
		image: filmPortra160nc,
		chips: [
			{ label: "Color", icon: "color" },
			{ label: "160", icon: "aperture" },
			{ label: "Daylight", icon: "day-light" },
			{ label: "C41", icon: "process" },
		],
		formats: {
			sheet: ['4X5"', '5X4"', '8X10"'],
			rolls: ["32MM", "120MM", "220MM"],
		},
		description:
			"Kodak Portra 160 NC est une pellicule couleur négative 35 mm pensée pour un rendu doux, naturel et fidèle. Elle offre une faible sensibilité ISO 160, idéale pour la photographie en lumière du jour, les portraits et les scènes où l'on recherche une pellicule fine et des couleurs fidèles, même en lumière mixte.",
		performance: { granularity: "Low", filmSpeed: "160 ISO" },
		techSheet: {
			filename: "Kodak P160NC technical sheet.pdf",
			size: "8.6 MB",
			extension: ".pdf",
		},
	},
];

export const getFilm = (id: string) => films.find((film) => film.id === id);

const matchText = (film: Film, query: string) => {
	const haystack = [film.commercialName, film.series, ...film.chips.map((chip) => chip.label)]
		.join(" ")
		.toLowerCase();
	return haystack.includes(query.trim().toLowerCase());
};

export const searchFilms = (query: string) => {
	if (!query.trim()) return [];
	return films.filter((film) => matchText(film, query));
};
