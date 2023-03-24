abstract class IRenderStrategy {
	protected constructor() {}

	abstract render(): void;
}

class PdfRenderStrategy implements IRenderStrategy {
	render() {
		console.log(`${this.constructor.name} render method`)
	}
}

class DocxRenderStrategy implements IRenderStrategy {
	render() {
		console.log(`${this.constructor.name} render method`)
	}
}

class TxtRenderStrategy implements IRenderStrategy {
	render() {
		console.log(`${this.constructor.name} render method`)
	}
}

export enum StrategyTypes {
	PDF = 'pdf',
	DOCX = 'docx',
	TXT = 'txt'
}

export class ContextStragegy {
	strategy: IRenderStrategy;
	private strategies = {
		[StrategyTypes.PDF]: new PdfRenderStrategy(),
		[StrategyTypes.DOCX]: new DocxRenderStrategy(),
		[StrategyTypes.TXT]: new TxtRenderStrategy(),
	};

	constructor(strategyType: StrategyTypes) {
		this.strategy = this.strategies[strategyType];
	}

	render() {
		this.strategy.render();
	}
}

