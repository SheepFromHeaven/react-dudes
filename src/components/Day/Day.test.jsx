// tests Day.jsx Component

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import Day from './Day';

const day = {
	id: 1,
	dayInMonth: 1,
	dayInWeek: 0,
	calendarWeek: 1,
	holidayName: null,
	monthId: 1
};

const vacations = [{
	id: 123,
	userId: 3,
	color: '#cd87jd'
}];

describe('Day', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Day day={day} vacations={vacations}/>, div);
    });

    test('contains the correct texts', () => {
        // Render a checkbox with label in the document
        const dayDOM = shallow(
            <Day day={day} vacations={[]}/>
        );

        // check if all elements are present one time
        expect(dayDOM.text()).to.be.equal('1Mo1');
    });

    test('doesnt contain classes for vacations if vacations are empty', () => {
		const dayDOM = shallow(
			<Day day={day} vacations={[]}/>
		);

		expect(dayDOM.find('.day')).to.have.length(1);
		expect(dayDOM.find('.day__vaction')).to.have.length(0);
	});

});



