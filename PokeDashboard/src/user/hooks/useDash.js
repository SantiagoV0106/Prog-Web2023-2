import { useContext } from "react"
import { PokeContext } from "../context/PokeContext"



 export const useDash = () => {
    const context = useContext(PokeContext)
   
    
    if (!context) {
        throw new Error('Puede que el comp no este en el provider')
    }

    const {pokes, isLoading, pokeId,filterValue, onFilterChange} = context

    return {
        pokes,
        isLoading,
        pokeId,
        filterValue,
        onFilterChange
    }
}