import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import { DayPickerRangeController } from "react-dates";
import { useRecoilState } from "recoil";
import { startDateState, endDateState, daysState } from "../recoil/ReserveInfo";

import moment from "moment";
import "moment/locale/ko"

const DatePicker = forwardRef((props, ref)  => {    
    const [dates, setDates] = useState({ startDate: moment().add(1, "d") , endDate: moment().add(8, "d") });
    
    const [startDate, setStartDate] = useRecoilState(startDateState);
    const [endDate, setEndDate] = useRecoilState(endDateState);
    const [days, setDays] = useRecoilState(daysState);
    const [numMonth, setNumMonth] = useState(1);

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

    moment.locale('ko');
    
    const [mQuery_1200, setMQuery1200] = useState(window.innerWidth < 1200 ? true : false);
    const [mQuery_560, setMQuery560] = useState(window.innerWidth < 560 ? true : false);
    const [daySize, setdaySize] = useState(44);
    
    const screenChange = (event) => {
        const matches = event.matches;    
        setMQuery1200(matches);
        if(matches){
            setdaySize(70);
        }else{
            setdaySize(44);
        }
    }

    const screenChange2 = (event) => {
        const matches = event.matches;
        setMQuery560(matches);
        if(matches){
            setdaySize(44);
        }else{
            setdaySize(70);
        }
    }

    useEffect(() => {
        //props.setParentDates(dates);
        setStartDate(dates.startDate);
        setEndDate(dates.endDate);
        if(dates.endDate != null && dates.startDate != null){
            setDays(dates.endDate.diff(dates.startDate, "days"))
        }else{
            setDays(0);
        }

        let mql_1200 = window.matchMedia("screen and (max-width:1200px)");
        mql_1200.addEventListener("change", screenChange);
        let mql_560 = window.matchMedia("screen and (max-width:560px)");
        mql_560.addEventListener("change", screenChange2);
        return () => {
            mql_1200.removeEventListener("change", screenChange);
            mql_560.removeEventListener("change", screenChange2)
        }
    }, [dates])
    
    return (
        <div>
            <div className="calendar-wrap">
                <DayPickerRangeController
                    startDate={dates.startDate}
                    endDate={dates.endDate}
                    onDatesChange={handleDatesChange}
                    focusedInput={focusedInput || defaultFocusedInput}
                    onFocusChange={onFocusChange}
                    numberOfMonths={mQuery_1200?1:2}
                    noBorder={true}
                    isOutsideRange={(day) => day.isBefore(moment().add('days'))}
                    //daySize={44}
                    daySize={daySize}
                />
            </div>

        </div>
    
    );
})

export default DatePicker;
