import { Link } from "react-router-dom";
import './pokemoncard.css'

export function PokemonCard({ pokemon }) {
    return (
        <Link to={`/pokemon/${pokemon.id}`} className='pokemon-card'>
            <div className="poke-card">
                <div className="poke-img-container">
                    <img src={pokemon.sprites.front_default} alt={`Pokemon img ${pokemon.name}`} />
                </div>
                <div className="name-container">
                    <h2> {pokemon.name} </h2>
                </div>
            </div>
        </Link>
    )
}