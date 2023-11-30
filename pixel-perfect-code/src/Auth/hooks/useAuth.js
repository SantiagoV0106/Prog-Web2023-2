import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('Maybe the component is not in the provider')
    }

    const {
        isLogged,
        setIsLogged,
        email,
        setEmail,
        password,
        setPassword,
        handleEmailChange,
        handlePasswordChange,
        handleOnSubmit,
        handleLogOut,
        error
    } = context

    return {
        isLogged,
        setIsLogged,
        email,
        setEmail,
        password,
        setPassword,
        handleEmailChange,
        handlePasswordChange,
        handleOnSubmit,
        handleLogOut,
        error
    }
}