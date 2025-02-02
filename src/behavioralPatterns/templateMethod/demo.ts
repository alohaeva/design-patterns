import { CSVProcessor, JSONProcessor } from './index';
import { join } from 'node:path';

export const demoTemplateMethod = () => {
	// Using the Template Method pattern
	const csvProcessor = new CSVProcessor();
	csvProcessor.process(join(__dirname, './data.csv'));

	console.log('===');

	const jsonProcessor = new JSONProcessor();
	jsonProcessor.process(join(__dirname, './data.json'));
};
