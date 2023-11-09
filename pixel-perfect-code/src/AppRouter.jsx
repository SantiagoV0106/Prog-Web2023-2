import { Route, Routes } from "react-router-dom";
import {UserRouter } from "./User/router/UserRouter";
import { AdminRouter } from "./Admin/routes/AdminRouter";
import { AuthRouter } from "./Auth/routes/AuthRouter";

export function AppRouter() {
    return(
        <main>
            <Routes>
                <Route
                path='/*'
                element={<UserRouter/>}
                /> 
                <Route 
                path="/login"
                element={<AuthRouter/>}
                />
                <Route 
                path="/admin"
                element={<AdminRouter/>}
                />
            </Routes>
        </main>
    )
}