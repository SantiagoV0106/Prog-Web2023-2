import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('El comp puede que no este en el provider')
    }

    const {
        islogged,
        logIn,
        formState,
        setFormState,
        navigate

    } = context

    return {

        islogged,
        logIn,
        formState, 
        setFormState,
        navigate
    }


}