import React from "react";

export function CatImg({images}) {
    return(
        <div className="img-container">
            <img src={images} alt="Cat-Image" />
        </div>
    )
}