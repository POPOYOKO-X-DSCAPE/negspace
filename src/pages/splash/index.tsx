import { useEffect } from "react";
import logo from "../../assets/logo.svg";
import texture from "../../assets/texture.png";
import { splash, splashLogo } from "../../styles";

const Splash = () => {
	useEffect(() => {
		const timer = window.setTimeout(() => {
			window.location.replace("#/");
		}, 1200);
		return () => window.clearTimeout(timer);
	}, []);

	return (
		<div
			className={splash}
			style={{ backgroundImage: `url(${texture})` }}
			aria-label="Negspace"
		>
			<img src={logo} alt="Negspace" className={splashLogo} />
		</div>
	);
};

export default Splash;
