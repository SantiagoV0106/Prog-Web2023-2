import { Link } from "react-router-dom";
import './pokemoncard.css'

export function PokemonCard({ pokemon }) {


    if (!pokemon) {
        return (
            <div className="poke-card-404">
                <img src="/pokeball.png" alt="pokeball" />
                <p>Not in the Pokedex</p>
            </div>
        )
    }

    const cardImg = pokemon.sprites.front_default ?? ''

    return (
        <Link to={`/pokemon/${pokemon.id}`} className={`pokemon-card-${pokemon.types[0].type.name}`}>
            <div className={`pokemon-${pokemon.types[0].type.name}-container`}>
                <img src={cardImg} alt={`Pokemon img ${pokemon.name}`} 
                />
            </div>
            <div className="info-container">
                <h2> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} </h2>
                <div className="types-container">
                    {
                        pokemon.types.map(({ type }) => {
                            return (
                                <p key={crypto.randomUUID()} className={`type-${type.name}`} >{type.name}</p>
                            )
                        })
                    }
                </div>  
            </div>
            <div className="id-container">
                <h2> {`# ${pokemon.id.toString().padStart(3, 0)}`} </h2>
            </div>
        </Link>
    )
}