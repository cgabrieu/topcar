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
	display: flex;
	width: 600px;
	padding: 10px;
`;
