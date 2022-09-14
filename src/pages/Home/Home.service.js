import MOCK_CARS from 'mocks/cars.json';

function getCars() {
	return {
		size: MOCK_CARS.length,
		data: MOCK_CARS,
	};
}

export default getCars;
