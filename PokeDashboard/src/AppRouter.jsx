import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./auth/pages/LoginPage";
import { PrivateRoute } from "./auth/routes/PrivateRoute";
import { DashBoardPage } from "./user/pages/DashboardPage";

export function AppRouter() {
    return (
        <main>
            <Routes>
                <Route
                    path='/dashboard'
                    element={
                        <PrivateRoute>
                            <DashBoardPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/"
                    element={<LoginPage />} />
            </Routes>
        </main>
    )
}