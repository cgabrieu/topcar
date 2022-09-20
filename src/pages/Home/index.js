import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import Pagination from 'components/Pagination.component';
import usePagination from 'hooks/usePagination';
import Dropdown from 'components/Dropdown.component';
import List from 'components/List.component';
import filtersReduce, { initialStateFilters } from 'utils/filtersReduce';
import filtersApplier from 'utils/filtersApplier';
import Modal from 'components/Modal.component';
import Navbar from 'components/Navbar.component';
import Checkbox from 'components/Checkbox.component';
import { BUTTONS, FILTERS } from './Home.consts';
import { getCars } from './Home.service';

export default function Home() {
	const [selectedCars, setSelectedCars] = useState({});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [filters, setFilters] = useReducer(filtersReduce, initialStateFilters);

	const carsList = getCars().data;
	const carsFiltered = filtersApplier(carsList, filters);

	const { currentData, currentPage, next, prev, goTo, maxPage } =
		usePagination(carsFiltered);

	const currentCarsList = currentData();
	const areAllSelected =
		selectedCars[currentPage]?.length === currentCarsList.length;

	const onChangeFilter = () => {
		setSelectedCars([]);
		goTo(1);
	};

	const handleOnSelectAll = () => {
		if (areAllSelected) {
			setSelectedCars({
				...selectedCars,
				[currentPage]: [],
			});
		} else {
			setSelectedCars({
				...selectedCars,
				[currentPage]: currentCarsList,
			});
		}
	};

	return (
		<>
			<Modal
				selectedCars={selectedCars}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
			/>
			<HomeContainer>
				<Navbar>
					{Object.values(selectedCars).length > 0 && (
						<>
							<CancelButton onClick={() => setSelectedCars([])}>
								{BUTTONS.cancel}
							</CancelButton>
							<ConfirmButton onClick={() => setIsModalOpen(true)}>
								{BUTTONS.confirm}
							</ConfirmButton>
						</>
					)}
				</Navbar>
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
					<Checkbox
						isSelected={areAllSelected}
						handleOnSelect={handleOnSelectAll}
					/>
				</FiltersContainer>
				<List
					carsList={currentCarsList}
					currentPage={currentPage}
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
