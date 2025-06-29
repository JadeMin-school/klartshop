import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Agreements from "./pages/Agreements";
import Privacy from "./pages/Privacy";
import Guide from "./pages/Guide";
import My from "./pages/My";
import Search from "./pages/Search";
import Category from "./pages/Category";

import "./App.css";



export default function App() {
	return (
		<>
			<Header/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/agreements" element={<Agreements/>}/>
				<Route path="/privacy" element={<Privacy/>}/>
				<Route path="/guide" element={<Guide/>}/>
				<Route path="/my" element={<My/>}/>
				<Route path="/search" element={<Search/>}/>
				<Route path="/category/:category" element={<Category/>}/>
				<Route path="*" element={<NotFound/>}/>
			</Routes>
			<Footer/>
		</>
	);
}