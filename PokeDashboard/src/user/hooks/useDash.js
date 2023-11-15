import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"



 export const useDash = () => {
    const context = useContext(AuthContext)
   
    
    if (!context) {
        throw new Error('Puede que el comp no este en el provider')
    }

    const {pokes, isLoading, dashFormSate, setDashFormSate, pokeId} = context

 if (pokes) {
    console.log(pokes);
 }


    return {
        pokes,
        isLoading,
        dashFormSate,
        setDashFormSate,
        pokeId
    }
}