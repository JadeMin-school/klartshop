import type { KeyboardEventHandler } from 'react';

import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import {
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import { Modal } from "../../../Modal";

import t from "../../../../i18n";

import "./index.css";



export default function SearchButton() {
	const navigate = useNavigate();
	const inputRef = useRef<HTMLInputElement>(null);
	const [modal, setModal] = useState(false);
	const [query, setQuery] = useState('');

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, [modal]);

	const onOpenModal = () => {
		setModal(true);
	};
	const doSearch = () => {
		setQuery('');
		navigate(`/search?q=${encodeURIComponent(query)}`);
		setModal(false);
	};
	const onEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === "Enter")
			doSearch();
	};


	return (
		<>
			<FA
				icon={faMagnifyingGlass}
				onClick={onOpenModal}
			/>
			<Modal
				id="search"
				title={t("modal.search.title").toString()}
				state={[modal, setModal]}
				onClose={() => setQuery('')}
			>
				<input
					type="text"
					placeholder={t("modal.search.placeholder").toString()}
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyDown={onEnter}
					ref={inputRef}
				/>
				{ t("modal.search.description").toString() }
			</Modal>
		</>
	);
}