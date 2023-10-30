import { Route, Routes } from "react-router-dom";
import { LandingRouter } from "./Landing/routers/LandingRouter";

export function AppRouter() {
    return(
        <main>
            <Routes>
                <Route
                path='*'
                element={<LandingRouter/>}
                /> 
            </Routes>
        </main>
    )
}