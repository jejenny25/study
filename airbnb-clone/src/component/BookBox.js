import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import moment from "moment";

import { useRecoilValue, useRecoilState } from "recoil";
import { startDateState, endDateState, daysState, dayPriceState, cntPriceState, totPriceState } from "../recoil/ReserveInfo";

import { ReactComponent as IcoFlag } from "../assets/svg/ico-flag.svg";

const BookBox = React.forwardRef((props,ref) => {

    // 네비게이트
    const navigate = useNavigate();

    const goToReserve = () =>{
        navigate('/reserve');
    }

    //날짜 관련
    const renderDate = (date) => {
        return date ? moment(date).format("YYYY.MM.DD") : null;
    };

    const startDate = useRecoilValue(startDateState);
    const endDate = useRecoilValue(endDateState);
    const days = useRecoilValue(daysState);

    //가격 관련
    const [dayPrice, setDayPrice] = useRecoilState(dayPriceState); // 하루가격
    //const [cntPrice, setCntPrice] = useState(dayPrice * days); // 몇박에 얼마인지
    const [cntPrice, setCntPrice] = useRecoilState(cntPriceState); // 몇박에 얼마인지
    const [discount, setDiscount] = useState(0); //할인
    const [cleanPrice, setCleanPrice] =  useState(87536); //청소비
    const [feePrice, setFeePrice] =  useState(38379); //수수료
    const [totPrice, setTotPrice] = useRecoilState(totPriceState); //총 가격

    useEffect(() => {
        if(days > 0){
            setCntPrice(dayPrice * days);
            setDiscount(Math.floor((dayPrice * days) * (5 / 100)));
            setTotPrice(((dayPrice * days) - Math.floor((dayPrice * days) * (5 / 100))) + cleanPrice + feePrice);
        }
    }, [days])

    // useEffect(() => {
    //     if(props.days > 0){
    //         setCntPrice(dayPrice * props.days);
    //         setDiscount(Math.floor((dayPrice * props.days) * (5 / 100)));
    //         setTotPrice(((dayPrice * props.days) - Math.floor((dayPrice * props.days) * (5 / 100))) + cleanPrice + feePrice);
    //     }
    // }, [props.days])

  return (
    <div className="book-box-wrap">
        <div className="book-box">
            <div className="top-area">
                <div className="price-info">
                    <p className="price">₩ {dayPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className="day">/박</span></p>
                </div>
                <div className="review-info">
                    <span className="txt-medium">★ 4.6  · </span>
                    <button type="button" className="btn btn-txt-link"><span className="txt txt-medium">후기 128개</span></button>
                </div>
            </div>

            <div className="checkin-box">
                <div className="top-wrap">
                    <button type="button" className="btn"><em>체크인</em><span>{startDate === null ? '날짜 추가' :  renderDate(startDate)}</span></button>
                    <button type="button" className="btn"><em>체크아웃</em><span>{endDate === null ? '날짜 추가' :  renderDate(endDate)}</span></button>
                </div>
                <div className="bot-wrap">
                    <button type="button" className="btn"><em>인원</em><span>게스트 1명</span></button>
                </div>
            </div>

            <div className="btn-wrap" ref={ref}>
                <button type="button" className="btn w-100 btn-basic btn-red" onClick={goToReserve}><span>예약하기</span></button>
            </div>
            {
                days > 0 
                ?
                <div>
                    <div className="explain"><p>예약 확정 전에는 요금이 청구되지 않습니다.</p></div>

                    <div className="price-items-wrap" >
                        <ul className="price-items">
                            <li>
                                <button type="button" className="btn btn-txt-link"><span className="txt">₩{dayPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} x {days}박</span></button>
                                <p className="txt-basic">₩{cntPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            </li>
                            <li>
                                <button type="button" className="btn btn-txt-link"><span className="txt">주간 할인</span></button>
                                <p className="txt-medium txt-green">- ₩{discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            </li>
                            <li>
                                <button type="button" className="btn btn-txt-link"><span className="txt">청소비</span></button>
                                <p className="txt-basic">₩{cleanPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            </li>
                            <li>
                                <button type="button" className="btn btn-txt-link"><span className="txt">서비스 수수료</span></button>
                                <p className="txt-basic">₩{feePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="tot-wrap">
                        <span className="txt-medium f16">총 합계</span>
                        <span className="txt-medium f16">₩{totPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </div>
                </div>
                : '' 
            }
            <button type="button" className="btn btn-txt-link btn-report">
                <span className="ico"><IcoFlag /></span>
                <span className="txt txt-medium">숙소 신고하기</span>
            </button>
        </div>
    </div>
  )
})

export default BookBox