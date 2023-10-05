import React,{ useState } from "react";
import { AppContext } from "./AppContext";


export function AppContextProvider({ children }) {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [img, setImg] = useState(null)
    const [words, setWords] = useState(null)

    return (
        <AppContext.Provider value={
            {
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
            }}
        >
            {children}
            
        </AppContext.Provider>
    )
}