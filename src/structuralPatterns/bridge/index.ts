/**
 * Declare operations available on all platforms
 * that the abstraction needs in the general implementation interface.
 */
interface Renderer {
	renderCircle(radius: number): void;
	renderRectangle(width: number, height: number): void;
}

/**
 * Create concrete implementation classes
 */
export class VectorRenderer implements Renderer {
	renderCircle(radius: number): void {
		console.log(`Drawing a circle of radius ${radius} in VECTOR graphics.`);
	}

	renderRectangle(width: number, height: number): void {
		console.log(`Drawing a rectangle of width ${width} and height ${height} in VECTOR graphics.`);
	}
}

/**
 * Create concrete implementation classes
 */
export class RasterRenderer implements Renderer {
	renderCircle(radius: number): void {
		console.log(`Drawing a circle of radius ${radius} in RASTER graphics.`);
	}

	renderRectangle(width: number, height: number): void {
		console.log(`Drawing a rectangle of width ${width} and height ${height} in RASTER graphics.`);
	}
}

/**
 * Define operations the client needs in the base abstraction class.
 */
abstract class Shape {
	/**
	 * Add a reference field for the implementation type.
	 * The abstraction delegates most of the work
	 * to the implementation object that’s referenced in that field
	 */
	protected renderer: Renderer;

	protected constructor(renderer: Renderer) {
		this.renderer = renderer;
	}

	abstract draw(): void;
}

/**
 * Create refined abstractions for each variant by extending the base abstraction class.
 */
export class Circle extends Shape {
	private readonly radius: number;

	constructor(renderer: Renderer, radius: number) {
		super(renderer);
		this.radius = radius;
	}

	draw(): void {
		this.renderer.renderCircle(this.radius);
	}
}

/**
 * Create refined abstractions for each variant by extending the base abstraction class.
 */
export class Rectangle extends Shape {
	private readonly width: number;
	private readonly height: number;

	constructor(renderer: Renderer, width: number, height: number) {
		super(renderer);
		this.width = width;
		this.height = height;
	}

	draw(): void {
		this.renderer.renderRectangle(this.width, this.height);
	}
}

/**
 * The client code should pass an implementation object to the
 * abstraction’s constructor to associate one with the other.
 * After that, the client can forget about the implementation
 * and work only with the abstraction object.
 */
