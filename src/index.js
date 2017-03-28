import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import calendarApp from './reducers/index';

let initState = {
	days: [
		{
			id: 0,
			weekday: "Monday",
			dayInMonth: 1,
			holidayName: "Nikolaus",
			monthId: 0
		},
		{
			id: 1,
			weekday: "Tuesday",
			dayInMonth: 2,
			holidayName: "Nikolaus",
			monthId: 0
		},
		{
			id: 3,
			weekday: "Monday",
			dayInMonth: 1,
			holidayName: "Nikolaus",
			monthId: 1
		}
	],
	months: [
		{
			id: 0,
			name: "January",
			yearId: 0
		},
		{
			id: 1,
			name: "January",
			yearId: 0
		}
	],
	years: [
		{
			id: 0,
			name: "2017"
		}
	]
};

let store = createStore(calendarApp, initState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
