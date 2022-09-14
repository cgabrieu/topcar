import React from 'react';
import styled from 'styled-components';
import List from 'components/List.component';
import Pagination from 'components/Pagination.component';
import { TITLES, BUTTONS } from './Home.consts';
import useCarsListPagination from '../../hooks/useCarsListPagination';

export default function Home() {
	const { currentData, next, prev, goTo, maxPage } = useCarsListPagination();
	const carsList = currentData();

	return (
		<HomeContainer>
			<HomeNav>
				<CancelButton>{BUTTONS.cancel}</CancelButton>
				<HomeTitle>{TITLES.home}</HomeTitle>
				<ConfirmButton>{BUTTONS.confirm}</ConfirmButton>
			</HomeNav>
			<List carsList={carsList} />
			<Pagination next={next} prev={prev} goTo={goTo} maxPage={maxPage} />
		</HomeContainer>
	);
}

const HomeContainer = styled.div`
	width: 100%;
	background: blue;
`;

const HomeNav = styled.div`
	display: flex;
	background: yellow;
`;

const HomeTitle = styled.h2`
	font-size: 22px;
	font-weight: bold;
	letter-spacing: 1px;
	margin: 0 auto;
`;

const CancelButton = styled.button``;

const ConfirmButton = styled(CancelButton)``;
