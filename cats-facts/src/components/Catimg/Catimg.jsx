import React from "react";
import './catimg.css'
import { useApp } from "../../hooks/useApp";

export function CatImg() {
    const {
        img
    } = useApp()
    return(
        <div className="img-container">
            <img src={img} alt="Cat-image" />
        </div>
    )
}