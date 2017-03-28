import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import calendarApp from './reducers/index';
import mockState from './mockState';

let store = createStore(calendarApp, mockState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
