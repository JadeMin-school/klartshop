import type { Item } from "../../@types/Item.d.ts";

import adoTshirt from "./ado_tshirt.jpg";
import eeeveeHoodie from "./eevee_hoodie.jpg";
import dolphinePants from "./dolphine_shorts.jpg";
import pikachuCap from "./pikachu_cap.jpg";
import charmanderJacket from "./charmander_jacket.jpg";
import bulbasaurSweatpants from "./bulbasaur_sweatpants.jpg";
import squirtleBackpack from "./squirtle_backpack.jpg";
import jigglypuffPajamas from "./jigglypuff_pajamas.jpg";
import meowthSneakers from "./meowth_sneakers.jpg";
import snorlaxBlanket from "./snorlax_blanket.jpg";
import psyduckSlippers from "./psyduck_slippers.jpg";
import eeveeDress from "./eevee_dress.jpg";
import gengarHoodie from "./gengar_hoodie.jpg";
import laprasSwimwear from "./lapras_swimwear.jpg";
import pikachuSocks from "./pikachu_socks.jpg";



export const dummyItems: Item[] = [
	{
		id: 1,
		name: "Ado T-Shirt",
		category: "TOP",
		price: 19.99,
		image: adoTshirt,
	},
	{
		id: 2,
		name: "Eevee Hoodie",
		category: "OUTER",
		price: 39.99,
		image: eeeveeHoodie,
	},
	{
		id: 3,
		name: "Dolphine Shorts",
		category: "BOTTOM",
		price: 29.99,
		image: dolphinePants,
	},
	{
		id: 4,
		name: "Pikachu Cap",
		category: "ACC",
		price: 14.99,
		image: pikachuCap,
	},
	{
		id: 5,
		name: "Charmander Jacket",
		category: "OUTER",
		price: 49.99,
		image: charmanderJacket,
	},
	{
		id: 6,
		name: "Bulbasaur Sweatpants",
		category: "BOTTOM",
		price: 24.99,
		image: bulbasaurSweatpants,
	},
	{
		id: 7,
		name: "Squirtle Backpack",
		category: "ACC",
		price: 34.99,
		image: squirtleBackpack,
	},
	{
		id: 8,
		name: "Jigglypuff Pajamas",
		category: "TOP",
		price: 22.99,
		image: jigglypuffPajamas,
	},
	{
		id: 9,
		name: "Meowth Sneakers",
		category: "ACC",
		price: 44.99,
		image: meowthSneakers,
	},
	{
		id: 10,
		name: "Snorlax Blanket",
		category: "ACC",
		price: 59.99,
		image: snorlaxBlanket,
	},
	{
		id: 11,
		name: "Psyduck Slippers",
		category: "ACC",
		price: 19.99,
		image: psyduckSlippers,
	},
	{
		id: 12,
		name: "Eevee Dress",
		category: "TOP",
		price: 34.99,
		image: eeveeDress,
	},
	{
		id: 13,
		name: "Gengar Hoodie",
		category: "OUTER",
		price: 39.99,
		image: gengarHoodie,
	},
	{
		id: 14,
		name: "Lapras Swimwear",
		category: "BOTTOM",
		price: 29.99,
		image: laprasSwimwear,
	},
	{
		id: 15,
		name: "Pikachu Socks",
		category: "ACC",
		price: 9.99,
		image: pikachuSocks,
	},
] as const;