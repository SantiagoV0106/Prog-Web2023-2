import { PokeContext } from "./PokeContext"
import { useState, useEffect } from "react"
import { getPokesByGen } from "../services/fetchPokesByGen"


export function PokeContextProvider({children}) {

const [pokes, setPokes] = useState([])
const [isLoading, setLoading] = useState(true)

const [filterValue, setFilterValue] = useState(1)




const onFilterChange = (value) =>
{
    setFilterValue(value)
    setLoading(true)
}

useEffect(() => {
   getPokesByGen(filterValue).then((pokemons)=> {
 setPokes(pokemons)
   }).finally(()=> {
    setLoading(false)
   })
}, [filterValue])

    return(
        <PokeContext.Provider value={{
            pokes,
            isLoading,
            filterValue,
            onFilterChange
        }}>
            {children}
            
        </PokeContext.Provider>
    )
}