import React from 'react'
import {useNavigate} from 'react-router-dom'

import { useRecoilValue } from "recoil";
import { startDateState , endDateState, dayPriceState} from "../recoil/ReserveInfo";

import moment from "moment";
import "moment/locale/ko"

const MoReserveFixed = () => {

    const startDate = useRecoilValue(startDateState);
    const endDate = useRecoilValue(endDateState);
    const dayPrice = useRecoilValue(dayPriceState);

    const renderDate = (date) => {
        return date ? moment(date).format("MM월 DD일") : null;
    };

    // 네비게이트
    const navigate = useNavigate();

    const goToReserve = () =>{
        navigate('/reserve');
    }

  return (
    <div className="mo-reserve-fixed-area">
        <div className="book-summury-wrap">
            <div className="book-info">
                <p className="price"> ₩{dayPrice} <span className="day">/박</span></p>
                <button type='button' className='btn btn-txt-link date'><span className='txt txt-medium'>{renderDate(startDate)}~{renderDate(endDate)}</span></button>
            </div>
            <button type="button" className="btn btn-basic btn-red" onClick={goToReserve}><span>예약하기</span></button>
        </div>
    </div>
  )
}

export default MoReserveFixed