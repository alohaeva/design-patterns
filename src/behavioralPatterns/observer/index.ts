abstract class ISubject {
	abstract state: any
	protected constructor() {}
	abstract register(observer: IObserver): void;
	abstract unregister(observer: IObserver): void;
	abstract setState(newState: any): void;
	abstract getState(): any;
	abstract notify(): void;
}

abstract class IObserver {
	abstract subject: ISubject;
	abstract name: string;
	abstract state: any
	protected constructor() {}
	abstract update(): void;
}

export class Observer implements IObserver {
	subject: ISubject;
	name: string;
	state: any;

	constructor({ subject, name }: { subject: ISubject, name: string }) {
		this.subject = subject;
		this.name = name;
	}
	update() {
		this.state = this.subject.getState();

		console.log(`${this.constructor.name} with name '${this.name}' has updated state with value '${this.state}'`)
	}
}

export class Subject implements ISubject {
	state: string;
	observers: IObserver[];

	constructor() {
		this.state = 'state';
		this.observers = [];
	}
	register(observer: IObserver) {
		this.observers.push(observer);
	}
	unregister(observer: IObserver) {
		this.observers = this.observers.filter(_observer => _observer !== observer);
	}
	setState(newState: any) {
		this.state = newState;
	}
	getState() {
		return this.state;
	}
	notify() {
		this.observers.forEach(obs => obs.update());
	}
}
