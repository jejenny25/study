import React, { useState, useEffect } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import { DayPickerRangeController } from "react-dates";

import moment from "moment";
import "moment/locale/ko"

//function DatePicker() {
const DatePicker = (props) => {    
    const [dates, setDates] = useState({ startDate: null, endDate: null });
    const [days, setDays] = useState(0);

    const defaultFocusedInput = "startDate";
    const [focusedInput, setFocusedInput] = useState(defaultFocusedInput);
    const handleDatesChange = (dates) => {
        setDates(dates);
    };

    const onFocusChange = (focusedInput) => {
        setFocusedInput(focusedInput);
    };

    const renderDate = (date) => {
        return date ? moment(date).format("YYYY년 MM월 DD일") : null;
    };

    const renderDate2 = (date) => {
        return date ? moment(date).format("YYYYMMDD") : null;
    };


    moment.locale('ko');

    useEffect(() => {
        props.setDates(dates);
        console.log("날짜가 바뀌었나요?");
        setDays(renderDate2(dates.endDate) - renderDate2(dates.startDate));
    }, [dates])
    
    return (
        <div>
            <div className="tit-wrap">
                <p className="tit">El Nido에서 {days > 0 ? days : ''}박</p>
                <p className="txt">{renderDate(dates.startDate)} - {renderDate(dates.endDate)}</p>
            </div>

            <div className="calendar-wrap">
                <DayPickerRangeController
                    startDate={dates.startDate}
                    endDate={dates.endDate}
                    onDatesChange={handleDatesChange}
                    focusedInput={focusedInput || defaultFocusedInput}
                    onFocusChange={onFocusChange}
                    numberOfMonths={2}
                    noBorder={true}
                    isOutsideRange={(day) => day.isBefore(moment().add('days'))}
                    daySize={44}
                />
            </div>

        </div>
    
    );
}

export default DatePicker;
