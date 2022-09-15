import React, { useReducer } from 'react';
import styled from 'styled-components';
import List from 'components/List.component';
import Pagination from 'components/Pagination.component';
import usePagination from 'hooks/usePagination';
import Dropdown from 'components/Dropdown.component';
import filtersReduce, { initialStateFilters } from 'utils/filtersReduce';
import filtersApplier from 'utils/filtersApplier';
import { TITLES, BUTTONS } from './Home.consts';
import getCars from './Home.service';

export default function Home() {
	const [filters, setFilters] = useReducer(filtersReduce, initialStateFilters);

	const carsList = getCars().data;
	const carsFiltered = filtersApplier(carsList, filters);

	const { currentData, currentPage, next, prev, goTo, maxPage } =
		usePagination(carsFiltered);
	const currentCarsList = currentData();

	return (
		<HomeContainer>
			<HomeNav>
				<CancelButton>{BUTTONS.cancel}</CancelButton>
				<HomeTitle>{TITLES.home}</HomeTitle>
				<ConfirmButton>{BUTTONS.confirm}</ConfirmButton>
			</HomeNav>
			<FiltersContainer>
				<ButtonResetFilters onClick={() => setFilters({ filterType: 'reset' })}>
					Resetar filtros
				</ButtonResetFilters>
				<Dropdown
					type="UF"
					headerText="UF"
					carsList={currentCarsList}
					goTo={goTo}
					filters={filters}
					setFilters={setFilters}
				/>
				<Dropdown
					type="model"
					headerText="Modelo"
					carsList={currentCarsList}
					goTo={goTo}
					filters={filters}
					setFilters={setFilters}
				/>
				<Dropdown
					type="color"
					headerText="Cor"
					carsList={currentCarsList}
					goTo={goTo}
					filters={filters}
					setFilters={setFilters}
				/>
			</FiltersContainer>
			<List carsList={currentCarsList} />
			<Pagination
				currentPage={currentPage}
				next={next}
				prev={prev}
				goTo={goTo}
				maxPage={maxPage}
			/>
		</HomeContainer>
	);
}

const FiltersContainer = styled.div`
	display: flex;
`;

const HomeContainer = styled.div`
	width: 100%;
`;

const HomeNav = styled.div`
	display: flex;
	margin-bottom: 25px;
`;

const HomeTitle = styled.h2`
	font-size: 21px;
	font-weight: bold;
	letter-spacing: 1px;
	margin: 0 auto;
`;

const CancelButton = styled.button`
	background: none;
	color: var(--cancel-text-color);
	border: none;
	font-size: 16px;
	font-weight: 600;
	outline: inherit;
	cursor: pointer;

	&:hover {
		animation: shake 500ms ease-in-out forwards;
	}
`;

const ConfirmButton = styled(CancelButton)`
	color: var(--secondary-text-color);
`;

const ButtonResetFilters = styled(CancelButton)`
	color: var(--main-text-color);
	font-size: 10px;
	border: 2px solid var(--main-text-color);
	border-radius: 5px;
`;
