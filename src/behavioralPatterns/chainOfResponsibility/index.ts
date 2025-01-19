// Step 1: Create a base Handler interface
abstract class Handler {
	protected nextHandler?: Handler;

	// Set the next handler in the chain
	setNext(handler: Handler): Handler {
		this.nextHandler = handler;
		return handler;
	}

	// Handle request or pass it to the next handler
	handle(request: string): void {
		if (this.nextHandler) {
			this.nextHandler.handle(request);
		}
	}
}

// Step 2: Create concrete handlers
export class InfoHandler extends Handler {
	handle(request: string): void {
		if (request === 'INFO') {
			console.log('InfoHandler: Handling INFO level...');
		} else {
			console.log('InfoHandler: Passing to the next handler...');
			super.handle(request);
		}
	}
}

export class DebugHandler extends Handler {
	handle(request: string): void {
		if (request === 'DEBUG') {
			console.log('DebugHandler: Handling DEBUG level...');
		} else {
			console.log('DebugHandler: Passing to the next handler...');
			super.handle(request);
		}
	}
}

export class ErrorHandler extends Handler {
	handle(request: string): void {
		if (request === 'ERROR') {
			console.log('ErrorHandler: Handling ERROR level...');
		} else {
			console.log('ErrorHandler: Passing to the next handler...');
			super.handle(request);
		}
	}
}

export class MainHandler extends Handler {
	handle(request: string): void {
		console.log('MainHandler: Passing to the next handler...');
		super.handle(request);
	}
}

// Step 3: Client code to chain handlers
export const chainHandler = (handlers: Handler[]): Handler => {
	const mainHandler = new MainHandler();

	let currentHandler: Handler = mainHandler;

	handlers.forEach((handler) => {
		currentHandler = currentHandler.setNext(handler);
	});

	return mainHandler;
};
