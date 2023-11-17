export const getPokesByGen = async (genNum) => {

    const res = await fetch(`https://pokeapi.co/api/v2/generation/${genNum}`)

    // TODO : Hacer try catch

    if (!res.ok) {
        throw new Error('Error al llamar por gen')
    }
    const data = await res.json()


    const pokemons = data.pokemon_species.map(async (pokemon) => {
        try {

            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const data = await res.json()
            return data

        } catch (error) {

            return false
        }
    })

    const response = await Promise.all(pokemons)
    console.log(response);

    return response
}