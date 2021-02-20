import { useState } from "react";

function Home() {
    return (
        <div>
            <h1>Home - Imobiliária</h1>
            <Contador />
        </div>
    );
}

function Contador(){
	const [contador, setContador] = useState(0);
	return(
		<div>
			<h2>{contador}</h2>
			<button onClick={() => {setContador(contador+1)}}>Adcionar</button>
			<button onClick={() => {setContador(0)}}>Zerar</button>
		</div>
	);
}

export default Home;
