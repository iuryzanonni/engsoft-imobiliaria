import { useState } from "react";
import HousesTable from "./components/houses-table";

function Home() {
    return (
        <div>
            <h1>Home - Imobiliária</h1>
            <HousesTable />
        </div>
    );
}

export default Home;
