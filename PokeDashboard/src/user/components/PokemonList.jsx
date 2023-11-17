import { useDash } from "../hooks/useDash"
import { PokemonCard } from "./PokemonCard/PokemonCard"

export function PokemonList() {

    const { pokes } = useDash()

    return (
        <>
            {
                pokes.map(pokemon => (<PokemonCard
                    pokemon={pokemon}
                    key={pokemon.id} />
                ))}
        </>
    )
}