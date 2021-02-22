import { useState } from "react";
//import House from "./components/houses-table";
import House from "../components/houses-table";

function Home() {
    return (
        <div>
            <h1>Home - Imobiliária</h1>
            <House
                onSubmit={() => {
                    console.log("mama");
                }}
            />
        </div>
    );
}

export default Home;
