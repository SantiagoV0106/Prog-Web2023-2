import { Route, Routes } from "react-router-dom";
import { DashBoardPage, ItemDetailPage } from "../pages";
import { PrivateRoute } from "../../auth/routes/PrivateRoute";
import { PokeContextProvider } from "../context/PokeContextProvider";


export function UserRouter() {

    return (
        <PokeContextProvider>
            <Routes>
                <Route
                    path='/'
                    element={
                        <PrivateRoute>
                            <DashBoardPage />
                        </PrivateRoute>
                    }
                />

                <Route
                    path='/pokemon/:id'
                    element={<ItemDetailPage />}
                />
                <Route path='/*' element={<></>} />
            </Routes>
        </PokeContextProvider>

    )
}