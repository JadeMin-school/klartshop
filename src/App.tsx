import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Agreements from "./pages/Agreements";
import Privacy from "./pages/Privacy";
import Guide from "./pages/Guide";
import Cart from "./pages/Cart";
import My from "./pages/My";
import Search from "./pages/Search";

import SearchModal from "./components/SearchModal";

import "./App.css";



export default function App() {
	const modalState = useState(false);


	return (
		<main>
			<Header showSearchModal={modalState[1]}/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/agreements" element={<Agreements/>}/>
				<Route path="/privacy" element={<Privacy/>}/>
				<Route path="/guide" element={<Guide/>}/>
				<Route path="/cart" element={<Cart/>}/>
				<Route path="/my" element={<My/>}/>
				<Route path="/search" element={<Search/>}/>
				<Route path="*" element={<h1>Page Not Found</h1>}/>
			</Routes>
			<Footer/>
			<SearchModal state={modalState}/>
		</main>
	);
}