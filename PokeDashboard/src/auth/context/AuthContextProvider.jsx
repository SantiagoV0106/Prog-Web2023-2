import { useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { fetchPokes} from "../../user/services/fetchPokes";

export function AuthContextProvider({ children }) {

    //Auth context hooks

    const [islogged, setIsLogged] = useState(false)

    const navigate = useNavigate()

    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })


    // User context hooks
  
    const [isLoading, setLoading] = useState(true)
    const [pokes, setPokes] = useState([])
    const [dashFormSate, setDashFormSate] = useState({
        filter : ''
    })


    const limit = 20
    const offset = 0

    useEffect(() => {
        fetchPokes({ limit, offset })
            .then((pokemons) => {
                setPokes(pokemons)
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [])



    // Auth lógica

    const logIn = (user) => {

        if (user) {
            setIsLogged(true)

            // navegar a ruta privada (dash)


        }
        console.log(user);

    }

    return (
        <AuthContext.Provider value={
            {
                islogged,
                logIn,
                formState,
                setFormState,
                navigate,
                pokes,
                isLoading,
                dashFormSate, 
                setDashFormSate
            }
        }>

            {children}

        </AuthContext.Provider>
    )

}