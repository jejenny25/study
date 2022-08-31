import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import { DayPickerRangeController } from "react-dates";
import { useRecoilState } from "recoil";
import { startDateState, endDateState, daysState } from "../recoil/ReserveInfo";

import moment from "moment";
import "moment/locale/ko"

//function DatePicker() {
const DatePicker = forwardRef((props, ref)  => {    
    const [dates, setDates] = useState({ startDate: moment().add(1, "d") , endDate: moment().add(8, "d") });
    
    const [startDate, setStartDate] = useRecoilState(startDateState);
    const [endDate, setEndDate] = useRecoilState(endDateState);
    const [days, setDays] = useRecoilState(daysState);

    useImperativeHandle(ref, () => ({
        setDates
    }))

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

    moment.locale('ko');

    useEffect(() => {
        //props.setParentDates(dates);
        setStartDate(dates.startDate);
        setEndDate(dates.endDate);
        if(dates.endDate != null && dates.startDate != null){
            setDays(dates.endDate.diff(dates.startDate, "days"))
        }else{
            setDays(0);
        }
    }, [dates])
    
    return (
        <div>
            <div className="tit-wrap">
                <p className="tit">{days > 0 ? 'El Nido에서 '+ days +'박' : '체크인 날짜를 선택해주세요.'}</p>
                <p className="txt">
                    {dates.startDate != null && dates.endDate != null
                    ? renderDate(dates.startDate) + " - " + renderDate(dates.endDate)
                    : '여행 날짜를 입력하여 정확한 요금을 확인하세요.'}
                </p>
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
})

export default DatePicker;
