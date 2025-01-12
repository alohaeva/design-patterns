import { VectorRenderer, RasterRenderer, Circle, Rectangle } from './index';

export const demoBridge = () => {
	const vectorRenderer = new VectorRenderer();
	const rasterRenderer = new RasterRenderer();

	const circle = new Circle(vectorRenderer, 10);
	circle.draw(); // Output: Drawing a circle of radius 10 in VECTOR graphics.

	const rectangle = new Rectangle(rasterRenderer, 20, 15);
	rectangle.draw(); // Output: Drawing a rectangle of width 20 and height 15 in RASTER graphics.
}
