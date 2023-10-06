import React from "react";
import './body.css'
import { Catfact } from "../Catfact/Catfact";
import { CatImg } from "../Catimg/Catimg";
import { Button } from "../Button/Button";
import { useApp } from "../../hooks/useApp";

export function Body() {


    const { data, isLoading, error, words, img } = useApp()

    console.log(data);
    console.log(words);
    console.log(img);

    if (isLoading) {
        return (
            <>
                <span className="loader"></span>
                <p className="loading-msn" >Your Fact is loading...</p>
            </>

        )
    }

    if (error) {

        return (<p> {error} </p>)
    }

    return (
        <>
            <CatImg />
            <Catfact />
            <Button />
        </>
    )
}