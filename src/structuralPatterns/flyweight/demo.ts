import { FlyweightFactory, TextEditor } from './index';

export const demoFlyweight = () => {
	const factory = new FlyweightFactory();
	const editor = new TextEditor(factory);

	// Adding characters to the document
	editor.addCharacter('A', 'Bold');
	editor.addCharacter('B', 'Italic');
	editor.addCharacter('A', 'Italic'); // Reuses the Flyweight for 'A'

	// Listing the shared flyweights
	factory.listFlyweights();

	// Rendering the text
	editor.render();
};
