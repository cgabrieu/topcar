import React from 'react';
import styled from 'styled-components';
import { TITLES } from 'pages/Home/Home.consts';

export default function Navbar({ children }) {
	return (
		<NavbarContainer>
			<HomeTitle>{TITLES.home}</HomeTitle>
			{children}
		</NavbarContainer>
	);
}

const NavbarContainer = styled.div`
	position: relative;
	padding: 10px 0;
	height: 40px;
	margin-bottom: 25px;
`;

const HomeTitle = styled.h2`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 21px;
	font-weight: bold;
	letter-spacing: 2px;
`;
