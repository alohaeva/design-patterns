import { VendingMachine } from './index';

export const demoState = () => {
	const vendingMachine = new VendingMachine();

	// Idle State
	vendingMachine.selectItem(); // "You need to insert a coin first."
	vendingMachine.dispenseItem(); // "Insert a coin and select an item first."

	// Insert Coin
	vendingMachine.insertCoin(); // "Coin inserted. You can now select an item."

	// Select Item
	vendingMachine.selectItem(); // "Item selected. Dispensing item..."

	// Dispense Item
	vendingMachine.dispenseItem(); // "Item dispensed. Returning to idle state."
};
