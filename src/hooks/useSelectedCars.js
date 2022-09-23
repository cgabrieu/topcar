import { useState } from 'react';

function useSelectedCars() {
	const [selectedCars, setSelectedCars] = useState([]);

	function isCarSelected(car) {
		return selectedCars.includes(car);
	}

	function someCarsSelected(currentCarsList) {
		return currentCarsList.some((car) => selectedCars.includes(car));
	}

	function currentCarListIsSelected(currentCarsList) {
		const areAllCarsSelected = currentCarsList.every((car) =>
			selectedCars.includes(car)
		);

		return someCarsSelected(currentCarsList) && !areAllCarsSelected
			? null
			: areAllCarsSelected;
	}

	function handleOnSelectCar(car) {
		let newSelectedCars = [...selectedCars, car];

		if (isCarSelected(car))
			newSelectedCars = selectedCars.filter((currCar) => currCar.id !== car.id);

		setSelectedCars(newSelectedCars);
	}

	function handleOnSelectAllCars(currentCarsList) {
		if (someCarsSelected(currentCarsList)) {
			const selectedCarsWithoutCurrentCarsList = selectedCars.filter(
				(car) => !currentCarsList.includes(car)
			);
			setSelectedCars(selectedCarsWithoutCurrentCarsList);
		} else {
			const unselectedCarsList = currentCarsList.filter(
				(car) => !selectedCars.includes(car)
			);
			setSelectedCars([...selectedCars, ...unselectedCarsList]);
		}
	}

	return {
		selectedCars,
		setSelectedCars,
		isCarSelected,
		handleOnSelectCar,
		handleOnSelectAllCars,
		currentCarListIsSelected,
	};
}

export default useSelectedCars;
