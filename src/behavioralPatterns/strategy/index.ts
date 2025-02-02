/**
 * Declare the strategy interface common to all variants of the algorithm
 */
abstract class IRenderStrategy {
	protected constructor() {}

	abstract render(): void;
}

/**
 * Implement all algorithms into their own classes.
 * They should all implement the strategy interface
 */
export class PdfRenderStrategy implements IRenderStrategy {
	render() {
		console.log(`${this.constructor.name} render method`);
	}
}

export class DocxRenderStrategy implements IRenderStrategy {
	render() {
		console.log(`${this.constructor.name} render method`);
	}
}

export class TxtRenderStrategy implements IRenderStrategy {
	render() {
		console.log(`${this.constructor.name} render method`);
	}
}

export enum StrategyTypes {
	PDF = 'pdf',
	DOCX = 'docx',
	TXT = 'txt',
}

export class ContextStrategy {
	/**
	 * add a field for storing a reference to a strategy object
	 */
	strategy: IRenderStrategy;

	constructor(strategy: IRenderStrategy) {
		this.strategy = strategy;
	}

	/**
	 * Provide a setter for replacing values of that field
	 */
	setStrategy(strategy: IRenderStrategy) {
		this.strategy = strategy;
	}

	/**
	 *  identify an algorithm that’s prone to frequent changes
	 */
	render() {
		this.strategy.render();
	}
}
