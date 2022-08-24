import React, {useRef, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import { ReactComponent as IcoFlag } from "../assets/svg/ico-flag.svg";

const BookBox = (props) => {

    // 네비게이트
    const navigate = useNavigate();

    const goToReserve = () =>{
        navigate('/reserve');
    }

    const refBtnReserve = useRef();
    // useEffect(() => {
    //     props.setBtnOffset(refBtnReserve.current.offsetTop);
    // }, [])

  return (
    <div className="book-box-wrap">
        <div className="book-box">
            <div className="top-area">
                <div className="price-info">
                    <p className="price">₩789,844 <span className="day">/박</span></p>
                </div>
                <div className="review-info">
                    <span className="txt-medium">★ 4.6  · </span>
                    <button type="button" className="btn btn-txt-link"><span className="txt txt-medium">후기 128개</span></button>
                </div>
            </div>

            <div className="checkin-box">
                <div className="top-wrap">
                    <button type="button" className="btn"><em>체크인</em><span>2022. 8. 20</span></button>
                    <button type="button" className="btn"><em>체크아웃</em><span>2022. 8. 27</span></button>
                </div>
                <div className="bot-wrap">
                    <button type="button" className="btn"><em>인원</em><span>게스트 1명</span></button>
                </div>
            </div>

            <div className="btn-wrap" ref={refBtnReserve}>
                <button type="button" className="btn w-100 btn-basic btn-red" onClick={goToReserve}><span>예약하기</span></button>
            </div>

            <div className="explain"><p>예약 확정 전에는 요금이 청구되지 않습니다.</p></div>

            <div className="price-items-wrap" >
                <ul className="price-items">
                    <li>
                        <button type="button" className="btn btn-txt-link"><span className="txt">₩779,097 x 7박</span></button>
                        <p className="txt-basic">₩5,453,682</p>
                    </li>
                    <li>
                        <button type="button" className="btn btn-txt-link"><span className="txt">주간 할인</span></button>
                        <p className="txt-medium txt-green">- ₩272,682</p>
                    </li>
                    <li>
                        <button type="button" className="btn btn-txt-link"><span className="txt">청소비</span></button>
                        <p className="txt-basic">₩117,536</p>
                    </li>
                    <li>
                        <button type="button" className="btn btn-txt-link"><span className="txt">서비스 수수료</span></button>
                        <p className="txt-basic">₩748,032</p>
                    </li>
                </ul>
            </div>
            <div className="tot-wrap">
                <span className="txt-medium f16">총 합계</span>
                <span className="txt-medium f16">₩6,046,563</span>
            </div>
            <button type="button" className="btn btn-txt-link btn-report">
                <span className="ico"><IcoFlag /></span>
                <span className="txt txt-medium">숙소 신고하기</span>
            </button>
        </div>
    </div>
  )
}

export default BookBox