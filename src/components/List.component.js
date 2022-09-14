import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem.component';

export default function List({ carsList }) {
	return (
		<ListContainer>
			{carsList.map(({ id, name, UF, model, color }) => (
				<ListItem key={id} name={name} UF={UF} model={model} color={color} />
			))}
		</ListContainer>
	);
}

const ListContainer = styled.ul`
	li:not(li:last-child) {
		border-bottom: 1.5px solid var(--light-text-color);
	}
`;
