// Step 1 & Step 2: Define intrinsic and extrinsic state
// Flyweight Interface
abstract class Flyweight {
	protected constructor(readonly char: string) {
		this.char = char;
	}

	abstract render(context: string): void;
}

// Concrete Flyweight with immutable intrinsic state
class CharacterFlyweight extends Flyweight {
	constructor(char: string) {
		super(char);
	}

	// Step 3: Introduce extrinsic state as method parameter
	render(context: string): void {
		console.log(`Character '${this.char}' rendered with context: ${context}`);
	}
}

// Step 4: Flyweight Factory to manage the pool of Flyweight objects
export class FlyweightFactory {
	private flyweights: { [key: string]: Flyweight } = {};

	getFlyweight(char: string): Flyweight {
		// Check for an existing Flyweight
		if (!this.flyweights[char]) {
			console.log(`Creating new Flyweight for character: '${char}'`);
			this.flyweights[char] = new CharacterFlyweight(char);
		}
		return this.flyweights[char]; // Return the shared instance
	}

	listFlyweights(): void {
		console.log('Flyweights being used:');
		console.log(Object.keys(this.flyweights));
	}
}

// Step 5: Create a separate context class for extrinsic state
class Context {
	private flyweight: Flyweight; // Reference to the Flyweight
	private readonly context: string; // Extrinsic state (context)

	constructor(flyweight: Flyweight, context: string) {
		this.flyweight = flyweight;
		this.context = context;
	}

	render(): void {
		this.flyweight.render(this.context); // Pass context as a parameter
	}
}

// Step 5: Updated Client Code using the Flyweight and Context
export class TextEditor {
	private content: Context[] = []; // Store Context objects
	private factory: FlyweightFactory;

	constructor(factory: FlyweightFactory) {
		this.factory = factory;
	}

	addCharacter(char: string, context: string): void {
		const flyweight = this.factory.getFlyweight(char);
		this.content.push(new Context(flyweight, context)); // Create Context objects
	}

	render(): void {
		for (const entry of this.content) {
			entry.render(); // Extrinsic state is passed during rendering
		}
	}
}
