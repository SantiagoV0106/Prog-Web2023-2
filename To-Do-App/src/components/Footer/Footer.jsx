import React from "react";
import './footer.css'
// import { useState } from "react";

export function Footer({ total, completed, onDeleteAll }) {

// const [btnState, setBtnState] = useState(true)

// const handleState = total >= 1 ? false : true

// console.log(handleState);

    return (
        <footer className="footer-container">
            <div className="counter-container">
                <h3>{completed} Tasks completed from {total}</h3>
            </div>
            <div className="clear-all-container">
                <button onClick={onDeleteAll} id="clear-all-btn" >Clear All</button>
            </div>
        </footer>
    )
}