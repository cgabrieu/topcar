import React from 'react';
import styled from 'styled-components';
import MOCK_CARS from 'mocks/cars.json';
import ListItem from './ListItem';

export default function List() {
	return (
		<ListContainer>
			{MOCK_CARS.map(({ id, name, UF, model, color }) => (
				<ListItem key={id} name={name} UF={UF} model={model} color={color} />
			))}
		</ListContainer>
	);
}

const ListContainer = styled.ul`
	background-color: green;

	li:not(li:last-child) {
		border-bottom: 2px dotted blue;
	}
`;
