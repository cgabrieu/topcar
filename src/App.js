import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import CarDetail from 'pages/CarDetail';
import BaseContainer from 'components/Base.container';
import ListCarsProvider from 'contexts/ListCars.context';

export default function App() {
	return (
		<ListCarsProvider>
			<BrowserRouter>
				<BaseContainer>
					<Routes>
						<Route index element={<Home />} />
						<Route path="car/:carId" element={<CarDetail />} />
					</Routes>
				</BaseContainer>
			</BrowserRouter>
		</ListCarsProvider>
	);
}
