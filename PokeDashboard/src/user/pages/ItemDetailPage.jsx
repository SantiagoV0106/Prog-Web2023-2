import { Header, Loader } from "../components"
import { useItem } from "../hooks/useItem"

export function ItemDetailPage() {

   const {pokeId, isLoading} = useItem()

    const { name } = pokeId

    if (isLoading) 
    {
        return (
            <>
            <Header/>
            <Loader/>
            </>
        )
    }

    return (
        <>
        <Header/>
        <p> {name} </p>
        </>
    )
}