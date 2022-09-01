import React from 'react'

import { ReactComponent as IcoSch } from "../assets/svg/ico-sch.svg";
import { ReactComponent as IcoFilter } from "../assets/svg/ico-filter.svg";

const MoSchWrap = () => {
  return (
    <div className='mo-sch-wrap'>
        <div className='sch-before-wrap'>
            <div className='btn-mo-sch-wrap'>
                <button type='button' className='btn btn-mo-sch'>
                    <div className="ico"><IcoSch /></div>
                    <div className="txt-wrap">
                        <p className="m-txt">어디로 여행가세요?</p>
                        <p className='s-txt'><span>어디든지</span><span>언제든 일주일</span><span>게스트 추가</span></p>
                    </div>
                </button>
            </div>
            <div className="mo-filter-wrap">
                <button type='button' className='btn btn-mo-filter'><span><IcoFilter /></span><span className='blind'>필터</span></button>
            </div>
        </div>
    </div>
  )
}

export default MoSchWrap