import type { CartItem } from "../../../../@types/Item.d.ts";
import type { Address } from "../../../../@types/Address.ts";

import { useState, useEffect } from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import {
	faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

import { Modal } from "../../../Modal/index.tsx";

import t from "../../../../i18n/index.tsx";

import "./index.css";



export default function CartButton() {
	const [modal, setModal] = useState(false);

	const getCartItems = () => {
		return JSON.parse(localStorage.getItem("cartItems") || "[]") as CartItem[];
	};
	const getAddresses = () => {
		return JSON.parse(localStorage.getItem("addresses") || "[]") as Address[];
	};


	return (
		<>
			<FA
				icon={faCartShopping}
				onClick={() => setModal(true)}
			/>
			<Modal
				id="cart"
				state={[modal, setModal]}
				title={ t("modal.cart.title").toString() }
			>
				<div className="items">
					{getCartItems().length > 0 ? (
						getCartItems().map((item, i) => (
							<div key={i}>
								<h3>{ item.name }</h3>
								<p>${ item.price }</p>
								<p>Quantity: { item.quantity }</p>
							</div>
						))
					) : (
						<p>{ t("modal.cart.empty").toString() }</p>
					)}
				</div>
				<div className="actions">
					{getCartItems().length > 0 && (
						<>
							<button
								onClick={() => {
									localStorage.removeItem("cartItems");
									setModal(false);
								}}
							>
								{ t("modal.cart.checkout").toString() }
							</button>
							<span className="total">
								${ getCartItems().reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2) }
							</span>
							<button
								onClick={() => {
									localStorage.removeItem("cartItems");
									setModal(false);
								}}
							>
								{ t("modal.cart.clear").toString() }
							</button>
						</>
					)}
				</div>
			</Modal>
		</>
	);
}