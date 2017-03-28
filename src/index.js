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
			dayInWeek: 0,
			dayInMonth: 1,
			holidayName: "Nikolaus",
			calendarWeek: 1,
			monthId: 0
		},
		{
			id: 1,
			dayInWeek: 5,
			dayInMonth: 2,
			holidayName: "Nikolaus",
			calendarWeek: 1,
			monthId: 0
		},
		{
			id: 3,
			dayInWeek: 0,
			dayInMonth: 1,
			holidayName: "Nikolaus",
			calendarWeek: 2,
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
