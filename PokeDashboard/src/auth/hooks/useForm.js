import { useAuth } from "./useAuth"

export function useForm() {
    
    const { logIn, navigate, formState, setFormState } = useAuth()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        logIn(formState)
        navigate('/dashboard')

    }
    
    const handleOnChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name] : target.value
        })
    }

    return {
        formState,
        handleOnChange,
        handleSubmit
    }
}
