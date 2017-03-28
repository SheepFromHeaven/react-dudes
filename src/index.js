import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import calendarApp from './reducers/index';

let initState = {
	days: [{
		id: 0,
		weekday: "HA"
	}]
};

let store = createStore(calendarApp, initState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
