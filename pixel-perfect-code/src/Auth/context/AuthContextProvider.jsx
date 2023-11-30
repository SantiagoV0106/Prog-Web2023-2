import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./authContext";

const initialLoggState = JSON.parse(window.localStorage.getItem('isLogged')) ?? false

export function AuthContextProvider({ children }) {

    const navigate = useNavigate()

 // Login states
    const [isLogged, setIsLogged] = useState(initialLoggState)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


// Error state 
    const [error, setError] = useState(null)


    // admin auth :  tester@gmail.com tester123

    const handleEmailChange = ({ target }) => {
        setEmail(target.value)
    }

    const handlePasswordChange = ({ target }) => {
        setPassword(target.value)
    }

 // Login logic
    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setIsLogged(true)
            localStorage.setItem('isLogged', JSON.stringify(true))
            navigate('/admin/upload')
        }
        catch (error) {
            setError(error)
        }
    }
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        logIn()
        restInputs()
    }

    const restInputs = () => {
        setEmail('')
        setPassword('')
    }
    
    // logout logic 
    
    const handleLogOut = async() => {
        try {
            await auth.signOut()
            setIsLogged(false)
            localStorage.setItem('isLogged', JSON.stringify(false))
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <AuthContext.Provider value={{
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

        }>
            {children}
        </AuthContext.Provider>
    )
}