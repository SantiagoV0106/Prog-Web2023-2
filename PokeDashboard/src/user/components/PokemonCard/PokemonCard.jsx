import { Link } from "react-router-dom";
import './pokemoncard.css'

export function PokemonCard({ pokemon }) {


    if (!pokemon) {
       return(
        <div className="poke-card-404">
            <p>Not Found</p>
        </div>
       ) 
    }
   
    const cardImg = pokemon.sprites?.front_default ?? ''



    return (
        <Link to={`/pokemon/${pokemon.id}`} className={`pokemon-card-${pokemon.types[0].type.name}`}>
                <div className="poke-img-container">
                    <img src={cardImg} alt={`Pokemon img ${pokemon.name}`} />
                </div>
                <div className="name-container">
                    <h2> {pokemon.name} </h2>
                </div>
                <div className="id-container">
                    <h2> {`#${pokemon.id.toString().padStart(3,0)}`} </h2>
                </div>
        </Link>
    )
}