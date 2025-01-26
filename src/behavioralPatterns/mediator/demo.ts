import { Component1, Component2, Mediator } from './index';

export const demoMediator = () => {
	const mediator = new Mediator();

	const component1 = new Component1(mediator);
	const component2 = new Component2(mediator);

	component1.subscribeToEvent(
		'eventA',
		component1.makeSubscribeAction.bind(component1),
	);
	component2.subscribeToEvent(
		'eventB',
		component2.makeSubscribeAction.bind(component2),
	);

	component1.makePublishAction('eventB');
	component2.makePublishAction('eventA');
};
