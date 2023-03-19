import {AnotherVisitorInterface, VisitingElementA, VisitingElementB, VisitorInterface} from "./index";

export const demoVisitor = () => {
	const visitor = new VisitorInterface({});
	const anotherVisitor = new AnotherVisitorInterface({});
	const elementA = new VisitingElementA({});
	const elementB = new VisitingElementB({});

	elementA.accept(visitor);
	elementA.accept(anotherVisitor);
	elementB.accept(visitor);
	elementB.accept(anotherVisitor);
}
