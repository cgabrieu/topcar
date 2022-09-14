import MOCK_CARS from 'mocks/cars.json';

function getCarsByRange(begin, end) {
	return {
		data: MOCK_CARS.slice(begin, end),
	};
}

function getInfoCars() {
	return {
		quantity: MOCK_CARS.length,
	};
}

export { getCarsByRange, getInfoCars };
