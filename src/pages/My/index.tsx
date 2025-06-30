import type { FormEventHandler } from 'react';
import type { Address } from "../../@types/Address";

import { useState } from 'react';

import { Modal } from "../../components/Modal";

import t from "../../i18n";

import "./index.css";



export default function My() {
	const [modal, setModal] = useState(false);
	const [selected, setSelected] = useState("default");

	const username = localStorage.getItem("username")!;
	const addresses = JSON.parse(localStorage.getItem("addresses") || "[]") as Address[];

	const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		addresses.push({
			id: `${addresses.length + 1}`,
			street: e.currentTarget.street.value as string,
			detail: e.currentTarget.detail.value as string,
		} satisfies Address);
		localStorage.setItem("addresses", JSON.stringify(addresses));

		setModal(false);
	};


	return (
		<main className="my">
			<h1>
				{ t("my.page.title", { username }).toString() }
			</h1>
			<hr/>
			<h2>
				{ t("my.page.address.title").toString() }
			</h2>
			<select
				className="addresses"
				defaultValue="default"
				value={selected}
				onChange={e => setSelected(e.target.value)}
			>
				<option value="default" hidden>
					{ t("my.page.address.placeholder").toString() }
				</option>
				{addresses.map((addr) => (
					<option key={addr.id} value={addr.id}>
						{`${addr.street}, ${addr.detail}`}
					</option>
				))}
			</select>
			<div className="actions">
				<button
					className="add"
					onClick={() => setModal(true)}
				>
					{ t("my.page.address.add").toString() }
				</button>
				<button
					className="delete"
					disabled={selected === "default"}
					onClick={() => {
						addresses.splice(
							addresses.findIndex(addr => addr.id === selected),
							1
						);
						localStorage.setItem("addresses", JSON.stringify(addresses));
						setSelected("default");
					}}
				>
					{ t("my.page.address.delete").toString() }
				</button>
			</div>
			<Modal
				id="address"
				state={[modal, setModal]}
				title={ t("modal.my.address.title").toString() }
			>
				<form onSubmit={onSubmit}>
					<label>
						{ t("modal.my.address.street").toString() }
						<input
							type="text"
							name="street"
							required
						/>
					</label>
					<label>
						{ t("modal.my.address.detail").toString() }
						<input
							type="text"
							name="detail"
							required
						/>
					</label>
					<label>
						<button type="submit">
							{ t("modal.my.address.add").toString() }
						</button>
					</label>
				</form>
			</Modal>
		</main>
	);
}