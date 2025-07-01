import t from "../../i18n";

import "./index.css";


export default function Agreements() {
	return (
		<main className="agreements">
			<h1>{ t("agreements.title") }</h1>
			<p>{ t("agreements.content") }</p>
		</main>
	);
}