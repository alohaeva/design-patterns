export class Singleton {
	private static instance: Singleton;

	private constructor() {}

	public static create() {
		if (Singleton.instance) return Singleton.instance;

		Singleton.instance = new Singleton();

		return Singleton.instance;
	}
}
