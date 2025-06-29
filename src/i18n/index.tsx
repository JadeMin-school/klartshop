import { createIntl, createIntlCache } from 'react-intl';

import ko_KR from "./ko_KR.json";
import en_US from "./en_US.json";
import ja_JP from "./ja_JP.json";
import zh_CN from "./zh_CN.json";
import fr_FR from "./fr_FR.json";



export const messages = {
	"ko-KR": ko_KR,
	"en-US": en_US,
	"ja-JP": ja_JP,
	"zh-CN": zh_CN,
	"fr-FR": fr_FR,
} as const;
export type Languages = keyof typeof messages;

const storedLang = localStorage.getItem("lang") as Languages | null;
if (!storedLang || !(storedLang in messages)) {
	localStorage.setItem("lang", "ko-KR");
}

const cache = createIntlCache();
let intl = createIntl(
	{
		locale: storedLang || "ko-KR",
		messages: messages[storedLang || "ko-KR"],
	},
	cache
);

export function changeLanguage(lang: Languages) {
	localStorage.setItem("lang", lang);

	intl = createIntl(
		{
			locale: lang,
			messages: messages[lang],
		},
		cache
	);
}

export function t(id: string, values?: {}) {
	return intl.formatMessage({ id }, {
		p: (chunks: Array<string | React.ReactNode>) => <p>{ chunks }</p>,
		br: <br/>,
		...values
	});
}

export default t;