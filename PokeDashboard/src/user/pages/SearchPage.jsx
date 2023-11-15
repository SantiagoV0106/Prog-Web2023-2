import { useState, useEffect } from "react"
import { getAllPokes } from "../services/fetchPokes"
import { useLocation } from "react-router-dom"
export function SearchPage() {




    const [globalPokes, setGlobalPokes] = useState([])
    const location = useLocation()
    console.log(location.state.filter);

    useEffect(() => {
      getAllPokes()
      .then((pokemons)=>{
        setGlobalPokes(pokemons)
      })
      
    }, [])

    console.log(globalPokes);

    
    const filteredPokemons = globalPokes.filter(pokemon => pokemon.name.includes(location.state.filter))
    
console.log(filteredPokemons);

    return(
        <h1>Hola desde search page</h1>
    )
}