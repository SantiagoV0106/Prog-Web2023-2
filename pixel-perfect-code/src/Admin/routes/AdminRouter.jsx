import { Route, Routes } from "react-router-dom";
import { UploadFilePage } from "../pages";

export function AdminRouter() {
    return (
        <Routes>
            <Route
                path='/dashboard'
                element={<UploadFilePage />} />
            <Route
                path="/upload"
                element={<UploadFilePage />} />
        </Routes>
    )
}