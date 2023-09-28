import React from "react";
import { Header, CatImg, Catfact, Button } from "./components";
import { useApp } from "./hooks/useApp";

export function App() {
  
    const {data, isLoading, error, img, words, handleOnClick} = useApp()

console.log(data);
console.log(words);
console.log(img);

    if (isLoading) {
        return (
            <>
                <Header />
                <p>Your Fact is loading...</p>
            </>
        
        )
    }
    
    if (error) {

        return (<p> {error} </p>)
    }

    return (
        <>
            <Header />
            <main>
                <CatImg images={img} />
                <Catfact facts={data} />
                <Button onClick={handleOnClick}  />
            </main>
        </>
    )
}