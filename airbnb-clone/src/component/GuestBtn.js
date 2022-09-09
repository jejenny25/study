import React, {useState} from "react"

import { ReactComponent as IcoPlus } from "../assets/svg/ico-plus.svg";
import { ReactComponent as IcoMinus } from "../assets/svg/ico-minus.svg";

import styled from 'styled-components';

const GuestBtn = () => {
    const [isActiveMinus, setIsActiveMinus] = useState(false);
    const [isActivePlus, setIsActivePlus] = useState(true);
    const [cnt, SetCnt] = useState(0);

    return (
        <div className="btn-cnt-wrap">
            <BtnCnt active={isActiveMinus}>
                <span className="ico"><IcoMinus /></span>
            </BtnCnt>
            <p className="cnt">{cnt}</p>
            <BtnCnt active={isActivePlus}>
                <span className="ico"><IcoPlus /></span>
            </BtnCnt>
        </div>
    )
}

const BtnCnt = styled.button`
    display:flex; width:32px; height:32px; border-radius:50%; align-items:center; justify-content:center; border:1px solid #b0b0b0;
    .ico {display:block; width:12px; height:12px; stroke-width: 5.33333;}
    cursor:${props=>props.active?'cusor':'not-allowed'};}
    color: ${props=>props.active?'#717171':'#ebebeb'};}
    border-color: ${props=>props.active?'#b0b0b0':'#ebebeb'};}
`;

export default GuestBtn