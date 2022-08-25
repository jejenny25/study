import {useState} from 'react'

import { ReactComponent as IcoHeart } from "../assets/svg/ico-heart.svg";

const Likebtn = (props) => {
    // 좋아요
    const [like, setLike] = useState(props.isLiked); // ***

    const toggleLike = () =>{
        if(like){
            setLike(false)
        }else{
            setLike(true)
        }
    }
    return (
        <button type="button" className={`btn btn-variety  ${like ? "is-liked" : ""}`} onClick={() => toggleLike()} ><IcoHeart /><span className="blind">좋아요</span></button> 
    )
}

export default Likebtn