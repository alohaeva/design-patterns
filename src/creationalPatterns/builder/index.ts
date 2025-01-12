

// Product class
class House {
	private walls: number = 0;
	private doors: number = 0;
	private label: string = '';
	private windows: number = 0;
	private roof: boolean = false;

	public setWalls(walls: number): void {
		this.walls = walls;
	}

	public setDoors(doors: number): void {
		this.doors = doors;
	}

	public setWindows(windows: number): void {
		this.windows = windows;
	}

	public setRoof(roof: boolean): void {
		this.roof = roof;
	}

	public setLabel(label: string): void {
		this.label = label;
	}

	public getLabel(): string {
		return this.label;
	}

	public getDescription(): string {
		return `House with ${this.walls} walls, ${this.doors} doors, ${this.windows} windows, and a roof: ${this.roof}`;
	}
}

/**
 * Clearly define the common construction steps for building all available product representations
 */
class HouseDesign {
	private walls: number = 0;
	private doors: number = 0;
	private label: string = '';
	private windows: number = 0;
	private roof: boolean = false;

	public setWalls(walls: number): void {
		this.walls = walls;
	}

	public setDoors(doors: number): void {
		this.doors = doors;
	}

	public setWindows(windows: number): void {
		this.windows = windows;
	}

	public setRoof(roof: boolean): void {
		this.roof = roof;
	}

	public setLabel(label: string): void {
		this.label = label;
	}

	public getLabel(): string {
		return this.label;
	}

	public getDescription(): string {
		return `House will have ${this.walls} walls, ${this.doors} doors, ${this.windows} windows, and a roof: ${this.roof} according to the design`;
	}
}

/**
 * Declare these steps in the base builder interface.
 */
interface HouseBuilder {
	buildWalls(walls: number): this;
	buildDoors(doors: number): this;
	buildWindows(windows: number): this;
	buildRoof(roof: boolean): this;
	buildLabel(label: string): this;
	reset(): void;
}

// Additional Concrete Builder
export class HouseDesignBuilder implements HouseBuilder {
	private houseDesign: HouseDesign;

	constructor() {
		this.houseDesign = new HouseDesign();
	}

	public reset() {
		this.houseDesign = new HouseDesign();
	}

	public buildWalls(walls: number): this {
		this.houseDesign.setWalls(walls);
		return this;
	}

	public buildDoors(doors: number): this {
		this.houseDesign.setDoors(doors);
		return this;
	}

	public buildWindows(windows: number): this {
		this.houseDesign.setWindows(windows);
		return this;
	}

	public buildRoof(roof: boolean): this {
		this.houseDesign.setRoof(roof);
		return this;
	}

	public buildLabel(label: string): this {
		this.houseDesign.setLabel(label);
		return this;
	}

	/**
	 * 	Concrete builders are supposed to provide their own methods for retrieving results.
	 *  various types of builders may create entirely different products
	 */
	public getResult(): HouseDesign {
		const houseDesign = this.houseDesign;
		this.reset()
		return houseDesign;
	}
}

/**
 * 1. Create a concrete builder class for each of the product representations
 * 2. implement their construction steps.
 */
export class CommonHouseBuilder implements HouseBuilder {
	private house: House;

	constructor() {
		this.house = new House();
	}

	public reset() {
		this.house = new House();
	}

	public buildWalls(walls: number): this {
		this.house.setWalls(walls);
		return this;
	}

	public buildDoors(doors: number): this {
		this.house.setDoors(doors);
		return this;
	}

	public buildWindows(windows: number): this {
		this.house.setWindows(windows);
		return this;
	}

	public buildRoof(roof: boolean): this {
		this.house.setRoof(roof);
		return this;
	}

	public buildLabel(label: string): this {
		this.house.setLabel(label);
		return this;
	}

	/**
	 * 	Concrete builders are supposed to provide their own methods for retrieving results.
	 *  various types of builders may create entirely different products
	 */
	public getResult(): House {
		const house = this.house;
		this.reset()
		return house;
	}
}

/**
 * 1. Create a director class
 * 2. It encapsulates various ways to construct a product using the same builder object
 */
export class HouseDirector {
	private builder: HouseBuilder;

	constructor(builder: HouseBuilder) {
		this.builder = builder;
	}

	public constructSimpleHouse(label: string): void {
		this.builder
			.buildWalls(4)
			.buildDoors(1)
			.buildWindows(2)
			.buildRoof(true)
			.buildLabel(label)
	}

	public constructLuxuryHouse(label: string): void {
		this.builder
			.buildWalls(8)
			.buildDoors(4)
			.buildWindows(6)
			.buildRoof(true)
			.buildLabel(label)
	}
}

/**
 * 1. The client code creates both the builder and the director objects.
 * 2. the client must pass a builder object to the director
 * 3. The director uses the builder object in all further construction
 * 4. The construction result can be obtained directly from the director only if all products follow the same interface.
 * 5. Or the client should fetch the result from the builder
 */
