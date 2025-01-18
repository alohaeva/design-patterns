// Amplifier class (subsystem)
export class Amplifier {
	turnOn(): void {
		console.log('Amplifier is ON.');
	}
	setVolume(level: number): void {
		console.log(`Amplifier volume set to ${level}.`);
	}
	turnOff(): void {
		console.log('Amplifier is OFF.');
	}
}

// DVD Player class (subsystem)
export class DVDPlayer {
	turnOn(): void {
		console.log('DVD Player is ON.');
	}
	play(movie: string): void {
		console.log(`Playing movie: ${movie}.`);
	}
	stop(): void {
		console.log('Stopping movie.');
	}
	turnOff(): void {
		console.log('DVD Player is OFF.');
	}
}

// Projector class (subsystem)
export class Projector {
	turnOn(): void {
		console.log('Projector is ON.');
	}
	turnOff(): void {
		console.log('Projector is OFF.');
	}
}

// Lights class (subsystem)
export class Lights {
	dim(level: number): void {
		console.log(`Lights dimmed to ${level}%.`);
	}
}

// Screen class (subsystem)
export class Screen {
	lower(): void {
		console.log('Screen is lowered.');
	}
	raise(): void {
		console.log('Screen is raised.');
	}
}

export class HomeTheaterFacade {
	private amplifier: Amplifier;
	private dvdPlayer: DVDPlayer;
	private projector: Projector;
	private lights: Lights;
	private screen: Screen;

	constructor() {
		this.amplifier = new Amplifier();
		this.dvdPlayer = new DVDPlayer();
		this.projector = new Projector();
		this.lights = new Lights();
		this.screen = new Screen();
	}

	watchMovie(movie: string): void {
		console.log('Preparing to watch a movie...');
		this.lights.dim(20);
		this.screen.lower();
		this.projector.turnOn();
		this.amplifier.turnOn();
		this.amplifier.setVolume(10);
		this.dvdPlayer.turnOn();
		this.dvdPlayer.play(movie);
		console.log('Enjoy the movie!');
	}

	endMovie(): void {
		console.log('Shutting down the home theater...');
		this.dvdPlayer.stop();
		this.dvdPlayer.turnOff();
		this.amplifier.turnOff();
		this.projector.turnOff();
		this.screen.raise();
		console.log('The home theater is now off.');
	}
}
