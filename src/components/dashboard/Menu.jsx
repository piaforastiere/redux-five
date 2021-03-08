import React from 'react'
import { Link } from 'react-router-dom';

import { BiRightArrow, BiCalendarPlus, BiCalendarCheck } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import { VscOpenPreview } from "react-icons/vsc";

const Menu = (logout) => {
    return (
        <div className="col-lg-1 menu">
                <ul>
                    <li>
                        <Link to="/sessions">
                            <BiCalendarCheck /> 
                            <p>Sessions</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/new-game">
                            <BiCalendarPlus /> 
                            <p>New <br/> Session</p>    
                        </Link>
                    </li>
                    <li>
                        <Link to="/games-information" >
                            <VscOpenPreview /> 
                            <p>Resumes</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/game" >
                            <BiRightArrow /> 
                            <p>Play</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <CgProfile />
                            <p>Profile</p>
                        </Link>
                    </li>
                    <li onClick={() => logout()}>
                        <IoLogOut />
                        <p>Logout</p>
                    </li>
                </ul>
            </div>
    )
}

export default Menu
