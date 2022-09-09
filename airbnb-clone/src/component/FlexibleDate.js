import React from 'react'

import FlexibleDateSwiper from "../component/FlexibleDateSwiper"

const FlexibleDate = () => {
  return (
    <div className="flexible-wrap">
        <div className="flexible-item">
            <div className="tit-wrap">
                <p className="tit">숙박기간을 선택하세요.</p>
            </div>
            <div className="stay-length-wrap">
                <button type="button" className="btn btn-stay-length"><span className="txt">주말</span></button>
                <button type="button" className="btn btn-stay-length"><span className="txt">일주일</span></button>
                <button type="button" className="btn btn-stay-length"><span className="txt">한 달</span></button>
            </div>
        </div>
        <div className="flexible-item">
            <div className="tit-wrap">
                <p className="tit">여행 날짜를 선택하세요.</p>
            </div>
            <FlexibleDateSwiper />
        </div>
    </div>
  )
}

export default FlexibleDate