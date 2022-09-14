import React from 'react';
import styled from 'styled-components';

export default function Pagination({ next, prev, goTo, maxPage }) {

	return (
		<PaginationContainer>
			<ButtonArrow onClick={prev}>{`<`}</ButtonArrow>
			{[...Array(maxPage + 1).keys()].slice(1).map((n) => (
				<GoToLabel key={n} onClick={() => goTo(n)}>
					{n}
				</GoToLabel>
			))}
			<ButtonArrow onClick={next}>{`>`}</ButtonArrow>
		</PaginationContainer>
	);
}

const PaginationContainer = styled.li`
	display: flex;
	justify-content: space-around;
	margin: 2px 10%;
`;

const ButtonArrow = styled.div`

`;

const GoToLabel = styled.div`
	cursor: pointer;

`;
