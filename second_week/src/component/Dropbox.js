import React, { useRef, useState } from "react";

import { ReactComponent as ImgCardMaster } from "../assets/images/img-card-master.svg";
import { ReactComponent as IcoCheck } from "../assets/images/ico-check.svg";
import { ReactComponent as IcoCard } from "../assets/images/ico-card.svg";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
const Dropbox = () =>{
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    return (
        <div className={`selectbox-wrap ${isActive ? "is-active" : ""}`}>
            <button type="button" className="btn btn-select btn-card menu-trigger" onClick={onClick}>
                <span className="img">
                    <ImgCardMaster />
                </span>
                <span className="txt">•••• 9417</span>
            </button>
            <div className="select-list-wrap">
                <ul className="select-list">
                    <li>
                        <button type="button" className="btn btn-select-item btn-card">
                            <span className="img">
                                <ImgCardMaster />
                            </span>
                            <span className="txt">•••• 9417</span>
                        </button>
                    </li>
                    <li>
                        <button type="button" className="btn btn-select-item btn-card is-checked">
                            <span className="img">
                                <ImgCardMaster />
                            </span>
                            <span className="txt">•••• 9417</span>
                            <div className="img-chk"><IcoCheck /></div>
                        </button>
                    </li>
                    <li>
                        <div className="tit">결제수단 추가하기</div>
                        <button type="button" className="btn btn-select-item btn-card">
                            <span className="img">
                                <IcoCard />
                            </span>
                            <span className="txt">신용카드 또는 체크카드</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Dropbox
