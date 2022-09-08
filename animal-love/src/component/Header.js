import React from 'react'
import Login from '../component/Login'
import AfterLogin from '../component/AfterLogin'

import { useRecoilValue } from "recoil";
import { idState, profilePic } from "../recoil/UserInfo";

const Header = () => {

    const user_id = useRecoilValue(idState);

    return (
        <div>
            <header className='header'>
                <div className='logo-wrap'>
                    <h1 className="homepage-tit">유실유기동물</h1>
                </div>
                
                {user_id === null ?
                    <Login />
                :
                    <AfterLogin />
                }
                
            </header>
        </div>
    )
}

export default Header