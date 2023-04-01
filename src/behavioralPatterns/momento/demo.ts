import {Caretaker, Originator} from "./index";

export const demoMomento = () => {
	const originator = new Originator(0);
	const careTaker = new Caretaker(originator);

	careTaker.backup();
	careTaker.showHistory();
	originator.setState(1);
	careTaker.backup();
	careTaker.showHistory();
	originator.setState(2);
	originator.setState(3);
	careTaker.backup();

	careTaker.showHistory();
	careTaker.undo();
	careTaker.showHistory();
	careTaker.backup();
	careTaker.showHistory();
}
