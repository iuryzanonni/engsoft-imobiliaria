import {
    Button,
    Container,
    Fade,
    Grid,
    Snackbar,
    Typography,
} from "@material-ui/core";
import MuiPaper from "@material-ui/core/Paper";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
import { post } from "../api-front/index";
import ApartmentForm from "../components/apartment";
import Header from "../components/header";
import HouseForm from "../components/house";
import bairros from "../database/bairros";

const SignUp = () => {
    const [type, setType] = useState("");
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onSubmit = async (values) => {
        await sleep(1000);
        const isHouse = type === "house" ? true : false;
        let data = { isHouse: isHouse, ...values };
        data.room = data.room?.value;
        data.suite = data.suite?.value;
        data.parking = data.parking?.value;
        data.livingRoom = data.livingRoom?.value;
        data.diningRoom = data.diningRoom?.value;
        data["neighborhood"] = selectedNeighborhood;

        post("properties", data);
    };

    const [neighborhoodList, setNeighborhoodList] = useState([]);
    const [selectedNeighborhood, setSelectedNeighborhood] = useState(
        "Anchieta"
    );

    useEffect(() => {
        setNeighborhoodList(bairros);
    }, []);

    const changeNeighborhood = (neighborhood) => {
        setSelectedNeighborhood(neighborhood);
    };

    const getForm = (type) =>
        type === "house" ? (
            <HouseForm
                sent={setIsAlertOpen}
                onSubmit={onSubmit}
                isHouse={true}
                neighborhoodList={neighborhoodList}
                changeNeighborhood={changeNeighborhood}
                selectedNeighborhood={selectedNeighborhood}
            />
        ) : type === "apartment" ? (
            <ApartmentForm
                sent={setIsAlertOpen}
                onSubmit={onSubmit}
                isHouse={false}
                neighborhoodList={neighborhoodList}
                changeNeighborhood={changeNeighborhood}
                selectedNeighborhood={selectedNeighborhood}
            />
        ) : (
            <></>
        );

    return (
        <>
            <Header />
            <Container maxWidth="sm">
                <MuiPaper
                    style={{ marginTop: "90px", padding: "30px" }}
                    elevation={5}
                >
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
                                <Button
                                    fullWidth
                                    onClick={() => setType("house")}
                                >
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
            {isAlertOpen && (
                <Snackbar
                    open={isAlertOpen}
                    autoHideDuration={4000}
                    onClose={() => setIsAlertOpen(false)}
                >
                    <Alert
                        onClose={() => setIsAlertOpen(false)}
                        severity="success"
                    >
                        Cadastrado com sucesso!
                    </Alert>
                </Snackbar>
            )}
        </>
    );
};

export default SignUp;
