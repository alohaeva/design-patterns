type ButtonProps = {
	label: string;
};

export enum ButtonTypes {
	Secondary = 'Secondary',
	Primary = 'Primary',
}

/**
 * This interface should declare methods that make sense in every product
 * fe: onClick, click
 */
class Button {
	label: string;
	onClickFn?: () => void;

	constructor(props: ButtonProps) {
		this.label = props.label;
	}

	render(): void {
		throw new Error('Implement Render Button');
	}

	onClick(fn: () => void) {
		this.onClickFn = fn;
	}

	click(): void {
		this.onClickFn?.();
		console.log(`click ${this.label}`);
	}
}

/**
 * Make all products follow the same interface
 */
export class ServerButton extends Button {
	constructor(props: ButtonProps) {
		super(props);
	}

	render() {
		console.log(`render ${ButtonTypes.Primary} ${this.label}`);
	}
}

/**
 * Make all products follow the same interface
 */
export class WebButton extends Button {
	constructor(props: ButtonProps) {
		super(props);
	}

	render() {
		console.log(`render ${ButtonTypes.Secondary} ${this.constructor.name}`);
	}
}

class Dialog {
	open: boolean = true;
	button?: Button;

	constructor() {}

	private closeDialog(): void {
		this.open = false;
	}

	clickButton(): void {
		this.button?.click();
	}

	/**
	 * Add an empty factory method inside the creator class.
	 * The return type of the method should match the common product interface
	 * @protected
	 */
	protected createButton(): Button {
		throw new Error('Implement Create Button');
	}

	render() {
		this.button = this.createButton();
		this.button?.onClick(this.closeDialog.bind(this));
		this.button?.render();
	}
}

/**
 * create a set of creator subclasses for each type of product
 */
export class WebDialog extends Dialog {
	constructor() {
		super();
	}

	/**
	 * Override the factory method in the subclasses
	 */
	protected createButton(): WebButton {
		return new WebButton({ label: 'WebDialog button' });
	}
}

/**
 * create a set of creator subclasses for each type of product
 */
export class ServerDialog extends Dialog {
	constructor() {
		super();
	}

	/**
	 * Override the factory method in the subclasses
	 */
	protected createButton(): ServerButton {
		return new ServerButton({ label: 'ServerDialog button' });
	}
}
