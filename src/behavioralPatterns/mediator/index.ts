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
	abstract makePublishAction(event: string): void;
	abstract subscribeToEvent(
		event: string,
		action: (...args: unknown[]) => void,
	): void;
}

export class Component1 implements BaseComponent {
	mediator: Mediator;
	constructor(mediator: Mediator) {
		this.mediator = mediator;
	}

	subscribeToEvent(event: string, action: (...args: unknown[]) => void) {
		console.log(`Subscribe to event (${event}) in ${this.constructor.name}`);
		this.mediator.subscribe(event, action);
	}

	public makeSubscribeAction() {
		console.log(`React to event in ${this.constructor.name}`);
	}

	public makePublishAction(event: string) {
		console.log(
			`Publish event (${event}) to mediator from ${this.constructor.name}`,
		);
		this.mediator.notify(event);
	}
}

export class Component2 implements BaseComponent {
	mediator: Mediator;
	constructor(mediator: Mediator) {
		this.mediator = mediator;
	}

	subscribeToEvent(event: string, action: (...args: unknown[]) => void) {
		console.log(`Subscribe to event (${event}) in ${this.constructor.name}`);
		this.mediator.subscribe(event, action);
	}

	public makeSubscribeAction() {
		console.log(`React to event in ${this.constructor.name}`);
	}

	public makePublishAction(event: string) {
		console.log(
			`Publish event (${event}) to mediator from ${this.constructor.name}`,
		);
		this.mediator.notify(event);
	}
}
