import {PhoneBuilder, PhoneDepartment} from "./index";

export const demoBuilder = () => {
	const phoneBuilder = new PhoneBuilder();
	const phoneDepartment = new PhoneDepartment(phoneBuilder);

	const phone = phoneDepartment.constructPhone();

	console.log(
		phone
	);
}
