import React from "react";
import './button.css'

export function Button({ onAdd, onReset, onSubtract}) {

    return (
        <>
            <div className="button-container">
                <button type="button" className="button-style" onClick={onSubtract}>-</button>
                <button type="button" className="button-style2" onClick={onReset} >Reset</button>
                <button type="button" className="button-style" onClick={onAdd}>+</button>
            </div>
        </>
    )
}

