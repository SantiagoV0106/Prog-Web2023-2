const URL = 'https://cataas.com/cat/says/Gato'

export async function fetchImgs() {
    const res = await fetch(URL)

    if (!res.ok) {
        const error = `An error has ocurred : ${res.status} `
        throw new Error(error)
    }

    return res.url
}