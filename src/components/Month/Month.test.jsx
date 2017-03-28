// tests Month.jsx Component

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Month from './Month';

describe('Month', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Month />, div);
	});

	test('contains its needed DOM classes', () => {
		// Render a checkbox with label in the document
		const month = shallow(
			<Month name=""/>
		);

		// check if all elements are present one time
		expect(month.hasClass('month')).toBeTruthy();
		expect(month.find('.month__head')).toBeTruthy();
	});
});