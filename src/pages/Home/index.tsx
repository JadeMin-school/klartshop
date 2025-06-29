import t from "../../i18n";

import "./index.css";



export default function Home() {
	return (
		<main className="home">
			<h1>{ t("home.title") }</h1>
			{ t("home.message") }
		</main>
	);
}