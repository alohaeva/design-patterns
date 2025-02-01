// Define the State interface
interface VendingMachineState {
	insertCoin(): void;
	selectItem(): void;
	dispenseItem(): void;
}

// Idle State Implementation
class IdleState implements VendingMachineState {
	private readonly vendingMachine: VendingMachine;

	constructor(vendingMachine: VendingMachine) {
		this.vendingMachine = vendingMachine;
	}

	insertCoin(): void {
		console.log('Coin inserted. You can now select an item.');
		this.vendingMachine.setState(new HasCoinState(this.vendingMachine));
	}

	selectItem(): void {
		console.log('You need to insert a coin first.');
	}

	dispenseItem(): void {
		console.log('Insert a coin and select an item first.');
	}
}

// Has Coin State Implementation
class HasCoinState implements VendingMachineState {
	private readonly vendingMachine: VendingMachine;

	constructor(vendingMachine: VendingMachine) {
		this.vendingMachine = vendingMachine;
	}

	insertCoin(): void {
		console.log('Coin already inserted. Please select an item.');
	}

	selectItem(): void {
		console.log('Item selected. Dispensing item...');
		this.vendingMachine.setState(new DispenseItemState(this.vendingMachine));
	}

	dispenseItem(): void {
		console.log('You need to select an item first.');
	}
}

// Dispense Item State Implementation
class DispenseItemState implements VendingMachineState {
	private readonly vendingMachine: VendingMachine;

	constructor(vendingMachine: VendingMachine) {
		this.vendingMachine = vendingMachine;
	}

	insertCoin(): void {
		console.log('Please wait, already dispensing an item.');
	}

	selectItem(): void {
		console.log('Already dispensing an item.');
	}

	dispenseItem(): void {
		console.log('Item dispensed. Returning to idle state.');
		this.vendingMachine.setState(new IdleState(this.vendingMachine));
	}
}

// Context Class
export class VendingMachine {
	private currentState: VendingMachineState;

	constructor() {
		// Set the initial state
		this.currentState = new IdleState(this);
	}

	setState(state: VendingMachineState): void {
		this.currentState = state;
	}

	getState(): VendingMachineState {
		return this.currentState;
	}

	// State-delegating methods
	insertCoin(): void {
		this.currentState.insertCoin();
	}

	selectItem(): void {
		this.currentState.selectItem();
	}

	dispenseItem(): void {
		this.currentState.dispenseItem();
	}
}
