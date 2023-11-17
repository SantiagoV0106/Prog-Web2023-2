const BASE_URL = import.meta.env.VITE_BASE_API_URL

export const getPokesById = async(id) => {
    const res = await fetch(`${BASE_URL}pokemon/${id}`)

    if (!res.ok) {
        const message = `Something went wrong : ${res.status}`
        throw new Error(message)  
    }

    const data = await res.json()

    return data
}
