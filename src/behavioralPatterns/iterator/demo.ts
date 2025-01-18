import { WordsCollection } from './index';

export const demoIterator = () => {
	const collection = new WordsCollection();
	collection.addItem('First');
	collection.addItem('Second');
	collection.addItem('Third');

	const iterator = collection.getIterator();

	console.log('Straight traversal:');
	while (iterator.valid()) {
		console.log(iterator.next());
	}

	console.log('Reverse traversal:');
	const reverseIterator = collection.getReverseIterator();
	while (reverseIterator.valid()) {
		console.log(reverseIterator.next());
	}
};
