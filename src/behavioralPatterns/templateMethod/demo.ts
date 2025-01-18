import { AnotherOrderBucket, OrderBucket } from './index';

export const demoTemplateMethod = () => {
	const orderBucket = new OrderBucket();
	const anotherOrderBucket = new AnotherOrderBucket();

	orderBucket.addProduct({
		price: 100,
		name: 'Test',
		discount: 0.1,
		description: 'Some test product',
	});
	anotherOrderBucket.addProduct({
		price: 1000,
		name: 'Test 1',
		discount: 0.15,
		description: 'Some test product 2',
	});

	orderBucket.makePurchase();
	anotherOrderBucket.makePurchase();
};
