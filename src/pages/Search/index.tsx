import type { Item, CartItem } from "../../@types/Item.d.ts";

import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import {
	faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import queryString from 'qs';

import { dummyItems } from "../../assets/samples/items";

import t from '../../i18n';

import "./index.css";



export default function Search() {
	const location = useLocation();
	const query = queryString.parse(location.search, {
		ignoreQueryPrefix: true,
	}) as {
		q?: string;
	};

	const filteredItems = dummyItems.filter(item => {
		if (!query.q) return true;

		return item.name.toLowerCase().includes(query.q.toLowerCase());
	});

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
		<main className="search">
			<h1>
				{ t("search.title") }
			</h1>
			<p className="counts">
				{
					t("search.foundItems", {
						query: query.q,
						count: filteredItems.length
					})
				}
			</p>
			<div className="items">
				{filteredItems.length === 0 ? (
					<p>
						{ t("search.noResults") }
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