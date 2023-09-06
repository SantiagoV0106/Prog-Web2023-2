import React from "react";
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export function Header() {
    return(
        <>
         <div className="header-container">
                <h1 id="header-title" >Task for 2Day</h1><span>Welcome back Santiago <FontAwesomeIcon icon={faHeart} /> </span>
            </div>
        </>
    )
}