import t from "../../i18n";

import "./index.css";



export default function NotFound() {
    return (
        <main className="not-found">
            <h1>{ t("404.title") }</h1>
            <p>{ t("404.message") }</p>
        </main>
    );
}