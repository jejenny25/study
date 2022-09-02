import React from 'react'

import { ReactComponent as IcoSch } from "../assets/svg/ico-sch.svg";

const SubSchWrap = () => {
  return (
    <div className="sch-wrap">
        <div className="sch-before-wrap type-one-btn">
            <button className="btn has-sch-ico">
                <span className="txt">검색 시작하기</span>
                <p><span className="ico"><IcoSch /></span></p>
            </button>
        </div>

        <div className="sch-after-wrap">
        </div>
    </div>
  )
}

export default SubSchWrap