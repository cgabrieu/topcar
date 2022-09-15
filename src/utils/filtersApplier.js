export default function filtersApplier(carsList, filters) {
	return carsList
		.filter((car) => (filters.UF.length ? filters.UF.includes(car.UF) : true))
		.filter((car) =>
			filters.model.length ? filters.model.includes(car.model) : true
		)
		.filter((car) =>
			filters.color.length ? filters.color.includes(car.color) : true
		);
}
