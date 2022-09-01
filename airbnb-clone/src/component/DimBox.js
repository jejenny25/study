import React from 'react'
import { useRecoilState } from "recoil";
import { isActiveState } from "../recoil/EtcInfo";
import styled from 'styled-components';

const DimBox = (props) => {
  const [isActive, setIsActive] = useRecoilState(isActiveState);
    const onClick = () => {
        setIsActive(!isActive)
    };

  return (
    <Dimmed onClick={onClick} active={isActive}/>
  )
}

const Dimmed = styled.div`
    position:fixed; width:100%; height:100vh; bottom: 0; top: 0; background-color: rgba(0,0,0,0.25); z-index: 99;
    display: ${props=>props.active?'block':'none'};
`;

export default DimBox