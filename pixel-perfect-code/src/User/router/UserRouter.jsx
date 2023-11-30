import { Route, Routes } from "react-router-dom";
import { ContactUs, Landing, OurWorkPage, ProjecDetailPage } from "../pages";

export function UserRouter() {
    return (
 
            <Routes>
                <Route
                    path='/'
                    element={<Landing />} />
                <Route
                    path='/contactus'
                    element={<ContactUs />} />
                <Route
                    path='/ourwork'
                    element={<OurWorkPage />} />
                <Route
                    path='/project/:id'
                    element={<ProjecDetailPage />} />
            </Routes>

    )
}