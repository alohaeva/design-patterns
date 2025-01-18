import { Component1, Component2, Mediator } from './index';

export const demoMediator = () => {
	const mediator = new Mediator();

	const component1 = new Component1(mediator);
	const component2 = new Component2(mediator);

	component1.makePublishAction();
	component2.makePublishAction();
};
