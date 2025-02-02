import {
	ItemElement,
	Electronics,
	Groceries,
	PercentageDiscountVisitor,
	FlatDiscountVisitor,
} from './index';

export const demoVisitor = () => {
	// Create items
	const items: ItemElement[] = [
		new Electronics('Laptop', 1500),
		new Electronics('Smartphone', 800),
		new Groceries('Apples', 20),
		new Groceries('Milk', 5),
	];

	// Apply Percentage Discount
	console.log('--- Applying Percentage Discount ---');
	const percentageDiscountVisitor = new PercentageDiscountVisitor();
	items.forEach((item) => item.accept(percentageDiscountVisitor));

	// Apply Flat Discount
	console.log('--- Applying Flat Discount ---');
	const flatDiscountVisitor = new FlatDiscountVisitor();
	items.forEach((item) => item.accept(flatDiscountVisitor));
};
