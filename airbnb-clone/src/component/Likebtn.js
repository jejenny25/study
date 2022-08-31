import {useState} from 'react'
import styled from 'styled-components';

import { ReactComponent as IcoHeart } from "../assets/svg/ico-heart.svg";

const Likebtn = (props) => {
    // 좋아요
    const [isLiked, setLike] = useState(props.isLiked); // ***

    const toggleLike = () =>{
        if(isLiked){
            setLike(false);
        }else{
            setLike(true);
        }
    }
    return (
        // <button type="button" className={`btn btn-variety  ${like ? "is-liked" : ""}`} onClick={() => toggleLike()} ><IcoHeart /><span className="blind">좋아요</span></button> 
        <Likebtnitem onClick={() => toggleLike()} active={isLiked}><IcoHeart /><span className="blind">좋아요</span></Likebtnitem> 
    )
}

const Likebtnitem = styled.button`
    display: block; 
    position:absolute; 
    top:15px; 
    right:15px; 
    z-index:15; 
    height: 24px; width: 24px; 
    stroke: #fff; 
    stroke-width: 2; 
    overflow: visible;
    fill: ${props=>props.active?'#FF385C':'rgba(0, 0, 0, 0.5)'};
`;

export default Likebtn