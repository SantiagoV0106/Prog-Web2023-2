const URL = 'https://catfact.ninja/fact'

export async function fetchFacts() {
    const res = await fetch(URL)

    if (!res.ok) {
        const error = `An error has ocurred : ${res.status} `
        throw new Error(error)
    }

    const facts = await res.json()
    return facts.fact
}
