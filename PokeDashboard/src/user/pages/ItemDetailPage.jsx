import { Header, Loader } from "../components"
import { useItem } from "../hooks/useItem"

export function ItemDetailPage() {

    const { pokeId, isLoading } = useItem()
    console.log(pokeId);

    const {
        name,
        types,
        id,
        height,
        weight,
        stats,
        abilities,
        base_experience
    } = pokeId

    const gifs = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`

    if (isLoading) {
        return (
            <>
                <Header />
                <Loader />
            </>
        )
    }

    return (
        <>
            <Header />
            <div className={`${types[0].type.name}-id-container`}>
                <div className={`poke-name-container`}>
                    <h2> {name[0].toUpperCase() + name.slice(1)} </h2>
                    <h2> {`#${id.toString().padStart(3, 0)}`} </h2>
                    <img className="poke-img" src={gifs} alt={name} />
                    <div className="types-container">
                        {
                            types.map(({ type }) => {
                                return (
                                    <p key={crypto.randomUUID()} className={`type-${type.name}`} >{type.name}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={`detail-${types[0].type.name}-container`}>
                    <h3>Characteristics</h3>
                    <div className="char-container">
                        <p> Height
                            <span>
                                {height}
                            </span>
                        </p>
                        <p>
                            Weight
                            <span>
                                {weight}
                            </span>
                        </p>

                        <p>
                            Base Experience
                            <span>
                                {base_experience}
                            </span>
                        </p>
                    </div>
                    <div className="abilities-container">
                        <h3>Abilities</h3>
                        {
                            abilities.map(({ ability, is_hidden }) => {
                                return (
                                    <div className="ability-container" key={crypto.randomUUID()}>
                                        <p> {ability.name} {is_hidden ? '(hideen ability)' : ''} </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="stats-contianer">
                        <h3>Statistics</h3>
                        <div className="row-container">

                            {
                                stats.map(({ base_stat, stat }) => {
                                    return (
                                        <div className="stat-container" key={crypto.randomUUID()}>
                                            <p> {stat.name}
                                            </p>
                                            <span>
                                                {base_stat}
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}