import React from "react";
import {Header, Body } from "./components";
import { AppContextProvider } from "./context/AppContextProvider";

export function App() {


    return (
     <AppContextProvider>
        <Header />
        <Body/>
     </AppContextProvider>

    )
}