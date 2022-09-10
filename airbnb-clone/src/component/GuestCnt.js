import React from "react"

import GuestBtn from "../component/GuestBtn";


const GuestCnt = () => {
  return (
    <div className="guest-cnt-wrap">
        <div className="cnt-item">
            <div className="txt">
                <p className="name">성인</p>
                <p className="desc">만 13세 이상</p>
            </div>
            <GuestBtn gusetType={1}/>
        </div>
        <div className="cnt-item">
            <div className="txt">
                <p className="name">어린이</p>
                <p className="desc">만 2세 ~ 12세</p>
            </div>
            <GuestBtn gusetType={2}/>
        </div>
        <div className="cnt-item">
            <div className="txt">
                <p className="name">유아</p>
                <p className="desc">만 2세 미만</p>
            </div>
            <GuestBtn gusetType={3} />
        </div>
        <div className="cnt-item">
            <div className="txt">
                <p className="name">반려동물</p>
                <p className="desc"><button className="btn btn-txt-link"><span className="txt txt-medium">보조동물을 동반하시나요?</span></button></p>
            </div>
            <GuestBtn gusetType={4} />
        </div>
    </div>
  )
}

export default GuestCnt