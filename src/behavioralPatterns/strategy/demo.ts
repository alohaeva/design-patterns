import {
	ContextStrategy,
	PdfRenderStrategy,
	TxtRenderStrategy,
	DocxRenderStrategy,
} from './index';

export const demoStrategy = () => {
	const pdfStrategy = new PdfRenderStrategy();
	const textStrategy = new TxtRenderStrategy();
	const docStrategy = new DocxRenderStrategy();
	const renderContext = new ContextStrategy(pdfStrategy);

	renderContext.render();
	renderContext.setStrategy(textStrategy);
	renderContext.render();
	renderContext.setStrategy(docStrategy);
	renderContext.render();
};
