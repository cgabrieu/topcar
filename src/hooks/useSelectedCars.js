import { useState } from 'react';

function useSelectedCars(currentData) {
	const [selectedCars, setSelectedCars] = useState([]);

	const currentCarsList = currentData();

	const isCarSelected = (car) => selectedCars.includes(car);

	const areAllCarsSelected = currentCarsList.every((car) =>
		selectedCars.includes(car)
	);

	const someCarsSelected =
		!areAllCarsSelected &&
		currentCarsList.some((car) => selectedCars.includes(car));

	const currentCarListIsSelected = someCarsSelected ? null : areAllCarsSelected;

	const handleOnSelectCar = (car, isSelected) => {
		let newSelectedCars = [...selectedCars, car];
		if (isSelected)
			newSelectedCars = selectedCars.filter((currCar) => currCar.id !== car.id);

		setSelectedCars(newSelectedCars);
	};

	const handleOnSelectAllCars = () => {
		if (areAllCarsSelected) {
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
	};

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
