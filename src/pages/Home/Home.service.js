import MOCK_CARS from 'mocks/cars.json';

function getCars() {
	return {
		data: MOCK_CARS,
	};
}

function getCarById(id) {
	return MOCK_CARS.find((car) => car.id === parseInt(id, 10));
}

export { getCars, getCarById };
