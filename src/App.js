import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import CarDetail from 'pages/CarDetail';
import BaseContainer from 'components/Base.container';

export default function App() {
	return (
		<BrowserRouter>
			<BaseContainer>
				<Routes>
					<Route index element={<Home />} />
					<Route path="car/:carId" element={<CarDetail />} />
				</Routes>
			</BaseContainer>
		</BrowserRouter>
	);
}
