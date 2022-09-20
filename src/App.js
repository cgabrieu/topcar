import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BaseContainer from 'components/Base.container';
import Home from 'pages/Home';
import CarDetail from 'pages/CarDetail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/car/:carId',
		element: <CarDetail />,
	},
]);

export default function App() {
	return (
		<BaseContainer>
			<RouterProvider router={router} />
		</BaseContainer>
	);
}
