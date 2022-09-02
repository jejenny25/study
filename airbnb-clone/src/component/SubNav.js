import React from 'react'
import {Link} from 'react-router-dom'

import { ReactComponent as IcoBack } from "../assets/svg/ico-back.svg";
import { ReactComponent as IcoShare } from "../assets/svg/ico-share.svg";
import { ReactComponent as IcoSave } from "../assets/svg/ico-save.svg";

const SubNav = () => {
  return (
    <div className='sub-nav-wrap'>
        <div className="left-area">
            <Link to="#" className='btn link-back'><span className="ico"><IcoBack/></span></Link>
        </div>
        <div className="right-area">
            <button type='button' className='btn btn-share'><span className="ico"><IcoShare /></span><span className='blind'>공유하기</span></button>
            <button type='button' className='btn btn-share'><span className="ico"><IcoSave /></span><span className='blind'>좋아요</span></button>
        </div>
    </div>
  )
}

export default SubNav