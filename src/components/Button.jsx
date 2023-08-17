import React from "react";

export function Button({label}) {

    const buttonStyle = {
        padding: '.75rem 1rem',
        textAlign: 'center',
        fontSize: '1rem',
        border: '1px solid rgba(222, 222, 222, 1)',
        borderRadius: '5px',
    }

    return(
        <>    
        <button style={buttonStyle}> {label} </button>
        </>
    )
}

