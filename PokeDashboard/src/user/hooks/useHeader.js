import { useAuth } from "../../auth/hooks/useAuth"
import { useNavigate } from "react-router-dom"

export const useHeader = () => {
    const {logOut} = useAuth()    
    const navigate = useNavigate()

    const handleOnClick = () => {
      console.log('click');
      logOut()
     navigate('/')
    }
    

    return {
        handleOnClick
    }

}