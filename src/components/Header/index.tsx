import { Link } from 'react-router-dom';

import LangButton from "./components/LangButton";
import CartButton from "./components/CartButton";
import SearchButton from "./components/SearchButton";
import CategoryButton from "./components/CategoryButton";
import MyButton from "./components/MyButton";

import Logo from "../../assets/logo.png";

import "./index.css";



export default function Header() {
	return (
		<header>
			<div className="left">
				<Link to="/" className="logo">
					<img src={Logo} alt="Logo"/>
				</Link>
			</div>
			<div className="right">
				<LangButton/>
				<CartButton/>
				<MyButton/>
				<SearchButton/>
				<CategoryButton/>
			</div>
		</header>
	);
}