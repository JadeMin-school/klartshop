import type { KeyboardEventHandler } from 'react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./index.css";



interface Props {
	state: [boolean, (visible: boolean) => void];
}
export default function SearchModal({ state: [visible, setVisible] }: Props) {
	const navigate = useNavigate();
	const [query, setQuery] = useState('');

	const doSearch = () => {
		navigate(`/search?q=${encodeURIComponent(query)}`);
		setVisible(false);
	};
	const onEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === "Enter")
			doSearch();
	};


	return (
		<div className={`search-modal ${visible ? 'visible' : ''}`}>
			<div className="search-modal-content">
				<button
					className="close-button"
					onClick={() => setVisible(false)}
				>
					X
				</button>
				<input
					type="text"
					placeholder="Search..."
					value={query}
					onChange={e => setQuery(e.target.value)}
					onKeyDown={onEnter}
				/>
				<button
					className="search-button"
					onClick={() => doSearch()}
				>
					Search
				</button>
			</div>
		</div>
	);
}