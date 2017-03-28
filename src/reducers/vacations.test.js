import { expect } from 'chai'
import days from './vacations';

const actionMock = {
	type: 'ADD_VACATION',
	id: 234,
	startDate: '',
	endDate: '',
	personId: 123
};

describe('vacations', () => {
	it('should be added with ADD_VACATION action', () => {
		expect(days([], actionMock)).to.deep.equal([{
			id: 234,
			startDate: '',
			endDate: '',
			personId: 123
		}]);
	});

	it('should return default state if action is undefined', () => {
		expect(days([], {type: undefined})).to.deep.equal([]);
	});
});