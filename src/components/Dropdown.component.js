import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg';
import useOutsideClick from 'hooks/useOutsideClick';

export default function Dropdown({
	type,
	headerText,
	carsList,
	goTo,
	filters,
	setFilters,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useOutsideClick(() => setIsOpen(false));

	const options = carsList
		.map((car) => car[type])
		.filter((option, i, self) => self.indexOf(option) === i);

	const handleOnClick = (option) => {
		goTo(1);
		setFilters({ filterType: type, option });
	};

	return (
		<DropdownContainer ref={ref}>
			<HeaderDropdown onClick={() => setIsOpen(!isOpen)}>
				<p>{headerText}</p>
				<ArrowDown isopen={isOpen.toString()} />
			</HeaderDropdown>
			{isOpen && (
				<OptionsContainer>
					{options.map((option) => (
						<OptionItem key={option} onClick={() => handleOnClick(option)}>
							<p>{option}</p>
							<Checkbox isChecked={filters[type].includes(option)} />
						</OptionItem>
					))}
				</OptionsContainer>
			)}
		</DropdownContainer>
	);
}

const ArrowDown = styled(ArrowDownIcon)`
	animation: ${({ isopen }) =>
		isopen === 'true' && 'rotate 300ms ease-in-out forwards;'};
`;

const Checkbox = styled.div`
	width: 10px;
	height: 10px;
	background-color: white;
	border: 1px black solid;
	border-radius: 2px;
	background-color: ${({ isChecked }) =>
		isChecked && 'var(--secondary-text-color)'};
`;

const OptionItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2px 5px 2px 6px;

	&:hover {
		background-color: var(--smoke-color);

		&:last-child {
			border-radius: 0 0 3px 3px;
		}
	}

	p {
		font-size: 11px;
	}
`;

const OptionsContainer = styled.div`
	width: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	margin-top: -4px;
	background-color: var(--light-color);
	border-radius: 0 0 5px 5px;
	border: 2px solid var(--main-text-color);
`;

const HeaderDropdown = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 2px solid var(--main-text-color);
	border-radius: 5px;
	padding-left: 5px;

	> p {
		font-size: 13px;
	}
`;

const DropdownContainer = styled.div`
	position: relative;
	width: 77px;
	margin: 0 auto;
`;
