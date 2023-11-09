import { useAuth } from "./useAuth"
import { useState } from "react"

export function useForm() {
    
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })
    
    const { logIn } = useAuth()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        logIn(formState)
    }
    
    const handleOnChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name] : target.value
        })
        console.log(target);
    }

    return {
        formState,
        handleOnChange,
        handleSubmit
    }
}
