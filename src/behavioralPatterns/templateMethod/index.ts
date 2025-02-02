// Abstract class representing a DataProcessor
import * as fs from 'node:fs';
import * as parser from 'json-2-csv';
import { faker } from '@faker-js/faker';

type Employee = {
	ID: number;
	Name: string;
	Position: string;
	Department: string;
	Salary: number;
};

abstract class DataProcessor {
	// The template method - defines the skeleton of the algorithm
	public process(filePath: string): void {
		const data = this.readData(filePath);

		const processed = this.processData(data);

		this.saveData(filePath, processed);
	}

	// Abstract method: To be implemented by subclasses
	protected abstract readData(filePath: string): string;

	// Abstract method: To be implemented by subclasses
	protected abstract processData(data: string): string;

	// Concrete method: Can be shared by all subclasses
	protected saveData(path: string, data: string): void {
		fs.writeFileSync(path, data, { encoding: 'utf-8' });
		console.log('Data saved successfully!');
	}
}

// Subclass for processing CSV data
export class CSVProcessor extends DataProcessor {
	// Implementing the readData method
	protected readData(filePath: string): string {
		console.log('Reading data from a CSV file...');
		return fs.readFileSync(filePath, { encoding: 'utf-8' });
	}

	// Implementing the processData method
	protected processData(data: string): string {
		console.log('Processing CSV data...');

		const json = parser.csv2json(data);

		const lastItem = json[json.length - 1] as Employee;

		json.push({
			ID: lastItem.ID + 1,
			Name: faker.person.fullName(),
			Position: faker.person.jobTitle(),
			Department: faker.commerce.department(),
			Salary: faker.number.int({ min: 10000, max: 100000 }),
		});

		return parser.json2csv(json);
	}
}

// Subclass for processing JSON data
export class JSONProcessor extends DataProcessor {
	// Implementing the readData method
	protected readData(filePath: string): string {
		console.log('Reading data from a JSON file...');
		return fs.readFileSync(filePath, { encoding: 'utf-8' });
	}

	// Implementing the processData method
	protected processData(data: string): string {
		console.log('Processing JSON data...');
		return data;
	}
}
