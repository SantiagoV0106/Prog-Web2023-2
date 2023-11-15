import { useNavigate } from "react-router-dom"
import { useDash } from "./useDash"

export const useForm = () => {
    const {dashFormSate, setDashFormSate, pokeId} = useDash()
    const navigate = useNavigate()
    

    const handleOnChange = ({ target }) => {
        const {name, value} = target

        setDashFormSate({
            ...dashFormSate, 
            [name] : value

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/search')
        
    }


    return {
        dashFormSate,
        handleOnChange,
        handleSubmit,
        pokeId,
        ...dashFormSate
    }


}