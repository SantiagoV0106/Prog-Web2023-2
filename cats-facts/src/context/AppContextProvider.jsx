import React, { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { fetchFacts } from "../services/fetchCatFact";
import { fetchImg } from "../services/fetchCatImg";


export function AppContextProvider({ children }) {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [img, setImg] = useState(null)
    const [words, setWords] = useState(null)

    const handleOnClick = () => {
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
            fetchImg({ words })
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


    return (
        <AppContext.Provider value={
            {
                data,
                isLoading,
                error,
                img,
                words,
                handleOnClick
            }}
        >
            {children}

        </AppContext.Provider>
    )
}