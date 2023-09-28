const CAT_IMG_URL = 'https://cataas.com/cat/says/'

export const fetchImg = async ({words}) => {
    return fetch(`${CAT_IMG_URL}${words}`)
        .then((img) => {
            const image = img.url
            return image
        })
        .catch((error) => setError(error))

}