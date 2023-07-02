import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './store.js';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-tailwind/react';
import Nav from "./components/Nav.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<Provider store={store}>
      <Nav/>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
