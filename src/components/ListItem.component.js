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

	> h3 {
		font-size: 14px;
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
	display: flex;
	align-items: center;
	height: 20px;
	font-size: 13px;
	border-radius: 5px;
	padding: 0 10px;
	border: 2px solid var(--smoke-color);
	color: var(--smoke-color);
`;
