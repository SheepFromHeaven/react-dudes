import { connect } from 'react-redux'
import Day from '../components/Day/Day'

const getDayById = (allDays, dayId) => {
	return allDays.find((day) => {
		return day.id === dayId;
	});
};

const getVacationsForDayId = (allVacations, dayId) => {
	return allVacations.filter((vacation) => {
		return dayId >= vacation.startDate && dayId <=vacation.endDate;
	}).map((vacation) => {
		return "hotpink";
	});
};

const mapStateToProps = (state, props) => {
	return {
		day: getDayById(state.days, props.id),
		vacations: getVacationsForDayId(state.vacations, props.id)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {}
};

const FilledDay = connect(
	mapStateToProps,
	mapDispatchToProps
)(Day);

export default FilledDay;