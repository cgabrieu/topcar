import React from 'react';
import styled from 'styled-components';
import List from 'components/List.component';
import Pagination from 'components/Pagination.component';
import { TITLES, BUTTONS } from './Home.consts';
import useCarsListPagination from '../../hooks/useCarsListPagination';

export default function Home() {
	const { currentData, currentPage, next, prev, goTo, maxPage } = useCarsListPagination();
	const carsList = currentData();

	return (
		<HomeContainer>
			<HomeNav>
				<CancelButton>{BUTTONS.cancel}</CancelButton>
				<HomeTitle>{TITLES.home}</HomeTitle>
				<ConfirmButton>{BUTTONS.confirm}</ConfirmButton>
			</HomeNav>
			<List carsList={carsList} />
			<Pagination currentPage={currentPage} next={next} prev={prev} goTo={goTo} maxPage={maxPage} />
		</HomeContainer>
	);
}

const HomeContainer = styled.div`
	width: 100%;
`;

const HomeNav = styled.div`
	display: flex;
	margin-bottom: 15px;
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
	padding: 5px;

	&:hover {
		animation: shake 500ms ease-in-out forwards;
	}
`;

const ConfirmButton = styled(CancelButton)`
	color: var(--secondary-text-color);
`;
