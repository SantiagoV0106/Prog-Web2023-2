import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./auth/pages";
import { DashBoardPage, ItemDetailPage, SearchPage } from "./user/pages";
import { PrivateRoute } from "./auth/routes/PrivateRoute";

export function AppRouter() {
    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={<LoginPage />}
                />
                <Route>
                        <Route
                            path='/dashboard'
                            element={
                                <PrivateRoute>
                                    <DashBoardPage />
                                </PrivateRoute>} />

                        <Route
                            path='pokemon/:id'
                            element={<ItemDetailPage />}
                        />

                        <Route
                            path='search'
                            element={<SearchPage />} />
                </Route>

                <Route path='*' element={<Navigate to='/dashboard' />} />

            </Routes>
        </main>
    )
}