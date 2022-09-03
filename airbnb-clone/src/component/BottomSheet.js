import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { isActiveState } from "../recoil/EtcInfo";

import DimBox from "./DimBox"

import { ReactComponent as ImgCardMaster } from "../assets/svg/img-card-master.svg";
import { ReactComponent as IcoCheck } from "../assets/svg/ico-check.svg";
import { ReactComponent as IcoCard } from "../assets/svg/ico-card.svg";
import { ReactComponent as BtnClose } from "../assets/svg/btn-close.svg";


const BottomSheet = () => {
    const [isActive, setIsActive] = useRecoilState(isActiveState);
    const onClick = () => setIsActive(!isActive);

    const [payment, setPayment] = useState("9417");
    const selPayment = (e) =>{
        setPayment(e.target.value);
        setIsActive(!isActive);
    }

  return (
    <div>
        <div className="card-select-wrap">
            <div className="txt-area">
                <span className="img">
                    <ImgCardMaster />
                </span>
                <span className="txt">•••• {payment}</span>
            </div>
            <div className="btn-wrap">
                <button type="button" className="btn btn-txt-link" onClick={onClick}><span className="txt txt-medium f16">수정하기</span></button>
            </div>
        </div>
        <div className={`bottom-sheet-wrap ${isActive ? "is-active" : ""}`}>
            <div className="bottom-sheet-header">
                <h3 className="tit">결제 수단</h3>
            </div>
            <div className="bottom-sheet-body">
                <ul className="select-list">
                    <li>
                        <div className="radio-btn btn-select-item btn-card">
                            <input type="radio" name="card_sel" id="card01" defaultValue="9417" checked={payment === "9417"} onChange={selPayment}/>
                            <label htmlFor="card01">
                                <span className="img">
                                    <ImgCardMaster />
                                </span>
                                <span className="txt">•••• 9417</span>
                                <div className="img-chk"><IcoCheck /></div>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="radio-btn btn-select-item btn-card">
                            <input type="radio" name="card_sel" id="card02" defaultValue="5684" checked={payment === "5684"} onChange={selPayment}/>
                            <label htmlFor="card02">
                                <span className="img">
                                    <ImgCardMaster />
                                </span>
                                <span className="txt">•••• 5684</span>
                                <div className="img-chk"><IcoCheck /></div>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="radio-btn btn-select-item btn-card">
                            <input type="radio" name="card_sel" id="card03" defaultValue="7526" checked={payment === "7526"} onChange={selPayment}/>
                            <label htmlFor="card03">
                                <span className="img">
                                    <ImgCardMaster />
                                </span>
                                <span className="txt">•••• 7526</span>
                                <div className="img-chk"><IcoCheck /></div>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="tit">결제수단 추가하기</div>
                        <button type="button" className="btn btn-select-item btn-pay-add" onClick={onClick}>
                            <span className="img">
                                <IcoCard />
                            </span>
                            <span className="txt">신용카드 또는 체크카드</span>
                        </button>
                    </li>
                </ul>
            </div>
            <button className="btn btn-close"><span className="ico"><BtnClose onClick={onClick}/></span><span className="blind">닫기</span></button>
        </div>

        <DimBox onClick={onClick}/>
    </div>
  )
}

export default BottomSheet