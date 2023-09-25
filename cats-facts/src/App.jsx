import React, { useCallback, useEffect, useState } from "react";
import { Header, CatImg, Catfact, Button } from "./components";
import { fetchFacts } from "./services/fetchCatFacts";

export function App() {

    const [fact, setFact] = useState('')
    const [img, setImg] = useState('')
    const [words, setWords] = useState('')
 

    useEffect(() => {
        fetchFacts()
            .then(catFact => {
                console.log(catFact);
                setFact(catFact);
                const splitedFact = catFact.split(' ');
                const first4Words = splitedFact.slice(0, 4).join(' ');
                setWords(first4Words);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handldeClick = useCallback(()=>{

        fetchFacts().then(
            catFact => {
                        console.log(catFact);
                        setFact(catFact)
                        const splitedFact = catFact.split(' ')
                        const first4Words = splitedFact.slice(0, 4).join(' ')
                        setWords(first4Words)
                    }
                    
                    ).catch(error => {
                        error.error
                    })
                },[])
                
                useEffect(()=>{
                    console.log(words);
                    const image = (`https://cataas.com/cat/says/${words}`)
                    setImg(image)
                    
                    },[words])

    return (
        <>
            <Header />
            <CatImg images={img} />
            <Catfact facts={fact} />
            <Button onClick={handldeClick} />
        </>
    )
}