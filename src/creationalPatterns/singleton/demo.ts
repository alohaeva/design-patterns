import { Singleton } from './index';

export const demoSingleton = () => {
	const instance1 = Singleton.create();
	const instance2 = Singleton.create();

	if (Object.is(instance1, instance2)) {
		console.log('They are the same');
	}
};
