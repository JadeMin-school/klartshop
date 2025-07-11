import type { MouseEventHandler, FormEventHandler } from 'react';
import type { Address } from "../../@types/Address";

import { useState } from 'react';

import { Modal } from "../../components/Modal";

import t from "../../i18n";

import "./index.css";



export default function My() {
	const [modal, setModal] = useState(false);
	const [selected, setSelected] = useState("default");

	const username = localStorage.getItem("username")!;

	const getAddresses = () => {
		return JSON.parse(localStorage.getItem("addresses") || "[]") as Address[];
	};
	const onAdd: MouseEventHandler<HTMLButtonElement> = (e) => {
		setModal(true);
	};
	const onDelete: MouseEventHandler<HTMLButtonElement> = () => {
		const temp = getAddresses();
		temp.splice(
			temp.findIndex(addr => addr.id === selected),
			1
		);
		localStorage.setItem("addresses", JSON.stringify(temp));
		setSelected("default");
	};
	const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		const temp = getAddresses();
		temp.push({
			id: `${temp.length + 1}`,
			street: e.currentTarget.street.value as string,
			detail: e.currentTarget.detail.value as string,
		} satisfies Address);
		localStorage.setItem("addresses", JSON.stringify(temp));

		setModal(false);
	};


	return (
		<main className="my">
			<h1>
				{ t("my.page.title", { username }) }
			</h1>
			<hr/>
			<h2>
				{ t("my.page.address.title") }
			</h2>
			<select
				className="addresses"
				defaultValue="default"
				value={selected}
				onChange={e => setSelected(e.target.value)}
			>
				<option value="default" hidden>
					{ t("my.page.address.placeholder") }
				</option>
				{getAddresses().map(addr => (
					<option key={addr.id} value={addr.id}>
						{`${addr.street}, ${addr.detail}`}
					</option>
				))}
			</select>
			<div className="actions">
				<button
					className="add"
					onClick={onAdd}
				>
					{ t("my.page.address.add") }
				</button>
				<button
					className="delete"
					disabled={selected === "default"}
					onClick={onDelete}
				>
					{ t("my.page.address.delete") }
				</button>
			</div>
			<Modal
				id="address"
				state={[modal, setModal]}
				title={ t("modal.my.address.title").toString() }
			>
				<form onSubmit={onSubmit}>
					<label>
						{ t("modal.my.address.street") }
						<input
							type="text"
							name="street"
							required
						/>
					</label>
					<label>
						{ t("modal.my.address.detail") }
						<input
							type="text"
							name="detail"
							required
						/>
					</label>
					<label>
						<button type="submit">
							{ t("modal.my.address.add") }
						</button>
					</label>
				</form>
			</Modal>
		</main>
	);
}