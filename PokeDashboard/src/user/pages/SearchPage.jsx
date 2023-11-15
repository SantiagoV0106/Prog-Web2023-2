import { useState, useEffect } from "react"
import { getAllPokes } from "../services/fetchPokes"
import { useLocation } from "react-router-dom"
export function SearchPage() {

    const [globalPokes, setGlobalPokes] = useState([])
    const location = useLocation()

    useEffect(() => {
      getAllPokes.then((pokemons)=>{
        setGlobalPokes(pokemons)
      })
      
    }, [])

    const filteredPokemon = globalPokes.filter(pokemon => pokemon.name.includes(location.state))
    

    return(
        <h1>Hola desde search page</h1>
    )
}