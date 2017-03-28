import React, { Component } from 'react';
import FilledMonth from '../../containers/FilledMonth';
import './Year.css';

class Year extends Component {
    render() {
        let months = [];
        this.props.months.forEach((month)=> {
            months.push(<FilledMonth id={month.id}/>);
        });

        return (
            <div className="year">
                {months}
            </div>
        );
    }
}

export default Year;