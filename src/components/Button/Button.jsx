import React from "react";
import './button.css'

export function Button({ onClick, label }) {

    return (
        <button type="button" className="button-style" onClick={onClick}>{label}</button>
    )
}

