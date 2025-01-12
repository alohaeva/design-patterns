import { LegacyPrinterService, PrinterAdapter, ModernClient } from './index';

export const demoAdapter = () => {
	const legacyPrinter = new LegacyPrinterService();
	const printerAdapter = new PrinterAdapter(legacyPrinter);
	const modernClient = new ModernClient(printerAdapter);

	modernClient.printMessage("Hello, world!");
}
