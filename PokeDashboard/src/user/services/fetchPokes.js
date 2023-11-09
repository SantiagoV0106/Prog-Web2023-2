const BASE_URL = import.meta.env.BASE_API_URL

export const fetchApi = async () => {
    const res = await fetch(BASE_URL)

    if (!res.ok) {
        const message = `Something went wrong : ${res.status}`
        throw new Error(message)  
    }

    const data = await res.json()

    return data
}