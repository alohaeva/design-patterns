import { Caretaker, Originator } from './index';

export const demoMomento = () => {
	const originator = new Originator(0);
	const careTaker = new Caretaker(originator);

	originator.setState(1);
	originator.setState(2);
	careTaker.backup();
	originator.setState(3);
	careTaker.backup();
	careTaker.undo();
	careTaker.showHistory();
	careTaker.redo();
	careTaker.showHistory();
};
