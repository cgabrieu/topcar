import React from 'react';
import styled from 'styled-components';
import MOCK_CARS from 'mocks/cars.json';
import BaseContainer from 'components/BaseContainer';
import TITLES from './Home.consts';

export default function Home() {
	return (
		<BaseContainer>
			<HomeTitle>{TITLES.home}</HomeTitle>
			{MOCK_CARS.forEach((car) => (
				<h1>{car.name}</h1>
			))}
		</BaseContainer>
	);
}

const HomeTitle = styled.h2`
	font-size: 22px;
	font-weight: bold;
	margin: 0 auto;
	letter-spacing: 1px;
`;
