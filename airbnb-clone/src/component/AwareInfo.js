import React from 'react'

import { ReactComponent as IcoClock } from "../assets/svg/ico-clock.svg";
import { ReactComponent as IcoPet } from "../assets/svg/ico-pet.svg";

const AwareInfo = () => {
  return (
    <div>
        <div className="tit-wrap">
            <p className="tit">알아두어야 할 사항</p>
        </div>
        
        <div className="aware-list-wrap">
            <div className="aware-item">
                <p className="tit">숙소 이용 규칙</p>
                <ul className="aware-list">
                    <li>
                        <div className="ico"><IcoClock /></div>
                        <p className="txt">체크인: 오후 2:00 이후</p>
                    </li>
                    <li>
                        <div className="ico"><IcoClock /></div>
                        <p className="txt">체크아웃 시간: 오전 10:00</p>
                    </li>
                    <li>
                        <div className="ico"><IcoPet /></div>
                        <p className="txt">반려동물 동반 가능</p>
                    </li>
                    <li>
                        <div className="ico"><span>🚬</span></div>
                        <p className="txt">흡연 가능</p>
                    </li>
                </ul>
                <div className="btn-wrap">
                    <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                </div>
            </div>
            <div className="aware-item">
                <p className="tit">건강과 안전</p>
                <ul className="aware-list">
                    <li>
                        <div className="ico"><span>✨</span></div>
                        <p className="txt">에어비앤비 코로나19 방역 수칙을 준수하셔야 합니다.</p>
                    </li>
                    <li>
                        <div className="ico ico-exclamation"><span>!</span></div>
                        <p className="txt">일산화탄소 경보기 없음</p>
                    </li>
                    <li>
                        <div className="ico ico-exclamation"><span>!</span></div>
                        <p className="txt">보안 카메라/녹화 장치<button type="button" className="btn btn-txt-link"><span className="txt">더 보기</span></button></p>
                    </li>
                    <li>
                        <div className="ico ico-exclamation"><span>!</span></div>
                        <p className="txt">근처에 호수, 강, 바다 등이 있음</p>
                    </li>
                    <li>
                        <div className="ico ico-exclamation"><span>!</span></div>
                        <p className="txt">난간이나 보호 장치가 없는 높은 곳</p>
                    </li>
                </ul>
                <div className="btn-wrap">
                    <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                </div>
            </div>
            <div className="aware-item">
                <p className="tit">환불 정책</p>
                <ul className="aware-list">
                    <li>
                        <p className="txt">8월 20일 오후 12:00 전에 취소하면 부분 환불을 받으실 수 있습니다.</p>
                    </li>
                </ul>
                <div className="btn-wrap">
                    <button type="button" className="btn btn-txt-link btn-more"><span className="txt">더 보기</span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AwareInfo