import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MuiPaper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import { post } from "../api-front/index";

import HouseForm from "../components/house";
import ApartmentForm from "../components/apartment";

const SignUp = () => {
    const [type, setType] = useState("");

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onSubmit = async (values) => {
        await sleep(1000);
        const isHouse = type === "house" ? true : false;
        let data = { isHouse: isHouse, ...values };
        data.room = data.room.value;
        data.suite = data.suite.value;
        data.parking = data.parking.value;
        data.livingRoom = data.livingRoom.value;
        data.diningRoom = data.diningRoom.value;

        post(data);
    };

    const getForm = (type) =>
        type === "house" ? (
            <HouseForm onSubmit={onSubmit} isHouse={true} />
        ) : type === "apartment" ? (
            <ApartmentForm onSubmit={onSubmit} isHouse={false} />
        ) : (
            <></>
        );

    return (
        <Container maxWidth="sm">
            <MuiPaper style={{ padding: 30 }} elevation={1}>
                <Fade timeout={1000} in={true}>
                    <Typography
                        variant="h3"
                        gutterBottom
                        marked="center"
                        align="center"
                    >
                        Cadastrar um(a):
                    </Typography>
                </Fade>
                <Grid container style={{ marginBottom: 30 }}>
                    <Grid item xs={6}>
                        <Fade timeout={3000} in={true}>
                            <Button fullWidth onClick={() => setType("house")}>
                                Casa
                            </Button>
                        </Fade>
                    </Grid>
                    <Grid item xs={6}>
                        <Fade timeout={3000} in={true}>
                            <Button
                                fullWidth
                                onClick={() => setType("apartment")}
                            >
                                Apartamento
                            </Button>
                        </Fade>
                    </Grid>
                </Grid>

                {getForm(type)}
            </MuiPaper>
        </Container>
    );
};

export default SignUp;
