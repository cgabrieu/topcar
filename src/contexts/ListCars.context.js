import usePagination from 'hooks/usePagination';
import useSelectedCars from 'hooks/useSelectedCars';
import { getCars } from 'pages/Home/Home.service';
import { createContext, useReducer } from 'react';
import filtersApplier from 'utils/filtersApplier';
import filtersReduce, { initialStateFilters } from 'utils/filtersReduce';

export const ListContext = createContext();

export default function ListCarsProvider({ children }) {
	const [filters, setFilters] = useReducer(filtersReduce, initialStateFilters);

	const carsList = getCars().data;
	const carsFiltered = filtersApplier(carsList, filters);

	const filtersValues = { filters, setFilters, carsFiltered };
	const paginationValues = usePagination(carsFiltered);
	const selectedCarsValues = useSelectedCars(paginationValues.currentData);

	const contextValues = { selectedCarsValues, filtersValues, paginationValues };

	return (
		<ListContext.Provider value={contextValues}>
			{children}
		</ListContext.Provider>
	);
}
