export enum DevicesFactoryTypes {
	Samsung = 'samsung',
	Apple = 'apple',
}

type SmartphoneDevice = {
	name: string;
}

type TabletDevice = {
	name: string;
}

abstract class DevicesFactory {
	protected constructor() {}

	abstract createSmartphone(): SmartphoneDevice;
	abstract createTablet(): TabletDevice;
}

class AppleDevicesFactory extends DevicesFactory {
	constructor() {
		super()
	}

	createSmartphone(): SmartphoneDevice{
		return {
			name: 'Apple smartphone'
		}
	}

	createTablet(): TabletDevice {
		return {
			name: 'Apple tablet'
		}
	}
}

class SamsungDevicesFactory extends DevicesFactory {
	constructor() {
		super()
	}

	createSmartphone(): SmartphoneDevice {
		return {
			name: 'Samsung smartphone'
		}
	}

	createTablet(): TabletDevice {
		return {
			name: 'Samsung tablet'
		}
	}
}

const devicesFactoriesTypes = {
	[DevicesFactoryTypes.Samsung]: SamsungDevicesFactory,
	[DevicesFactoryTypes.Apple]: AppleDevicesFactory,
}

class AbstractDevicesFactory {
	createDevicesFactory(type: DevicesFactoryTypes): DevicesFactory {
		return new devicesFactoriesTypes[type]();
	}
}

export const devicesFactory = new AbstractDevicesFactory();
