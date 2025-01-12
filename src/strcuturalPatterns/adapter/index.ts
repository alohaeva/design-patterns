/**
 * Step 1: Define two classes with incompatible interfaces
 * A useful *service* class that we cannot change (3rd-party, legacy, etc.)
 */
export class LegacyPrinterService {
	printText(data: string): void {
		console.log(`Printed: ${data}`);
	}
}

/**
 * A *client* class that needs the LegacyPrinterService but expects a different interface
 */
export class ModernClient {
	private printer: ClientPrinterInterface;

	constructor(printer: ClientPrinterInterface) {
		this.printer = printer;
	}

	printMessage(message: string): void {
		this.printer.print(message);
	}
}

/**
 * Step 2: Declare the client interface
 * Defines how clients communicate with the service
 */
interface ClientPrinterInterface {
	print(message: string): void;
}

/**
 * Step 3: Create the adapter class
 */
export class PrinterAdapter implements ClientPrinterInterface {
	private legacyPrinterService: LegacyPrinterService;

	/**
	 * Step 4: Add a field to the adapter class to store a reference to the service
	 */
	constructor(legacyPrinterService: LegacyPrinterService) {
		this.legacyPrinterService = legacyPrinterService;
	}

	/**
	 * Step 5: Implement the client interface methods
	 */
	print(message: string): void {
		/**
		 * Adapt the client's method to work with the incompatible service
		 */
		console.log("Adapter in action: translating ModernClient request to LegacyPrinterService method.");
		this.legacyPrinterService.printText(message);
	}
}

/**
 * Step 6: Client usage via the adapter
 * The client only interacts with the `ClientPrinterInterface`
 */


