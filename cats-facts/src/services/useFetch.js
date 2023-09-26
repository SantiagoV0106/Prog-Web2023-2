import { useState, useEffect } from "react"
const URL = 'https://catfact.ninja/fact'
const CAT_IMG_URL = 'https://cataas.com/cat/says/'

export function fetchFacts() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [img, setImg] = useState(null)
    const [words, setWords] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                const fact = data.fact
                setData(fact)
                const splitedFact = fact.split(' ')
                const fourWords = splitedFact.slice(0, 4).join(' ')
                setWords(fourWords)
            })
            .catch((error) => setError(error))
    }, [])

    useEffect(() => {
        if (words) {
            fetch(`${CAT_IMG_URL}${words}`)
                .then((img) => {
                    const image = img.url
                    setImg(image)
                })
                .catch((error) => setError(error))
                .finally(()=> setLoading(false))
        }
    }, [words])

    return { data, isLoading, error, img }
}
