import React from "react";
import {Body } from "./components";
import { AppContextProvider } from "./context/AppContextProvider";

export function App() {


    return (
     <AppContextProvider>
         <Body/>
     </AppContextProvider>

    )
}