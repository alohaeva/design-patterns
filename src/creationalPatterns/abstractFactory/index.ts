/**
 * Declare abstract product interfaces for all product types.
 */
interface SmartphoneDevice {
	name: string;
}

interface TabletDevice {
	name: string;
}

/**
 * Make all concrete product classes implement these interfaces
 */
class SamsungSmartPhoneDevice implements SmartphoneDevice {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

class AppleSmartPhoneDevice implements SmartphoneDevice {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

class SamsungTabletDevice implements TabletDevice {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

class AppleTabletDevice implements TabletDevice {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

/**
 * Declare the abstract factory interface with a set of creation methods for all abstract products.
 */
interface DevicesFactory {
	createSmartphone(): SmartphoneDevice;
	createTablet(): TabletDevice;
}

/**
 * Implement a set of concrete factory classes, one for each product variant.
 */
export class AppleDevicesFactory implements DevicesFactory {
	constructor() {}

	createSmartphone(): SmartphoneDevice {
		return new AppleSmartPhoneDevice('Apple iPhone');
	}

	createTablet(): TabletDevice {
		return new AppleTabletDevice('Apple Tablet');
	}
}

export class SamsungDevicesFactory implements DevicesFactory {
	constructor() {}

	createSmartphone(): SmartphoneDevice {
		return new SamsungSmartPhoneDevice('Samsung SmartPhone');
	}

	createTablet(): TabletDevice {
		return new SamsungTabletDevice('Samsung Tablet');
	}
}

/**
 * 1. Create factory initialization code somewhere in the app.
 * 2. It should instantiate one of the concrete factory classes
 * 3. Pass this factory object to all classes that construct products
 */
export class Application {
	factory: DevicesFactory;

	constructor (factory: DevicesFactory) {
		this.factory = factory
	}

	produce() {
		return {
			phone: this.factory.createSmartphone(),
			tablet: this.factory.createTablet(),
		}
	}
}
