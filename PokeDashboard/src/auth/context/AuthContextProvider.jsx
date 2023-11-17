import { useNavigate} from "react-router-dom"
import { useState} from "react";
import { AuthContext } from "./AuthContext";

const inictialLoggState = JSON.parse(window.localStorage.getItem('islogged')) ?? false
const initialInputState = {
    email: '',
    password: ''
}
export function AuthContextProvider({ children }) {

    //Auth context hooks

    const [islogged, setIsLogged] = useState(inictialLoggState)

    const navigate = useNavigate()

    const [formState, setFormState] = useState(initialInputState)

    const logIn = () => {
        setIsLogged(true)
        localStorage.setItem('islogged', JSON.stringify(true))
    }
    const logOut = () => {
        setIsLogged(false)
        localStorage.setItem('islogged', JSON.stringify(false))
    }

    const resetInputs = () => {
        setFormState(initialInputState)
    }

    return (
        <AuthContext.Provider value={
            {
                islogged,
                setIsLogged,
                logIn,
                logOut,
                formState,
                setFormState,
                resetInputs,
                navigate
            }
        }>

            {children}

        </AuthContext.Provider>
    )

}