import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from 'components/Navbar.component';
import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrow-left.svg';
import { getCarById } from 'pages/Home/Home.service';

export default function CarDetail() {
	const { carId } = useParams();
	const navigate = useNavigate();

	const car = getCarById(carId);

	return (
		<CarDetailContainer>
			<Navbar>
				<ArrowLeft onClick={() => navigate(-1)} />
			</Navbar>
			<CarTitle>{car.name}</CarTitle>
			<InfoTable>
				<LineTable>
					<ItemTable isHeader>Estado: </ItemTable>
					<ItemTable>{car.UF}</ItemTable>
				</LineTable>
				<LineTable>
					<ItemTable isHeader>Modelo: </ItemTable>
					<ItemTable>{car.model}</ItemTable>
				</LineTable>
				<LineTable>
					<ItemTable isHeader>Cor: </ItemTable>
					<ItemTable>{car.color}</ItemTable>
				</LineTable>
			</InfoTable>
		</CarDetailContainer>
	);
}

const ItemTable = styled.div`
	width: 100px;
	padding: 10px 5px;

	opacity: ${({ isHeader }) => isHeader && '60%;'};
`;

const LineTable = styled.div`
	display: flex;
	background-color: var(--light-text-color);

	div:first-child {
		border-right: 1px solid var(--smoke-color);
	}

	&:nth-child(odd) {
		background-color: var(--light-color);
	}
`;

const InfoTable = styled.div`
	width: 200px;
	border-radius: 5px;

	div:last-child {
		border-radius: 0 0 5px 5px;
	}

	div:first-child {
		border-radius: 5px 5px 0 0;
	}
`;

const ArrowLeft = styled(ArrowLeftIcon)`
	position: absolute;
	width: 20px;
	top: 5px;
	cursor: pointer;
`;

const CarTitle = styled.h1`
	font-size: 18px;
	font-weight: bold;
	margin: 40px 0;
`;

const CarDetailContainer = styled.div`
	width: 100%;
`;
