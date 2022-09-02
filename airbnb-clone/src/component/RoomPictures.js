import React from 'react'

import { ReactComponent as IcoPicAll } from "../assets/svg/ico-picall.svg";

const RoomPictures = () => {
  return (
    <div className="picture-area">
        <div className="pictures-wrap">
            <div className="item">
                <button type="button" className="btn"><img src="https://a0.muscache.com/im/pictures/78fb8268-b999-4389-b072-e2a66910e41b.jpg?im_w=720" /></button>
            </div>
            <div className="item">
                <button type="button" className="btn"><img src="https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720" /></button>
            </div>
            <div className="item">
                <button type="button" className="btn"><img src="https://a0.muscache.com/im/pictures/45f20fc7-9a56-4ef0-b482-79abfb2ddf7e.jpg?im_w=720" /></button>
            </div>
            <div className="item">
                <button type="button" className="btn"><img src="https://a0.muscache.com/im/pictures/1b922648-4f72-4648-95d4-1568f7ed04f0.jpg?im_w=720" /></button>
            </div>
            <div className="item">
                <button type="button" className="btn"><img src="https://a0.muscache.com/im/pictures/582ec202-2d72-4742-bdfe-38b56e50e0f6.jpg?im_w=720" /></button>
            </div>
        </div>
        <button type="button" className="btn btn-basic-border type-small">
            <span className="ico"><IcoPicAll /></span>
            <span className="txt">사진 모두 보기</span>
        </button>
    </div>
  )
}

export default RoomPictures