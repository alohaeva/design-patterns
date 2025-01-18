import { HomeTheaterFacade } from './index';

export const demoFacade = () => {
	// Facade instance
	const homeTheater = new HomeTheaterFacade();

	// Using the facade
	homeTheater.watchMovie('Inception');
	homeTheater.endMovie();
};
