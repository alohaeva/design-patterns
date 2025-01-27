interface ISubject {
	observers: IObserver[];

	register(observer: IObserver): void;
	unregister(observer: IObserver): void;
	notify(state: any): void;
}

interface IObserver {
	update(newState: any): void;
}

export class Subject implements ISubject {
	observers: IObserver[];

	constructor() {
		this.observers = [];
	}

	register(observer: IObserver) {
		this.observers.push(observer);
	}

	unregister(observer: IObserver) {
		this.observers = this.observers.filter((_observer) => _observer !== observer);
	}

	notify(state: number) {
		this.observers.forEach((obs) => obs.update(state));
	}
}

export class WeatherStation extends Subject {
	state: number  = 0;

	constructor() {
		super();
	}

	setState(newState: number) {
		console.log(`${this.constructor.name}: Temperature changed to ${newState}`);
		this.state = newState;
		this.notify(newState);
	}

	getState() {
		return this.state;
	}
}

// Concrete Observer 1
export class PhoneDisplay implements IObserver {
	update(temp: any) {
		console.log(`PhoneDisplay: The temperature is now ${temp}°C`);
	}
}

// Concrete Observer 2
export class ComputerDisplay implements IObserver {
	update(temp: any) {
		console.log(`ComputerDisplay: The temperature is now ${temp}°C`);
	}
}
