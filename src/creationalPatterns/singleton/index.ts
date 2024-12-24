export class Singleton {
	/**
	 * Add a private static field for the singleton instance
	 */
	private static instance: Singleton;

	/**
	 * Make the constructor of the class private.
	 * Only the static method of the class will be able to call the constructor
	 */
	private constructor() {}

	/**
	 * Declare a public static creation method
	 * Implement “lazy initialization” inside the static method
	 */
	public static create() {
		if (Singleton.instance) {
			/**
			 * The method should always return that instance on all subsequent calls
			 */
			return Singleton.instance;
		}

		/**
		 * Create a new object on its first call and put it into the static field
		 */
		Singleton.instance = new Singleton();

		return Singleton.instance;
	}
}
