import { ContextStrategy, StrategyTypes } from './index';

export const demoStrategy = () => {
	const pdfRender = new ContextStrategy(StrategyTypes.PDF);
	const docxRender = new ContextStrategy(StrategyTypes.DOCX);
	const txtRender = new ContextStrategy(StrategyTypes.TXT);

	pdfRender.render();
	docxRender.render();
	txtRender.render();
};
