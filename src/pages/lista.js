import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../components/Card";
import { render } from "react-dom";

function Home() {
    let model = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    return (
        <Grid
            container
            spacing={2}
            direction="column"
            justify="space-evenly"
            alignItems="center"
        >
            {model.map((row, index) => {
                return (
                    <Grid key={index} item xs={12}>
                        <Card model={row} />
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default Home;
