import {Observer, Subject} from "./index";

export const demoObserver = () => {
	const subject = new Subject();
	const observer = new Observer({ subject: subject, name: 'Observer test'});
	const observer2 = new Observer({ subject: subject, name: 'Some another Observer test'});

	subject.register(observer);
	subject.register(observer2);

	subject.setState('new state');
	subject.notify();

	subject.unregister(observer);

	subject.setState('Hello, world');
	subject.notify();
}
