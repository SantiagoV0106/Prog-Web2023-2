import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokesById } from "../services/fetchPokeById"

export const useItem = () => {
    
    const [pokeId, setpokeId] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        getPokesById(id)
            .then((pokemon) => {
                setpokeId(pokemon)
            }).finally(() => {
                setIsLoading(false)
            })
    }, [id])
    



    return {

        pokeId,
        isLoading
     
    }


}