import House from "../components/houses-table";
import Header from '../components/Header';

function Home() {
    return (
        <>
            <Header></Header>
            <h1>Home - Imobiliária</h1>
            <House
                onSubmit={() => {
                    console.log("mama");
                }}
            />
        </>
    );
}

export default Home;
