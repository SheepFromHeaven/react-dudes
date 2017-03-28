import { connect } from 'react-redux'
import Day from '../components/Day/Day'

const getDayById = (allDays, dayId) => {
	return allDays.find((day) => {
		return day.id === dayId;
	});
};

const mapStateToProps = (state, props) => {
	return {
		day: getDayById(state.days, props.id)
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