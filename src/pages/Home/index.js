import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import Pagination from 'components/Pagination.component';
import usePagination from 'hooks/usePagination';
import Dropdown from 'components/Dropdown.component';
import List from 'components/List.component';
import filtersReduce, { initialStateFilters } from 'utils/filtersReduce';
import filtersApplier from 'utils/filtersApplier';
import Modal from 'components/Modal.component';
import { TITLES, BUTTONS, FILTERS } from './Home.consts';
import getCars from './Home.service';

export default function Home() {
	const [selectedCars, setSelectedCars] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [filters, setFilters] = useReducer(filtersReduce, initialStateFilters);

	const carsList = getCars().data;
	const carsFiltered = filtersApplier(carsList, filters);

	const { currentData, currentPage, next, prev, goTo, maxPage } =
		usePagination(carsFiltered);

	const currentCarsList = currentData();

	return (
		<>
			{isModalOpen && (
				<Modal selectedCars={selectedCars} setIsModalOpen={setIsModalOpen} />
			)}
			<HomeContainer>
				<HomeNav>
					<CancelButton onClick={() => setSelectedCars([])}>
						{BUTTONS.cancel}
					</CancelButton>
					<HomeTitle>{TITLES.home}</HomeTitle>
					{selectedCars.length > 0 && (
						<ConfirmButton onClick={() => setIsModalOpen(true)}>
							{BUTTONS.confirm}
						</ConfirmButton>
					)}
				</HomeNav>
				<FiltersContainer>
					<ButtonResetFilters
						onClick={() => setFilters({ filterType: 'reset' })}
					>
						{BUTTONS.resetFilters}
					</ButtonResetFilters>
					<Dropdown
						type="UF"
						headerText={FILTERS.UF}
						carsList={carsFiltered}
						goTo={goTo}
						filters={filters}
						setFilters={setFilters}
					/>
					<Dropdown
						type="model"
						headerText={FILTERS.model}
						carsList={carsFiltered}
						goTo={goTo}
						filters={filters}
						setFilters={setFilters}
					/>
					<Dropdown
						type="color"
						headerText={FILTERS.color}
						carsList={carsFiltered}
						goTo={goTo}
						filters={filters}
						setFilters={setFilters}
					/>
				</FiltersContainer>
				<List
					carsList={currentCarsList}
					selectedCars={selectedCars}
					setSelectedCars={setSelectedCars}
				/>
				<Pagination
					currentPage={currentPage}
					next={next}
					prev={prev}
					goTo={goTo}
					maxPage={maxPage}
				/>
			</HomeContainer>
		</>
	);
}

const FiltersContainer = styled.div`
	display: flex;
	margin-bottom: 10px;
`;

const HomeContainer = styled.div`
	width: 100%;
`;

const HomeNav = styled.div`
	position: relative;
	padding: 10px;
	height: 40px;
	margin-bottom: 25px;
`;

const HomeTitle = styled.h2`
	position: absolute;
	text-align: center;
	width: 100%;
	text-align: center;
	font-size: 21px;
	font-weight: bold;
	letter-spacing: 1px;
`;

const GeneralButton = styled.button`
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

const CancelButton = styled(GeneralButton)`
	position: absolute;
`;

const ConfirmButton = styled(CancelButton)`
	color: var(--secondary-text-color);
	right: 0;
`;

const ButtonResetFilters = styled(GeneralButton)`
	color: var(--main-text-color);
	font-size: 10px;
	border: 2px solid var(--main-text-color);
	border-radius: 5px;
`;
