import { Shape, Rectangle } from "./index";

export const demoPrototype = () => {
	const shapes: Shape[] = [];
	const shapesCopy: Shape[] = [];

	const rect = new Rectangle({
		x: 10,
		y: 10,
		color: 'white',
		width: 10,
		height: 10,
	});

	const shape = new Shape({
		x: 10,
		y: 10,
		color: 'white',
	});

	shapes.push(...[shape, rect]);

	for (let shape of shapes) {
		const newShape = shape.clone();

		shapesCopy.push(newShape);
	}

	console.log(shapes);
	console.log(shapesCopy);
};
