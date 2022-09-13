import React from 'react';
import styled from 'styled-components';
import List from 'components/List';
import { TITLES, BUTTONS } from './Home.consts';

export default function Home() {
	return (
		<HomeContainer>
			<HomeNav>
				<CancelButton>{BUTTONS.cancel}</CancelButton>
				<HomeTitle>{TITLES.home}</HomeTitle>
				<ConfirmButton>{BUTTONS.confirm}</ConfirmButton>
			</HomeNav>
			<List />
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
