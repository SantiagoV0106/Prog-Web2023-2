import React from "react";
import './button.css'
import { useApp } from "../../hooks/useApp";

export function Button() {

const {
    handleOnClick
} = useApp()

    return(
        <button 
        type="submit"
        className="btn-facts"
        onClick={handleOnClick}>
            More Cat-Facts
        </button>
    )
}