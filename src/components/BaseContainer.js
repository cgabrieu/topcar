import React from 'react';
import styled from 'styled-components';

export default function BaseContainer({ children }) {
	return (
		<MainContainer>
			<Container>{children}</Container>
		</MainContainer>
	);
}

const MainContainer = styled.div`
	display: flex;
	justify-content: center;
`;
const Container = styled.div`
	width: 600px;
	padding: 10px;
	display: flex;
	background-color: #303030;
`;
