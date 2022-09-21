import './assets/styles/reset.css';
import './assets/styles/general-styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ListCarsProvider from 'contexts/ListCars.context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ListCarsProvider>
			<App />
		</ListCarsProvider>
	</React.StrictMode>
);
