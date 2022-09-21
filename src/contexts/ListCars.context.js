import usePagination from 'hooks/usePagination';
import { getCars } from 'pages/Home/Home.service';
import { createContext, useReducer, useState } from 'react';
import filtersApplier from 'utils/filtersApplier';
import filtersReduce, { initialStateFilters } from 'utils/filtersReduce';

export const ListContext = createContext();

export default function ListCarsProvider({ children }) {
	const [selectedCars, setSelectedCars] = useState({});
	const [filters, setFilters] = useReducer(filtersReduce, initialStateFilters);

	const carsList = getCars().data;
	const carsFiltered = filtersApplier(carsList, filters);

	const selectedCarsValues = { selectedCars, setSelectedCars };
	const filtersValues = { filters, setFilters, carsFiltered };
	const paginationValues = usePagination(carsFiltered);

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const contextValues = { selectedCarsValues, filtersValues, paginationValues };

	return (
		<ListContext.Provider value={contextValues}>
			{children}
		</ListContext.Provider>
	);
}
