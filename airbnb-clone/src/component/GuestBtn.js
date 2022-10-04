import React, {useState, useEffect} from "react"
import { useRecoilState } from "recoil";
import { adultGuestState, kidGuestState, toddlerGuestState, petGuestState, delGuestState } from "../recoil/ReserveInfo";

import { ReactComponent as IcoPlus } from "../assets/svg/ico-plus.svg";
import { ReactComponent as IcoMinus } from "../assets/svg/ico-minus.svg";

import styled from 'styled-components';

const GuestBtn = (props) => {
    const [isActiveMinus, setIsActiveMinus] = useState(false);
    const [isActivePlus, setIsActivePlus] = useState(true);
    const [cnt, SetCnt] = useState(0);

    const guestAdd = () => {
        if(isActivePlus){
            SetCnt(cnt + 1);
        }
    }

    const guestMinus = () => {
        if(isActiveMinus){
            SetCnt(cnt - 1);
        }
    }

    const [adultCnt, setAdultCnt] = useRecoilState(adultGuestState);
    const [kidCnt, setKidCnt] = useRecoilState(kidGuestState);
    const [toddlerCnt, setToddlerCnt] = useRecoilState(toddlerGuestState);
    const [petCnt, setPetCnt] = useRecoilState(petGuestState);  
    const [delGuest, setDelGuest] = useRecoilState(delGuestState);

    useEffect(() => {
        if(cnt > 0){
            setIsActiveMinus(true);
        }else if(cnt === 0){
            setIsActiveMinus(false);
        }

        if(cnt == 16){
            setIsActivePlus(false);
        }else if(cnt < 16){
            setIsActivePlus(true);
        }

        if(props.gusetType === 1){
            setAdultCnt(cnt);
        }else if(props.gusetType === 2){
            setKidCnt(cnt);
        }else if(props.gusetType === 3){
            setToddlerCnt(cnt);
        }else if(props.gusetType === 4){
            setPetCnt(cnt);
        }
        setDelGuest(false);
    }, [cnt])

    useEffect(() => {
        if(delGuest){
            SetCnt(0);
        }
    }, [delGuest])


    return (
        <div className="btn-cnt-wrap">
            <BtnCnt active={isActiveMinus} onClick={()=> guestMinus()}>
                <span className="ico"><IcoMinus /></span>
            </BtnCnt>
            <p className="cnt">{cnt}</p>
            <BtnCnt active={isActivePlus} onClick={()=> guestAdd()}>
                <span className="ico"><IcoPlus /></span>
            </BtnCnt>
        </div>
    )
}

const BtnCnt = styled.button`
    display:flex; width:32px; height:32px; border-radius:50%; align-items:center; justify-content:center; border:1px solid #b0b0b0;
    .ico {display:block; width:12px; height:12px; stroke-width: 5.33333;}
    cursor:${props=>props.active?'cusor':'not-allowed'};
    color: ${props=>props.active?'#717171':'#ebebeb'};
    border-color: ${props=>props.active?'#b0b0b0':'#ebebeb'};
`;

export default GuestBtn