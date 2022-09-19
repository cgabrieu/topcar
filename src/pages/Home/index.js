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

	const onChangeFilter = () => {
		setSelectedCars([]);
		goTo(1);
	};

	return (
		<>
			{isModalOpen && (
				<Modal selectedCars={selectedCars} setIsModalOpen={setIsModalOpen} />
			)}
			<HomeContainer>
				<HomeNav>
					{selectedCars.length > 0 && (
						<CancelButton onClick={() => setSelectedCars([])}>
							{BUTTONS.cancel}
						</CancelButton>
					)}
					<HomeTitle>{TITLES.home}</HomeTitle>
					{selectedCars.length > 0 && (
						<ConfirmButton onClick={() => setIsModalOpen(true)}>
							{BUTTONS.confirm}
						</ConfirmButton>
					)}
				</HomeNav>
				<FiltersContainer>
					<ButtonResetFilters
						onClick={() => {
							setFilters({ filterType: 'reset' });
							onChangeFilter();
						}}
					>
						{BUTTONS.resetFilters}
					</ButtonResetFilters>
					<Dropdown
						type="UF"
						headerText={FILTERS.UF}
						carsList={carsFiltered}
						filters={filters}
						setFilters={setFilters}
						onChangeFilter={onChangeFilter}
					/>
					<Dropdown
						type="model"
						headerText={FILTERS.model}
						carsList={carsFiltered}
						filters={filters}
						setFilters={setFilters}
						onChangeFilter={onChangeFilter}
					/>
					<Dropdown
						type="color"
						headerText={FILTERS.color}
						carsList={carsFiltered}
						filters={filters}
						setFilters={setFilters}
						onChangeFilter={onChangeFilter}
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
	padding: 10px 0;
	height: 40px;
	margin-bottom: 25px;
`;

const HomeTitle = styled.h2`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 21px;
	font-weight: bold;
	letter-spacing: 2px;
`;

const GeneralButton = styled.button`
	background: none;
	border: none;
	font-size: 16px;
	font-weight: 600;
	outline: inherit;
	cursor: pointer;
	color: var(--main-text-color);

	&:hover {
		animation: shake 500ms ease-in-out forwards;
	}
`;

const CancelButton = styled(GeneralButton)`
	position: absolute;
	left: 0;
	color: var(--cancel-text-color);
`;

const ConfirmButton = styled(GeneralButton)`
	position: absolute;
	right: 0;
	color: var(--secondary-text-color);
`;

const ButtonResetFilters = styled(GeneralButton)`
	font-size: 10px;
	border: 2px solid var(--main-text-color);
	border-radius: 5px;
`;
