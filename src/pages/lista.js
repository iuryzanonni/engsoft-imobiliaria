import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../components/Card";
import { get } from "../api-front";

function Home() {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        setProperties([]);
        get("properties").then((data) => {
            setProperties(data);
        });
    }, []);

    return (
        <Grid
            container
            spacing={2}
            direction="column"
            justify="space-evenly"
            alignItems="center"
        >
            {properties &&
                properties.map((property, index) => {
                    return (
                        <Grid key={index} item xs={12}>
                            <Card model={property} />
                        </Grid>
                    );
                })}
        </Grid>
    );
}

export default Home;
