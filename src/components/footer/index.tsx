import { css } from "@styles";
import logotype from "../../assets/logotype.svg";
import {
	footer,
	footerLink,
	footerLinks,
	footerLogo,
	separator,
	tBodyM,
} from "../../styles";

// 1px surface divider (design-spec separator).
export const Separator = () => <div className={separator} aria-hidden="true" />;

// Footer links are visual stubs in v1 (PRD — no routes behind them).
const stubLink = css({
	cursor: "pointer",
});

export const Footer = () => {
	return (
		<footer className={footer}>
			<div className={footerLinks}>
				<button type="button" className={footerLink} onClick={() => {}}>
					Terms &amp; Privacy
				</button>
				<button type="button" className={footerLink} onClick={() => {}}>
					Contact us
				</button>
			</div>
			<img src={logotype} alt="Negspace" className={footerLogo} />
			<span className={tBodyM}>©2026 Negspace — all rights reserved</span>
		</footer>
	);
};
