import React, {useState} from 'react'

import styled from 'styled-components';

const DateButton = (props) => {
    
    const [isSelected, setSelect] = useState(false);

    const toggleSelect = () =>{
        if(isSelected){
            setSelect(false);
        }else{
            setSelect(true);
        }
    }

    return (
            <ItemButton onClick={() => toggleSelect()} active={isSelected}>
                <div className="img">
                    <img src="images/ico-calendar.jpg" alt="" className='calendar'/>
                    <img src="images/ico-calendar-on.jpg" alt="" className='calendar-on' />
                </div>
                <div className="txt">
                    <p className="month">{props.mon}월</p>
                    <p className="year">{props.year}</p>
                </div>
            </ItemButton>
    )
}

const ItemButton = styled.button`
    display:flex;
    position:relative;
    flex-direction:column;
    width:120px;
    height:134px;
    border:1px solid rgba(176, 176, 176, 0.5);
    border-radius: 16px;
    align-items:center;
    justify-content:center;
    box-sizing:border-box;
    &:hover{border-color:#333;}
    &:before{display:${props=>props.active?'block':'none'}; position:absolute; width:calc(100% + 2px); height:calc(100% + 2px); top:-1px; left:-1px; border:2px solid #333; border-radius:16px; content:'';}
    .img {width:32px;height:32px;}
    .img img{width:100%;}
    .img .calendar {display:${props=>props.active?'none':''};}
    .img .calendar-on {display:${props=>props.active?'':'none'};}
    .month {margin-top:8px; font-weight:600;}
    .year {margin-top:2px; font-size:12px;}
`;


export default DateButton