// tests Month.jsx Component

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import Month from './Month';

const month = {
	id: 123,
	name: "Januar",
}

describe('Month', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Month month={month} days={[]}/>, div);
	});

	test('contains its needed DOM classes', () => {
		// Render a checkbox with label in the document
		const monthDOM = shallow(
			<Month month={month} days={[]}/>
		);

		// check if all elements are present one time
		expect(monthDOM.hasClass('month')).toBeTruthy();
		expect(monthDOM.find('.month__head')).toBeTruthy();
	});
});