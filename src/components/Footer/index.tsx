import "./index.css";



export default function Footer() {
	return (
		<footer>
			<div className="links">
				<a href="/agreements">Agreements</a>
				<a href="/privacy">Privacy</a>
				<a href="/guide">Guide</a>
			</div>
			<div className="info">
				<span className="ceo">
					<span className="title">Klart# CEO </span>
					하츠네
				</span>
				<span className="address">
					<span className="title">Address </span>
					인천광역시 부평구 무네미로 448번길 56 (우 21417)
				</span>
				<span className="business">
					<span className="title">Business License </span>
					3939-0831-01
				</span>
				<span className="email">
					<span className="title">Email </span>
					reactProject0831@gmail.com
				</span>
				<span className="telephone">
					<span className="title">Telephone </span>
					010-0831-3939
				</span>
				<span className="license">
					<span className="title">License </span>
					&copy; 2025 hatsune. All rights reserved.
				</span>
			</div>
		</footer>
	);
}