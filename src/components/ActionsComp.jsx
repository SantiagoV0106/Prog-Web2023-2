import React from "react";
import { Button } from "./Button";

export function Actions() {
    const containerStyle = {
        display : 'flex',
        justifyContent: 'space-between'
    }

    const countAdd = {
        
    }
    return (
        <>
            <div style={containerStyle}>
                <Button label='-'/>
                <Button label='Reset'/>
                <Button label='+'/>
            </div>
        </>
    )
}