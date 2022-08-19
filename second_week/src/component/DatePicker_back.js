import React, { Component, useState } from 'react';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/constants';
import moment from "moment"
import "moment/locale/ko"


class DatePicker extends Component {
    constructor(props) {
        super(props);
        moment.locale('ko');

        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: START_DATE,
        };

    }

    render() {
        
        return (
            <DayPickerRangeController
                startDate={moment()}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) =>
                    this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput: focusedInput || START_DATE })}
                numberOfMonths={2}
                noBorder={true}
                isOutsideRange={(day) => day.isBefore(moment().add('days'))}
                daySize={44}
            />
            
        );
    }
}

export default DatePicker;