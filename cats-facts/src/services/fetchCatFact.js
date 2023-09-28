const URL = 'https://catfact.ninja/fact'


export const fetchFacts = async () => {

    return fetch(URL)

        .then((res) => {

            if (!res.ok) {
                throw new Error('Something went wrong')
            }

            return res.json()
        })
        .then((data) => {
            const fact = data.fact
            return fact
        })
        .catch((error) => {
            throw new Error(error)
        })
}
