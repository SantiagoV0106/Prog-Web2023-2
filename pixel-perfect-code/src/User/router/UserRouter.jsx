import { Route, Routes } from "react-router-dom";
import { ContactUs, Landing} from "../pages";

export function UserRouter() {
    return(
        <Routes>
            <Route
            path='/'
            element={<Landing/>} />
            <Route
            path='/contactus'
            element={<ContactUs/>} />
        </Routes>
    )
}