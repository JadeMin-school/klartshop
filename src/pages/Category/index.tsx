import type { Item, CartItem } from "../../@types/Item";

import { useParams } from 'react-router-dom';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import {
	faCartPlus,
} from '@fortawesome/free-solid-svg-icons';

import { type Categories } from "../../@types/Categories.ts";

import { dummyItems } from "../../assets/samples/items.ts";

import t from "../../i18n";

import "./index.css";





export default function Category() {
	const { category } = useParams<{ category?: Categories }>();

	const filteredItems = dummyItems
		.filter(item => category === "ALL" || item.category === category);

	const getCartItems = () => {
		return JSON.parse(localStorage.getItem("cartItems") || "[]") as CartItem[];
	};
	const addToCart = (item: Item) => {
		const temp = getCartItems();
		const existingItem = temp.find(cartItem => cartItem.id === item.id);
		
		if (existingItem) {
			existingItem.quantity += 1;
		} else {
			temp.push({
				...item,
				quantity: 1,
			});
		}

		localStorage.setItem("cartItems", JSON.stringify(temp));
	};


	return (
		<main className="category">
			<h1>Category &gt; {category}</h1>
			<p className="counts">
				{dummyItems.length > 0 && (
					t("category.foundItems", { count: filteredItems.length })
				)}
			</p>
			<div className="items">
				{filteredItems.length === 0 ? (
					<p>
						{ t("category.noItems") }
					</p>
				) : (
					filteredItems.map(item => (
						<div key={item.id} className="item">
							{
								item.image && <img src={item.image} alt={item.name}/>
							}
							<h2>
								{ item.name }
							</h2>
							<p>
								{ item.category }
							</p>
							<p>
								${ item.price }
							</p>
							<button 
								className="add"
								onClick={() => addToCart(item)}
							>
								<FA icon={faCartPlus}/>
							</button>
						</div>
					))
				)}
			</div>
		</main>
	);
}