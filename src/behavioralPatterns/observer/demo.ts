import { PhoneDisplay, ComputerDisplay, WeatherStation } from './index';

export const demoObserver = () => {
	// Usage Example
	const weatherStation = new WeatherStation();

	const phoneDisplay = new PhoneDisplay();
	const computerDisplay = new ComputerDisplay();

	// Attach observers to the subject
	weatherStation.register(phoneDisplay);
	weatherStation.register(computerDisplay);

	// Change the temperature and notify observers
	weatherStation.setState(25);

	// Detach one observer
	weatherStation.unregister(phoneDisplay);
	weatherStation.setState(35);
};
