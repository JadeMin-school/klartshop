export interface Item {
	id: number;
	name: string;
	category: Categories;
	price: number;
	image?: string;
}

export interface CartItem extends Item {
	quantity: number;
}