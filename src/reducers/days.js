const day = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_DAY':
			return {
				id: action.id,
				dayOfMonth: action.dayOfMonth,
				weekday: action.weekday,
				calendarWeek: action.calendarWeek,
				holidayName: action.holidayName
			};
		default:
			return state
	}
}

const days = (state = [], action) => {
	switch (action.type) {
		case 'ADD_DAY':
			return [
				...state,
				day(undefined, action)
			];
		default:
			return state
	}
}

export default days