import React, { useState, useEffect } from "react";
import { Header, CatImg, Catfact, Button } from "./components";
import { fetchFacts } from "./services/fetchCatFact";
import { fetchImg } from "./services/fetchCatImg";

export function App() {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [img, setImg] = useState(null)
    const [words, setWords] = useState(null)

    const handleOnClick = () => {
        fetchImgData()
        fetchData()
    }


    const fetchData = () => {
        setLoading(true)

        fetchFacts()
            .then((res) => {
                setData(res)
                if (res) {
                    const wordsArray = res.split(' ').slice(0, 4);
                    setWords(wordsArray.join(' '));
                }
            })
            .catch((error) => setError(error))
    }

    useEffect(() => {
        fetchData()
        }, [])
        
    const fetchImgData = () => {
        if (words) {
            fetchImg({words})
                .then((img) => {
                    setImg(img)
                })
                .catch((error) => setError(error))
                .finally(() => setLoading(false))
        }
    } 

        useEffect(() => {
            fetchImgData()
    }, [words])

    console.log(data);
    console.log(words);
    console.log(img);

  
    if (isLoading) {
        return (
            <>
                <Header />
                <p>Your Fact is loading...</p>
            </>
        
        )
    }

    if (error) {

        return (<p> {error} </p>)
    }

    return (
        <>
            <Header />
            <main>
                <CatImg images={img} />
                <Catfact facts={data} />
                <Button onClick={handleOnClick}  />
            </main>
        </>
    )
}