import { Route, Routes } from "react-router-dom";
import { UserRouter } from "./User/router/UserRouter";
import { AuthRouter } from "./Auth/routes/AuthRouter";
import { AdminRouter } from "./Admin/routes/AdminRouter";
import { AuthContextProvider } from "./Auth/context/AuthContextProvider";

export function AppRouter() {
    return (
        <main>
            <AuthContextProvider>
                <Routes>
                    <Route
                        path='/*'
                        element={<UserRouter />}
                    />

                    <Route
                        path="/dev/*"
                        element={<AuthRouter />}
                    />
                    {
                        <Route
                            path="/admin/*"
                            element={<AdminRouter />
                            }
                        />
                    }
                </Routes>
            </AuthContextProvider>
        </main>
    )
}