import { Link } from 'react-router-dom';

import t from "../../i18n";

import "./index.css";



export default function Footer() {
	return (
		<footer>
			<div className="links">
				<Link to="/agreements">{ t("footer.agreements.title") }</Link>
				<Link to="/privacy">{ t("footer.privacy.title") }</Link>
				<Link to="/guide">{ t("footer.guide.title") }</Link>
			</div>
			<div className="info">
				<span className="ceo">
					<span className="title">
						{ t("footer.ceo.title") }
					</span>
					{ t("footer.ceo.content") }
				</span>
				<span className="address">
					<span className="title">
						{ t("footer.address.title") }
					</span>
					{ t("footer.address.content") }
				</span>
				<span className="business">
					<span className="title">
						{ t("footer.businessNumber.title") }
					</span>
					{ t("footer.businessNumber.content") }
				</span>
				<span className="email">
					<span className="title">
						{ t("footer.email.title") }
					</span>
					{ t("footer.email.content") }
				</span>
				<span className="telephone">
					<span className="title">
						{ t("footer.telephone.title") }
					</span>
					{ t("footer.telephone.content") }
				</span>
				<span className="license">
					<span className="title">{ t("footer.license.title") }</span>
					&copy; 2025 hatsune. All rights reserved.
				</span>
			</div>
		</footer>
	);
}