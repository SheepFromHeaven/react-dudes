const vacation = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_VACATION':
			return  {
				id: action.id,
				startDate: action.startDate,
				endDate: action.endDate,
				personId: action.personId
			};
		default:
			return state
	}
};

const vacations = (state = [], action) => {
	switch (action.type) {
		case 'ADD_VACATION':
			return [
				...state,
				vacation(undefined, action)
			];
		default:
			return state
	}
}

export default vacations