import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Pagination from 'components/Pagination.component';
import Dropdown from 'components/Dropdown.component';
import List from 'components/List.component';
import Modal from 'components/Modal.component';
import Navbar from 'components/Navbar.component';
import { ListContext } from 'contexts/ListCars.context';
import { BUTTONS, FILTERS } from './Home.consts';

export default function Home() {
	const { selectedCarsValues, filtersValues, paginationValues } =
		useContext(ListContext);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { selectedCars, setSelectedCars } = selectedCarsValues;
	const { filters, setFilters, carsFiltered } = filtersValues;
	const { currentData, currentPage, next, prev, goTo, maxPage } =
		paginationValues;

	const currentCarsList = currentData();

	const onChangeFilter = () => {
		setSelectedCars([]);
		goTo(1);
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
					{selectedCars.length > 0 && (
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
