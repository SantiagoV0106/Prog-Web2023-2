import { useContext, useEffect } from "react";
import { fetchFacts } from "../services/fetchCatFact";
import { fetchImg } from "../services/fetchCatImg";
import { AppContext } from "../context/AppContext";
export const useApp = () => {

    const context = useContext(AppContext)

    if (!context) {
        throw new Error('Puede que el comp no este dentro del provider')
    }

    const {
        data,
        setData,
        isLoading,
        setLoading,
        error,
        setError,
        img,
        setImg,
        words,
        setWords
        
    } = context

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

    return {
        data,
        isLoading,
        error,
        img,
        words,
        handleOnClick
    }
}


