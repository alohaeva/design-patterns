/**
 * The Mediator interface declares a method used by components to notify the
 * mediator about various events. The Mediator may react to these events and
 * pass the execution to other components.
 */
export class Mediator {
	events: Record<string, (() => void)[]> = {};

	constructor() {}

	public subscribe(event: string, componentFn: () => void) {
		if (this.events[event]) {
			this.events[event].push(componentFn);
		} else {
			this.events[event] = [componentFn];
		}
	}

	public notify(event: string): void {
		if (this.events[event]?.length) {
			this.events[event].forEach((listener) => {
				listener();
			});
		}
	}
}

abstract class BaseComponent {
	abstract mediator: Mediator;
	protected constructor() {}
	abstract makeSubscribeAction(): void;
	abstract makePublishAction(): void;
}

export class Component1 implements BaseComponent {
	mediator: Mediator;
	constructor(mediator: Mediator) {
		this.mediator = mediator;
		this.mediator.subscribe('eventA', this.makeSubscribeAction.bind(this));
	}
	public makeSubscribeAction() {
		console.log(`React to event in ${this.constructor.name}`);
	}
	public makePublishAction() {
		console.log(`Publish event to mediator from ${this.constructor.name}`);
		this.mediator.notify('eventB');
	}
}

export class Component2 implements BaseComponent {
	mediator: Mediator;
	constructor(mediator: Mediator) {
		this.mediator = mediator;
		this.mediator.subscribe('eventB', this.makeSubscribeAction.bind(this));
	}
	public makeSubscribeAction() {
		console.log(`React to event in ${this.constructor.name}`);
	}
	public makePublishAction() {
		console.log(`Publish event to mediator from ${this.constructor.name}`);
		this.mediator.notify('eventA');
	}
}
