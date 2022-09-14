import React from 'react';
import styled from 'styled-components';

export default function Pagination({ currentPage, next, prev, goTo, maxPage }) {
	return (
		<PaginationContainer>
			<ButtonArrow onClick={prev}>{`<`}</ButtonArrow>
			{[...Array(maxPage + 1).keys()].slice(1).map((n) => (
				<GoToLabel
					key={n}
					isSelected={currentPage === n}
					onClick={() => goTo(n)}
				>
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
	margin: 10px 10% 3px 10%;
`;

const ButtonArrow = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 15px;
	font-weight: 500;
	color: var(--smoke-color);
	border: 1px solid var(--light-text-color);
	border-radius: 50%;
	width: 30px;
	height: 30px;
`;

const GoToLabel = styled(ButtonArrow)`
	font-size: 13px;
	background-color: ${({ isSelected }) => isSelected && 'var(--secondary-text-color)'};
	color: ${({ isSelected }) => isSelected && 'var(--light-color)'};
`;
