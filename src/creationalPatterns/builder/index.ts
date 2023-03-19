abstract class AbstractPhone {
	processor: string | null;
	camera: string | null
	display: string | null;

	protected constructor() {
		this.processor = null;
		this.camera = null;
		this.display = null;
	}
}

class Phone extends AbstractPhone {
	constructor() {
		super();
	}
}

abstract class AbstractPhoneBuilder {
	phone: Phone;

	protected constructor() {
		this.phone = new Phone();
	}
	abstract addProcessor(): void
	abstract addCamera(): void
	abstract addDisplay(): void
}

export class PhoneBuilder extends AbstractPhoneBuilder {
	constructor() {
		super();
	}

	addProcessor() {
		this.phone.processor = 'A16';
	}

	addCamera() {
		this.phone.camera = '8MB';
	}

	addDisplay() {
		this.phone.display = 'IPS';
	}

	getProduct() {
		return this.phone;
	}
}

export class PhoneDepartment {
	builder: PhoneBuilder;
	constructor(builder: PhoneBuilder) {
		this.builder = builder;
	}
	constructPhone() {
		this.builder.addCamera();
		this.builder.addProcessor();
		this.builder.addDisplay();

		return this.builder.getProduct();
	}
}
