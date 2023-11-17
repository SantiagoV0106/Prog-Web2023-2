import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('El comp puede que no este en el provider')
    }

    const {
        islogged,
        setIsLogged,
        logIn,
        logOut,
        formState,
        setFormState,
        resetInputs,
        navigate

    } = context

    return {

        islogged,
        setIsLogged,
        logIn,
        logOut,
        formState, 
        setFormState,
        resetInputs,
        navigate
    }


}