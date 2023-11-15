import { useDash } from "../hooks/useDash"
import { Header, PokemonList } from "../components"
import { useForm } from "../hooks/useForm"

export function DashBoardPage() {

const {handleOnChange, handleSubmit, dashFormSate} = useForm()

    const {isLoading} = useDash()

    if (isLoading) {
        return(
        <h1>Cargando datos</h1>
        )
    }

console.log(dashFormSate.filter);

    return(
        <>
        <Header/>

        <div className="form-pokedex-container">
            <div className="pokedex-container">
                
            </div>
        <form onSubmit={handleSubmit}>
            <input
             type="search" 
             name="filter"
             placeholder="Search for any pokemon"
             onChange={handleOnChange}
             value={dashFormSate.filter}/>

             <button
             type="submit">Search</button>
        </form>
        </div>

        <div className="pokes-container">
        <PokemonList/>
        </div>
        </>
    )
}