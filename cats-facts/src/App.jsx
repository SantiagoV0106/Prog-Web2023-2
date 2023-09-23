import React, { useCallback, useEffect, useState } from "react";
import { Header, CatImg, Catfact, Button } from "./components";
import { fetchFacts } from "./services/fetchCatFacts";
import { fetchImgs } from "./services/fetchCatImg";

export function App() {

    const [fact, setFact] = useState('')
    const [img, setImg] = useState('')
    const [words, setWords] = useState('')

    useEffect(() => {

        fetchFacts().then(
            catFact => {
                console.log(catFact);
                setFact(catFact)
                const splitedFact = catFact.split(' ')
                const first4Words = splitedFact.slice(0, 4).join(' ')
                console.log(first4Words);
                setWords(first4Words)
            }

        ).catch(error => {
            error.error
        }).then(
            fetchImgs().then(
                catImg => {
                    console.log(catImg);
                    setImg(catImg)
                }
            ).catch(error => {
                error.error
            })
        )
    }, [])

    return (
        <>
            <Header />
            <CatImg images={img} />
            <Catfact facts={fact} />
            <Button />
        </>
    )
}