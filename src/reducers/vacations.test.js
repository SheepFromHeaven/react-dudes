import { expect } from 'chai'
import vacations from './vacations';

const actionMock = {
	type: 'ADD_VACATION',
	id: 0,
	startDate: 0,
	endDate: 1,
	personId: 0
};

describe('vacations', () => {
	it('should be added with ADD_VACATION action', () => {
		expect(vacations([], actionMock)).to.deep.equal([{
			id: 0,
			startDate: 0,
			endDate: 1,
			personId: 0
		}]);
	});

	it('should return default state if action is undefined', () => {
		expect(vacations([], {type: undefined})).to.deep.equal([]);
	});
});