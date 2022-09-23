import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MarkIcon } from 'assets/icons/mark.svg';
import { ReactComponent as DashIcon } from 'assets/icons/dash.svg';

export default function Checkbox({ isSelected, handleOnSelect }) {
	return (
		<CheckboxContainer onClick={handleOnSelect}>
			{isSelected && <MarkIcon />}
			{isSelected === null && <DashIcon />}
		</CheckboxContainer>
	);
}

const CheckboxContainer = styled.div`
	cursor: pointer;
	min-width: 25px;
	width: 25px;
	height: 25px;
	border: 3px solid var(--main-text-color);
`;
