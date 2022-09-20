import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Checkbox from './Checkbox.component';

export default function ListItem({
	car,
	currentPage,
	selectedCars,
	setSelectedCars,
}) {
	const navigate = useNavigate();

	const currentPageSelectedCars = selectedCars[currentPage];
	const isSelected = currentPageSelectedCars?.includes(car);

	const handleOnSelect = () => {
		if (isSelected) {
			setSelectedCars({
				...selectedCars,
				[currentPage]: currentPageSelectedCars.filter(
					(currCar) => currCar !== car
				),
			});
		} else {
			setSelectedCars({
				...selectedCars,
				[currentPage]: [...(currentPageSelectedCars || []), car],
			});
		}
	};

	return (
		<ItemContainer>
			<ContentContainer onClick={() => navigate(`/car/${car.id}`)}>
				<h3>{car.name}</h3>
				<TagContainer>
					<Tag>{car.UF}</Tag>
					<Tag>{car.model}</Tag>
					<Tag>{car.color}</Tag>
				</TagContainer>
			</ContentContainer>
			<Checkbox isSelected={isSelected} handleOnSelect={handleOnSelect} />
		</ItemContainer>
	);
}

const ContentContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	> h3 {
		cursor: pointer;

		&:hover {
			opacity: 70%;
		}
	}
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
