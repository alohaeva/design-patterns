import { AppleDevicesFactory, Application, SamsungDevicesFactory } from "./index";

export const demoAbstractFactory = (env: 'Windows' | 'Mac') => {
	let app;

	if (env == "Windows") {
		app = new Application(new SamsungDevicesFactory())
	} else if (env == "Mac") {
		app = new Application(new AppleDevicesFactory())
	} else {
		throw new Error("Error! Unknown operating system.")
	}

	if (app) {
		const { tablet, phone } = app.produce();

		console.log(tablet)
		console.log(phone)
	}
}
