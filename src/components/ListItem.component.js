import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MarkIcon } from 'assets/icons/mark.svg';

export default function ListItem({ car, selectedCars, setSelectedCars }) {
	const handleOnSelect = () => {
		if (selectedCars.includes(car)) {
			setSelectedCars(selectedCars.filter((currCar) => currCar !== car));
		} else {
			setSelectedCars([...selectedCars, car]);
		}
	};

	return (
		<ItemContainer>
			<ContentContainer>
				<h3>{car.name}</h3>
				<TagContainer>
					<Tag>{car.UF}</Tag>
					<Tag>{car.model}</Tag>
					<Tag>{car.color}</Tag>
				</TagContainer>
			</ContentContainer>
			<Checkbox onClick={handleOnSelect}>
				{selectedCars.includes(car) && <MarkIcon />}
			</Checkbox>
		</ItemContainer>
	);
}

const Checkbox = styled.div`
	cursor: pointer;
	width: 25px;
	height: 25px;
	border: 3px solid var(--main-text-color);
`;

const ContentContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ItemContainer = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	padding: 5px 0;

	> h3 {
		font-size: 14px;
		font-weight: 600;
		margin-bottom: 10px;
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
