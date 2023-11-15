const BASE_URL = import.meta.env.VITE_BASE_API_URL

export const fetchPokes = async ({limit, offset}) => {
    const res = await fetch(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`)

    if (!res.ok) {
        const message = `Something went wrong : ${res.status}`
        throw new Error(message)  
    }

    const data = await res.json()

    const pokemons = data.results.map(async(pokemon)=> {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        return data
    })

    const response = await Promise.all(pokemons)

    return response
}


export const getPokesById = async(id) => {
    const res = await fetch(`${BASE_URL}pokemon/${id}`)

    if (!res.ok) {
        const message = `Something went wrong : ${res.status}`
        throw new Error(message)  
    }

    const data = await res.json()

    return data
}


export const getAllPokes = async() => {

    const res = await fetch(`${BASE_URL}pokemon?limit=10000&offset=0`)

    if (!res.ok) {
        const message = `Something went wrong : ${res.status}`
        throw new Error(message)  
    }

    const data = await res.json()

    const pokemons = data.results.map(async(pokemon)=> {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        return data
    })

    const response = await Promise.all(pokemons)

    return response

}