import {devicesFactory, DevicesFactoryTypes} from "./index";

export const demoAbstractFactory = () => {
	const appleDevices = devicesFactory.createDevicesFactory(DevicesFactoryTypes.Apple);

	console.log(appleDevices.createTablet());
	console.log(appleDevices.createSmartphone())

	const samsungDevices = devicesFactory.createDevicesFactory(DevicesFactoryTypes.Samsung);

	console.log(samsungDevices.createTablet());
	console.log(samsungDevices.createSmartphone())
}
