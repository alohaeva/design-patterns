/**
 * Represent the core model of your app as a tree structure
 * Example: File system with simple elements (Files) and containers (Folders)
 */

/**
 * Declare the component interface
 */
interface Component {
	getName(): string;
	display(indent: string): void;
}

/**
 * Create a leaf class to represent simple elements
 */
export class File implements Component {
	private readonly name: string;

	constructor(name: string) {
		this.name = name;
	}

	getName(): string {
		return this.name;
	}

	display(indent: string): void {
		console.log(`${indent}${this.name}`);
	}
}

/**
 * Create a container class to represent complex elements
 */
export class Folder implements Component {
	private readonly name: string;
	private children: Component[] = []; // Array to store both leaves and containers

	constructor(name: string) {
		this.name = name;
	}

	getName(): string {
		return this.name;
	}

	/**
	 * Provide methods for adding and removal of child elements
	 */
	addComponent(component: Component): void {
		this.children.push(component);
	}

	removeComponent(component: Component): void {
		this.children = this.children.filter(
			(_component) => _component !== component,
		);
	}

	display(indent: string): void {
		console.log(`${indent}${this.name}/`);
		for (const child of this.children) {
			child.display(indent + (indent ? indent : '  '));
		}
	}
}
