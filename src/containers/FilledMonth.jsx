import { connect } from 'react-redux'
import Month from '../components/Month/Month'

const getMonthById = (allMonths, monthId) => {
	return allMonths.find((month) => {
		return month.id === monthId;
	});
};

const getDaysByMonthId = (allDays, monthId) => {
	return allDays.find((day) => {
		return day.monthId == monthId;
	});
};

const mapStateToProps = (state, props) => {
	return {
		month: getDayById(state.months, props.id),
		days: getDaysByMonthId(state.days, props.id)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {}
};

const FilledMonth = connect(
	mapStateToProps,
	mapDispatchToProps
)(Month);

export default FilledDay;