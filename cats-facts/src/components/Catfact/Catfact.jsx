import React from "react";
import './catfact.css'
import { useApp } from "../../hooks/useApp";

export function Catfact() {
    const {
        data
    } = useApp()
    return (
        <p>{data}</p>
    )
}