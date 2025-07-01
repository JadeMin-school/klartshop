import t from "../../i18n";

import "./index.css";


export default function Guide() {
	return (
		<main className="guide">
			<h1>{ t("guide.title") }</h1>
			<p>{ t("guide.content") }</p>
		</main>
	);
}