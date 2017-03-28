import { expect } from 'chai'
import { addVacation } from './vacations';

describe('vacation action', () => {
	it('works as intended', () => {

		expect(addVacation(12, 23, 34)).to.deep.equal({
			type: 'ADD_VACATION',
			id: 0,
			startDate: 12,
			endDate: 23,
			userId: 34
		});
	});
});
