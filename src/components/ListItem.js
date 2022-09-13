import React from 'react';
import styled from 'styled-components';

export default function ListItem({ name, UF, model, color }) {
	return (
		<ItemContainer>
			<h3>{name}</h3>
			<TagContainer>
				<Tag>{UF}</Tag>
				<Tag>{model}</Tag>
				<Tag>{color}</Tag>
			</TagContainer>
		</ItemContainer>
	);
}

const ItemContainer = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 80px;
	padding: 5px 0;
	background-color: violet;

	> h3 {
		font-size: 16px;
		font-weight: 600;
	}
`;

const TagContainer = styled.div`
	display: flex;

	div:not(div:last-child) {
		margin-right: 5px;
	}
`;

const Tag = styled.div`
	height: 20px;
	border-radius: 10px;
	padding: 0 10px;
	background-color: yellow;
`;
