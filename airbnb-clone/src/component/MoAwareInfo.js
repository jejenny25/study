import React from 'react'

// 아이콘 목록
import { ReactComponent as IcoReport } from "../assets/svg/ico-report.svg";

const MoAwareInfo = () => {
  return (
    <div className='mo-aware-info'>
        <button type='button' className="aware-item">
            <div className="tit-wrap">
                <p className="tit">숙소 이용규칙</p>
            </div>
            <div className="txt">체크인: 오후 2:00 이후</div>
        </button>
        <button type='button' className="aware-item">
            <div className="tit-wrap">
                <p className="tit">건강과 안전</p>
            </div>
            <div className="txt">에어비앤비 코로나19 방역 수칙을 준수하셔야 합니다.</div>
        </button>
        <button type='button' className="aware-item">
            <div className="tit-wrap">
                <p className="tit">환불정책</p>
            </div>
            <div className="txt">9월 9일 오후 12:00 전에 취소하면 부분 환불을 받으실 수 있습니다.</div>
        </button>
        <button type="button" className="btn btn-txt-link btn-report"><span className="ico"><IcoReport/> </span><span className="txt txt-medium">숙소 신고하기</span></button>
    </div>
  )
}

export default MoAwareInfo