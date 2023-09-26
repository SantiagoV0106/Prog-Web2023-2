import React from "react";
import { Header, CatImg, Catfact, Button } from "./components";
import { fetchFacts } from "./services/useFetch";


export function App() {

    const { data, isLoading, error, img } = fetchFacts()
    console.log(data);
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
                <Button />
            </main>
        </>
    )
}
// onClick={handldeClick}