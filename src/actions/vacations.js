let nextVacationId = 0;
export const addVacation = (startDate, endDate, userId) => ({
	type: 'ADD_VACATION',
	id: nextVacationId++,
	startDate: startDate,
	endDate: endDate,
	user: userId
});