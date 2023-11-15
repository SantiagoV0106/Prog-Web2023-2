import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export function PrivateRoute({children}) {

    const {islogged} = useAuth()

    return islogged ? children : <Navigate to='/'/>
}