const CAT_IMG_URL = 'https://cataas.com/cat/says/'

export const fetchImg = async ({words}) => {
    return fetch(`${CAT_IMG_URL}${words}`)
        .then((img) => {
            if (!img.ok) {
              throw new Error('Sorry, something went wrong with the image :<')  
            }
            const image = img.url
            return image
        })
        .catch((error) => setError(error))
}