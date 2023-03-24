import {generateRandomId} from "../../utils/generateRandomId";

type ProductData = {
	price: number;
	discount: number;
	name: string;
	description: string;
}

abstract class IProduct {
	productId: string;
	price: number;
	discount: number
	finalPrice: number;
	name: string;
	description: string;
	protected constructor(productData: ProductData) {
		this.productId = generateRandomId();
		this.description = productData.description;
		this.price = productData.price;
		this.discount = productData.discount;
		this.name = productData.name;

		this.finalPrice = this.price - this.price * this.discount;
	}
}

export class Product extends IProduct {
	constructor(productData: ProductData) {
		super(productData);
	}
}

class IOrderBucket {
	orders: Product[];
	orderPrice: number;

	constructor() {
		this.orders = [];
		this.orderPrice = 0;
	}

	/**
	 * Template method that won't be overridden
	 */
	buildOrder() {
		this.orderPrice = this.orders.reduce((acc, b) => acc + b.finalPrice, 0);
	}
	addProduct(product: ProductData) {
		const newProduct = new Product(product);

		this.orders.push(newProduct);
	}
	applyOrderDiscount(number: number) {
		console.log(this.orderPrice * number);
		this.orderPrice -= this.orderPrice * number;
	}
	makePurchase() {
		throw Error('You must implement this method');
	};
}

export class OrderBucket extends IOrderBucket {
	makePurchase() {
		this.buildOrder();
		console.log(`${this.constructor.name} order has ${this.orderPrice} price`);
	}
}

export class AnotherOrderBucket extends IOrderBucket {
	makePurchase() {
		this.buildOrder();
		this.applyOrderDiscount(0.2);
		console.log(`${this.constructor.name} order has ${this.orderPrice} price`);
	}
}
