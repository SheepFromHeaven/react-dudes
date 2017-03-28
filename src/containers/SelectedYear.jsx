import { connect } from 'react-redux'
import Year from '../components/Year/Year'

const getYearById = (allYears, yearId) => {
	return allYears.find((year) => {
		return year.id === yearId;
	});
};

const getMonthsByYearId = (allMonths, yearId) => {
	return allMonths.find((month) => {
		return month.yearId == yearId;
	});
};

const mapStateToProps = (state, props) => {
	return {
		month: getYearById(state.years, props.id),
		days: getMonthsByYearId(state.days, props.id)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {}
};

const SelectedYear = connect(
	mapStateToProps,
	mapDispatchToProps
)(Year);

export default SelectedYear;