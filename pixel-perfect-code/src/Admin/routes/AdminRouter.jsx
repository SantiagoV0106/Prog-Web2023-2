import { Route, Routes } from "react-router-dom";
import { UploadFilePage } from "../pages";
import { PrivateRoute } from "../../Auth/routes/PrivateRoute";

export function AdminRouter() {
    return (
        <Routes>
            <Route
                path="/upload"
                element={
                    <PrivateRoute>
                        <UploadFilePage />
                    </PrivateRoute>
                } />
        </Routes>
    )
}