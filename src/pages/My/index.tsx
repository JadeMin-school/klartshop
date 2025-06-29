import t from "../../i18n";

import "./index.css";



export default function My() {
	const username = localStorage.getItem("username")!;

	return (
		<main>
			<h1>
				{ t("my.page.title", { username }).toString() }
			</h1>
		</main>
	);
}