import React from "react";
import './catimg.css'
export function CatImg({images}) {
    return(
        <div className="img-container">
            <img src={images} alt="Cat-image" />
        </div>
    )
}