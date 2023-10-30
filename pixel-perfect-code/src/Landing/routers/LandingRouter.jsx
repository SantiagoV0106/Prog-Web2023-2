import { Route, Routes } from "react-router-dom";
import { Landing, ContactUs, LogIn } from "../pages";

export function LandingRouter() {
    return(
        <Routes>
            <Route
            path='/'
            element={<Landing/>} />

            <Route
            path='/contactus'
            element={<ContactUs/>} />

            <Route
            path='/login'
            element={<LogIn/>} />
        </Routes>
    )
}