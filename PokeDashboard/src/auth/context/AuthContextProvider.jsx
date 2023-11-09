import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthContextProvider({ children }) {

    

    const [islogged, setIsLogged] = useState(false)
    const [user, setUser] = useState({
        email: '123@gmail.con',
        password: '123'
    })

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
                user,
                logIn
            }
        }>

            {children}

        </AuthContext.Provider>
    )

}