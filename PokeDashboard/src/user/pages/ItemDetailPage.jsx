import { useEffect, useState } from "react"
import { getPokesById } from "../services/fetchPokes"
import { useParams } from "react-router-dom"

export function ItemDetailPage() {

    const [pokeId, setPokeId] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()


    useEffect(() => {
        getPokesById(id)
            .then((pokemon) => {
                setPokeId(pokemon)
            }).finally(() => {
                setIsLoading(false)
            })
    }, [id])


    const { name } = pokeId

    if (isLoading) {
        return (
            <p>Cargando datos</p>
        )
    }

    return (
        <p> {name} </p>
    )
}