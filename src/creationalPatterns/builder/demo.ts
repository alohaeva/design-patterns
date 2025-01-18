import { CommonHouseBuilder, HouseDesignBuilder, HouseDirector } from './index';

export const demoBuilder = () => {
	const productsMap = new Map<string, any>();

	const houseBuilder = new CommonHouseBuilder();
	const houseDesignBuilder = new HouseDesignBuilder();

	const houseDirector = new HouseDirector(houseBuilder);
	const houseDesignDirector = new HouseDirector(houseDesignBuilder);

	houseDirector.constructSimpleHouse('Simple House 1');
	const simpleHouse = houseBuilder.getResult();
	houseDirector.constructLuxuryHouse('Luxury House 1');
	const luxuryHouse = houseBuilder.getResult();
	houseDesignDirector.constructSimpleHouse('Simple HouseDesign 1');
	const simpleHouseDesign = houseDesignBuilder.getResult();
	houseDesignDirector.constructLuxuryHouse('Luxury HouseDesign 1');
	const luxuryHouseDesign = houseDesignBuilder.getResult();

	productsMap.set(simpleHouse.getLabel(), simpleHouse);
	productsMap.set(luxuryHouse.getLabel(), luxuryHouse);
	productsMap.set(simpleHouseDesign.getLabel(), simpleHouseDesign);
	productsMap.set(luxuryHouseDesign.getLabel(), luxuryHouseDesign);

	for (const [_, value] of productsMap) {
		console.log(value.label, value.getDescription());
	}
};
