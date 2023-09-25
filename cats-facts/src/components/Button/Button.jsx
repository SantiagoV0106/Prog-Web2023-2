import React from "react";

export function Button({onClick}) {


    return(
        <button 
        className="btn-facts"
        onClick={onClick}>
            Generate Fact
        </button>
    )
}