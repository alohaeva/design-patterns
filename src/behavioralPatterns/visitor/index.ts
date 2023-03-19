type AnyObject = Record<string, unknown>;

abstract class VisitingElement {
	protected constructor(props: AnyObject) {}
	abstract accept(visitor: Visitor): void;
}

abstract class Visitor {
	protected constructor() {}
	abstract visitElementA(elementA: VisitingElement): void;
	abstract visitElementB(elementB: VisitingElement): void;
}

export class VisitingElementA implements VisitingElement {
	constructor(props: AnyObject) {}

	accept(visitor: Visitor) {
		visitor.visitElementA(this);
	}
}

export class VisitingElementB implements VisitingElement {
	constructor(props: AnyObject) {}

	accept(visitor: Visitor) {
		visitor.visitElementB(this);
	}
}

export class VisitorInterface implements Visitor {
	constructor(props: AnyObject) {}
	visitElementA(elementA: VisitingElementA) {
		console.log(this.constructor.name);
		console.log(elementA.constructor.name);
	}
	visitElementB(elementB: VisitingElementB) {
		console.log(this.constructor.name);
		console.log(elementB.constructor.name);
	}
}

export class AnotherVisitorInterface implements Visitor {
	constructor(props: AnyObject) {}
	visitElementA(elementA: VisitingElementA) {
		console.log(this.constructor.name);
		console.log(elementA.constructor.name);
	}
	visitElementB(elementB: VisitingElementB) {
		console.log(this.constructor.name);
		console.log(elementB.constructor.name);
	}
}


