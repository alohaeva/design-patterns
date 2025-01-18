import { ContextStragegy, StrategyTypes } from './index';

export const demoStrategy = () => {
	const pdfRender = new ContextStragegy(StrategyTypes.PDF);
	const docxRender = new ContextStragegy(StrategyTypes.DOCX);
	const txtRender = new ContextStragegy(StrategyTypes.TXT);

	pdfRender.render();
	docxRender.render();
	txtRender.render();
};
