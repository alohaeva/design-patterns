type ShapeSource = {
	x: number;
	y: number;
	color: string;
}

type RectangleSource = {
	width: number
	height: number
} & ShapeSource;

/**
 * Create the prototype interface
 */
export class Shape {
	x: number;
	y: number;
	color: string;

	/**
	 * Define the constructor that accepts an object of the class as an argument
	 */
	constructor(source: ShapeSource) {
		/**
		 * The constructor must copy the values of all fields defined in the class from the passed object
		 */
		this.x = source.x;
		this.y = source.y;
		this.color = source.color;
	}

	/**
	 * Declare the clone method in it.
	 */
	clone(): Shape {
		/**
		 * Cloning method usually consists of just one line:
		 * 	running a new operator
		 */
		return new Shape({
			x: this.x,
			y: this.y,
			color: this.color,
		})
	}
}

export class Rectangle extends Shape {
	width: number
	height: number

	constructor(source: RectangleSource) {
		/**
		 * If you’re changing a subclass,
		 * you must call the parent constructor to let the superclass handle the cloning of its private fields
		 */
		super(source);

		this.width = source.width;
		this.height = source.height;
	}

	/**
	 * Every class must explicitly override the cloning method
	 */
	clone(): Shape {
		/**
		 * Use its own class name along with the new operator
		 */
		return new Rectangle({
			x: this.x,
			y: this.y,
			color: this.color,
			width: this.width,
			height: this.height,
		});
	}
}
