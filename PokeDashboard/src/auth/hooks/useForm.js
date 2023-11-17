import { useAuth } from "./useAuth"

export function useForm() {

    const { navigate, formState, setFormState,logIn, resetInputs } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/')
        logIn()
        resetInputs()
    }

    const handleOnChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return {
        formState,
        handleOnChange,
        handleSubmit
    }
}
