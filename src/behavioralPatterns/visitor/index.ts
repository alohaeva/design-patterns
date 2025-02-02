// Visitor Interface
interface DiscountVisitor {
	// Each Concrete Visitor implements several versions of the same
	// behaviors, tailored for different concrete element classes
	applyDiscountToElectronics(electronics: Electronics): void;
	applyDiscountToGroceries(groceries: Groceries): void;
}

// Element Interface
export interface ItemElement {
	accept(visitor: DiscountVisitor): void;
}

// A concrete item class for Electronics
export class Electronics implements ItemElement {
	constructor(
		public name: string,
		public price: number,
	) {}

	// The purpose of this method is to redirect the call
	// to the proper visitor’s method corresponding to the current
	// element class
	accept(visitor: DiscountVisitor): void {
		visitor.applyDiscountToElectronics(this);
	}
}

// A concrete item class for Groceries
export class Groceries implements ItemElement {
	constructor(
		public name: string,
		public price: number,
	) {}

	accept(visitor: DiscountVisitor): void {
		visitor.applyDiscountToGroceries(this);
	}
}

// A Visitor class for applying a percentage discount
export class PercentageDiscountVisitor implements DiscountVisitor {
	private discountRate = 10; // 10% discount

	applyDiscountToElectronics(electronics: Electronics): void {
		const discountedPrice =
			electronics.price - (electronics.price * this.discountRate) / 100;
		console.log(
			`Applying ${this.discountRate}% discount. ${electronics.name}'s discounted price: $${discountedPrice.toFixed(2)}`,
		);
	}

	applyDiscountToGroceries(groceries: Groceries): void {
		const discountedPrice =
			groceries.price - (groceries.price * this.discountRate) / 100;
		console.log(
			`Applying ${this.discountRate}% discount. ${groceries.name}'s discounted price: $${discountedPrice.toFixed(2)}`,
		);
	}
}

// A Visitor class for applying a flat discount
export class FlatDiscountVisitor implements DiscountVisitor {
	private flatDiscount = 5; // $5 flat discount

	applyDiscountToElectronics(electronics: Electronics): void {
		const discountedPrice = electronics.price - this.flatDiscount;
		console.log(
			`Applying $${this.flatDiscount} flat discount. ${electronics.name}'s discounted price: $${discountedPrice.toFixed(
				2,
			)}`,
		);
	}

	applyDiscountToGroceries(groceries: Groceries): void {
		const discountedPrice = groceries.price - this.flatDiscount;
		console.log(
			`Applying $${this.flatDiscount} flat discount. ${groceries.name}'s discounted price: $${discountedPrice.toFixed(
				2,
			)}`,
		);
	}
}
