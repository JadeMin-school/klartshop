import t from "../../i18n";

import "./index.css";


export default function Privacy() {
	return (
		<main className="privacy">
			<h1>{ t("privacy.title") }</h1>
			<p>{ t("privacy.content") }</p>
		</main>
	);
}