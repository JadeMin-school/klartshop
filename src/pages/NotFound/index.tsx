import t from "../../i18n";



export default function NotFound() {
    return (
        <main>
            <h1>{ t("404.title") }</h1>
            <p>{ t("404.message") }</p>
        </main>
    );
}