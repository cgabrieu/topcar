import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { MODAL } from 'pages/Home/Home.consts';

export default function Modal({ selectedCars, setIsModalOpen }) {
	return (
		<ModalContainer>
			<ModalComponent>
				<CloseModalIcon onClick={() => setIsModalOpen(false)} />
				<h3>{MODAL.title}</h3>
				<ModalContent>
					{selectedCars.map(({ id, name }) => (
						<p key={id}>- {name}</p>
					))}
				</ModalContent>
			</ModalComponent>
		</ModalContainer>
	);
}

const CloseModalIcon = styled(CloseIcon)`
	position: absolute;
	cursor: pointer;
`;

const ModalContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	z-index: 5;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
`;

const ModalComponent = styled.div`
	background-color: var(--light-color);
	border: 2px solid var(--main-text-color);
	border-radius: 3px;
	padding: 10px;
	padding-bottom: 0;
	width: 550px;
	min-height: 80px;

	> h3 {
		text-align: center;
		font-size: 19px;
		font-weight: bold;
	}
`;

const ModalContent = styled.div`
	padding: 25px;
	margin-left: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	p:not(:last-child) {
		margin-bottom: 10px;
	}
`;
