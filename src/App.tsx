import {
	HashRouter,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import { App as AppShell } from "@packages/ui";
import Landing from "./pages/landing";
import Search from "./pages/search";
import Splash from "./pages/splash";
import FilmDetail from "./pages/film_detail";
import { appScroll, appShell } from "./styles";
import "./app-button.css";

// Kit <App> is a non-scrolling flex column, so the app content scrolls in a
// dedicated child. Remounting it per navigation (key = location.key) resets
// the scroll position to the top on every route change.
const Shell = () => {
	const location = useLocation();
	return (
		<AppShell className={appShell}>
			<div key={location.key} className={appScroll}>
				<Routes>
					<Route path="/splash" element={<Splash />} />
					<Route path="/" element={<Landing />} />
					<Route path="/search" element={<Search />} />
					<Route path="/film/:id" element={<FilmDetail />} />
					<Route path="*" element={<Landing />} />
				</Routes>
			</div>
		</AppShell>
	);
};

export const App = () => {
	return (
		<HashRouter>
			<Shell />
		</HashRouter>
	);
};

export default App;
