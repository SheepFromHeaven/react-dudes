import { connect } from 'react-redux'
import Year from '../components/Year/Year'

const getYearById = (allYears, yearId) => {
	return allYears.find((year) => {
		return year.id === yearId;
	});
};

const getMonthsByYearId = (allMonths, yearId) => {
	return allMonths.filter((month) => {
		return month.yearId === yearId;
	});
};

const mapStateToProps = (state, props) => {
	return {
		year: getYearById(state.years, props.id),
		months: getMonthsByYearId(state.months, props.id)
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