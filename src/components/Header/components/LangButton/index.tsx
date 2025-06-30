import type { Languages } from "../../../../i18n";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import {
	faGlobe,
} from '@fortawesome/free-solid-svg-icons';

import { changeLanguage } from "../../../../i18n";

import { Modal } from "../../../Modal";

import KoreaFlag from "../../../../assets/flags/korea.webp";
import JapanFlag from "../../../../assets/flags/japan.png";
import ChinaFlag from "../../../../assets/flags/china.png";
import USAFlag from "../../../../assets/flags/usa.png";
import FranceFlag from "../../../../assets/flags/france.png";

import t from "../../../../i18n";

import "./index.css";



export default function LangButton() {
	const [modal, setModal] = useState(false);
	const navigate = useNavigate();

	const onChangeLang = (lang: Languages) => {
		changeLanguage(lang);
		navigate(0);
	};


	return (
		<>
			<FA icon={faGlobe}
				onClick={() => setModal(true)}
			/>
			<Modal
				id="lang"
				title={`${t("modal.languages.title")}`}
				state={[modal, setModal]}
			>
				<>
					<p>{ t("modal.languages.description") }</p>
					<div className="langs">
						<button
							onClick={() => onChangeLang("ko-KR")}
						>
							<img src={KoreaFlag} alt="Korean"/>
						</button>
						<button
							onClick={() => onChangeLang("ja-JP")}
						>
							<img src={JapanFlag} alt="Japanese"/>
						</button>
						<button
							onClick={() => onChangeLang("zh-CN")}
						>
							<img src={ChinaFlag} alt="Chinese"/>
						</button>
						<button
							onClick={() => onChangeLang("en-US")}
						>
							<img src={USAFlag} alt="English"/>
						</button>
						<button
							onClick={() => onChangeLang("fr-FR")}
						>
							<img src={FranceFlag} alt="French"/>
						</button>
					</div>
				</>
			</Modal>
		</>
	);
}