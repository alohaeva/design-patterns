import { chainHandler, DebugHandler, ErrorHandler, InfoHandler } from './index';

export const demoChainOfResponsibility = () => {
	// Create the chain: Info -> Debug -> Error
	const handler = chainHandler([
		new InfoHandler(),
		new DebugHandler(),
		new ErrorHandler(),
	]);

	// Test the chain with different requests
	console.log('Sending an INFO request...');
	handler.handle('INFO');

	console.log('\nSending a DEBUG request...');
	handler.handle('DEBUG');

	console.log('\nSending an ERROR request...');
	handler.handle('ERROR');

	console.log('\nSending an UNKNOWN request...');
	handler.handle('UNKNOWN');
};
