import { useState } from 'react';

function useSelectedCars() {
	const [selectedCars, setSelectedCars] = useState([]);

	function areAllCarsSelected(currentCarsList) {
		return currentCarsList.every((car) => selectedCars.includes(car));
	}

	function someCarsSelected(currentCarsList) {
		return (
			!areAllCarsSelected(currentCarsList) &&
			currentCarsList.some((car) => selectedCars.includes(car))
		);
	}

	function currentCarListIsSelected(currentCarsList) {
		return someCarsSelected(currentCarsList)
			? null
			: areAllCarsSelected(currentCarsList);
	}

	function handleOnSelectCar(car) {
		let newSelectedCars = [...selectedCars, car];
		const isSelected = selectedCars.includes(car);

		if (isSelected)
			newSelectedCars = selectedCars.filter((currCar) => currCar.id !== car.id);

		setSelectedCars(newSelectedCars);
	}

	function handleOnSelectAllCars(currentCarsList) {
		const someOrAllCarsSelected =
			areAllCarsSelected(currentCarsList) || someCarsSelected(currentCarsList);

		if (someOrAllCarsSelected) {
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
		handleOnSelectCar,
		handleOnSelectAllCars,
		currentCarListIsSelected,
	};
}

export default useSelectedCars;
