// Subject Interface
interface Service {
	request(): void;
}

// Real Subject: the actual object that performs the work
class RealService implements Service {
	request(): void {
		console.log('RealService: Handling request...');
	}
}

// Proxy: the surrogate or placeholder
export class ProxyService implements Service {
	private realService: RealService;

	constructor() {
		this.realService = new RealService();
	}

	request(): void {
		console.log(
			'ProxyService: Checking access prior to forwarding the request...',
		);
		if (this.checkAccess()) {
			this.realService.request();
			this.logAccess();
		}
	}

	private checkAccess(): boolean {
		console.log('ProxyService: Performing access control...');
		// Add any access control logic here
		return true; // Allow access
	}

	private logAccess(): void {
		console.log('ProxyService: Logging the request...');
	}
}
