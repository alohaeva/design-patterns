import {buttonFactory, ButtonTypes} from "./index";

export const demoFactory = () => {
	const primaryButtonData = {
		label: "PrimaryButton",
		onClick: () => {
			console.log('click button')
		}
	}

	const secondaryButtonData = {
		label: "SecondaryButton",
		onClick: () => {
			console.log('click button')
		}
	}

	const primaryButton = buttonFactory.createButton(ButtonTypes.Primary, primaryButtonData);
	const secondaryButton = buttonFactory.createButton(ButtonTypes.Secondary, secondaryButtonData);

	primaryButton.render();
	secondaryButton.render();
	primaryButton.click();
	secondaryButton.click();
}
