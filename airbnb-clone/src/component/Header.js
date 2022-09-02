import React from "react";
import { Link, useNavigate } from "react-router-dom";

import HeaderMain from './HeaderMain'
import HeaderRoom from "./HeaderRoom";
import HeaderReserve from './HeaderReserve'
import DimBox from '../component/DimBox'; // DimBox 컴포넌트 추가
import { useRecoilState } from "recoil";
import { isActiveState } from "../recoil/EtcInfo";


const Header = React.forwardRef((props,ref) =>{

    const [isActive, setIsActive] = useRecoilState(isActiveState);
    const onClick = () => setIsActive(!isActive);

     // 네비게이트
    const navigate = useNavigate();

    const goToReserve = () =>{
        navigate('/reserve');
    }

    return(
        <div>    
            <header className={`header-wrap ${isActive ? "is-active" : ""}`} id={props.currentPage} >
                {props.currentPage === "main" &&  
                    <HeaderMain/>
                }

                {props.currentPage === "roomDetail" &&  
                    <HeaderRoom onMoveToElement={props.onMoveToElement}/>
                }

                {props.currentPage === "reserve" &&  
                    <HeaderReserve />
                }


            </header>

            <DimBox onClick={onClick}/>
        </div> 

    )
})

export default Header