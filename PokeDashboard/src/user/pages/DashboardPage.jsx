import { useDash } from "../hooks/useDash"
import { Filter, Header, Loader } from "../components"
import { PokemonList } from "../components"

export function DashBoardPage() {


    const { isLoading } = useDash()

    if (isLoading) {
        return (
            <>
                <Header />
                <Loader />
            </>
        )
    }

    return (
        <>
            <Header />
            <Filter/>
            <div className="pokes-container">
                <PokemonList />
            </div>
        </>
    )
}