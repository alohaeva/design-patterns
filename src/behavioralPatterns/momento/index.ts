class Memento {
	constructor(private readonly state: number) {}

	getState() {
		return this.state;
	}
}

export class Originator {
	constructor(private state: number) {}

	getState() {
		return this.state;
	}

	save(): Memento {
		return new Memento(this.state);
	}
	setState(newState: number) {
		console.log(`Setting state to: ${newState}`);
		this.state = newState;
	}
	restore(memento: Memento): void {
		this.state = memento.getState();
	}
}

export class Caretaker {
	private mementos: Memento[] = [];
	private currentIndex: number = -1; // Tracks the current state index.

	constructor(private originator: Originator) {
		this.backup();
	}

	public backup(): void {
		// Remove any redo history when saving a new state
		this.mementos = this.mementos.slice(0, this.currentIndex + 1);

		const state = this.originator.save();

		console.log(`Backing up state: ${state.getState()}`);

		this.mementos.push(state);
		this.currentIndex++;
	}

	public undo(): void {
		if (this.currentIndex > 0) {
			this.currentIndex--;

			const state = this.mementos[this.currentIndex];

			console.log(`Restoring state to: ${state.getState()}`);

			this.originator.restore(state);
		} else {
			console.log('No states to undo.');
		}
	}

	public redo(): void {
		if (this.currentIndex < this.mementos.length - 1) {
			this.currentIndex++;

			const state = this.mementos[this.currentIndex];

			console.log(`Restoring state to: ${state.getState()}`);

			this.originator.restore(state);
		} else {
			console.log('No states to redo.');
		}
	}

	public showHistory(): void {
		let history = [];

		for (const memento of this.mementos) {
			history.push(memento.getState());
		}

		console.log(`Current history: ${history.join(', ')}`);
	}
}
