class Memento {
	constructor(private readonly state: number) {}
	getState() {
		return this.state;
	}
}

export class Originator {
	constructor(private state: number) {}
	createState(): Memento {
		return new Memento(this.state);
	}
	setState(newState: number) {
		this.state = newState;
	}
	restoreState(memento: Memento): void {
		this.state = memento.getState();
	}
}

export class Caretaker {
	private mementos: Memento[] = [];
	constructor(private originator: Originator) {}

	public backup(): void {
		this.mementos.push(this.originator.createState());
	}

	public undo(): void {
		if (!this.mementos.length) {
			return;
		}
		const memento = this.mementos.pop();

		if (memento) {
			console.log(`Caretaker: Restoring state to: ${memento.getState()}`);
			this.originator.restoreState(memento);
		}
	}

	public showHistory(): void {
		for (const memento of this.mementos) {
			console.log(memento.getState());
		}
	}
}
