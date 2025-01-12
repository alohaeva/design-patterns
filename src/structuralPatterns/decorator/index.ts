import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

/**
 * The component interface defines operations that can be altered by decorators
 */
export interface DataSource {
	writeData(data: string): void;

	readData(): string;
}

/**
 * Concrete components provide default implementations for the operations
 */
export class FileDataSource implements DataSource {
	private readonly filename: string;

	constructor(filename: string) {
		this.filename = filename;
	}

	writeData(data: string): void {
		const path = join(__dirname, this.filename);

		console.log(`Writing data (${data}) to file: ${this.filename}`);

		writeFileSync(path, data, { encoding: 'utf-8' });
	}

	readData(): string {
		console.log(`Reading data from file: ${this.filename}`);

		const path = join(__dirname, this.filename);

		return readFileSync(path, { encoding: 'utf-8' });
	}
}

/**
 * Create a base decorator class
 * The base decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all concrete decorators.
 */
class DataSourceDecorator implements DataSource {
	/**
	 * It should have a field for storing a reference to a wrapped object
	 */
	protected wrappee: DataSource;

	constructor(source: DataSource) {
		this.wrappee = source;
	}

	/**
	 * The base decorator must delegate all work to the wrapped object
	 */
	writeData(data: string): void {
		this.wrappee.writeData(data);
	}

	readData(): string {
		return this.wrappee.readData();
	}
}

/**
 * Concrete decorators must call methods on the wrapped object,
 * but may add something of their own to the result.
 * Decorators can execute the added behavior either before or after the call to a wrapped object.
 */
export class EncryptionDecorator extends DataSourceDecorator {
	writeData(data: string): void {
		const encryptedData = this.encrypt(data);
		this.wrappee.writeData(encryptedData);
	}

	readData(): string {
		const data = this.wrappee.readData();
		return this.decrypt(data);
	}

	private encrypt(data: string): string {
		console.log("Encrypting data");
		return `encrypted(${data})`;
	}

	private decrypt(data: string): string {
		console.log("Decrypting data");
		return data.replace("encrypted(", "").replace(")", "");
	}
}

/**
 * Create concrete decorators by extending them from the base decorator
 */
export class CompressionDecorator extends DataSourceDecorator {
	constructor(source: DataSource) {
		super(source);
	}

	/**
	 * Methods delegate calls to the wrapped object
	 */
	writeData(data: string): void {
		const compressedData = this.compress(data);
		this.wrappee.writeData(compressedData);
	}

	/**
	 * Methods delegate calls to the wrapped object
	 */
	readData(): string {
		const data = this.wrappee.readData();
		return this.decompress(data);
	}

	private compress(data: string): string {
		console.log("Compressing data");
		return `compressed(${data})`;
	}

	private decompress(data: string): string {
		console.log("Decompressing data");
		return data.replace("compressed(", "").replace(")", "");
	}
}

export class SalaryManager {
	private source: DataSource;

	constructor(source: DataSource) {
		this.source = source;
	}

	load(): string {
		return this.source.readData();
	}

	save(data: string): void {
		this.source.writeData(data);
	}
}

/**
 * The client code must be responsible for creating decorators
 * and composing them in the way the client needs.
 */
