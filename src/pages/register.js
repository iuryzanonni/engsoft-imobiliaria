import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import MuiPaper from "@material-ui/core/Paper";
import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import React, { useState, useEffect } from "react";
import { post } from "../api-front/index";
import ApartmentForm from "../components/apartment";
import Header from "../components/Header";
import HouseForm from "../components/house";
import getNeighborhoodList from './api/neighborhoodAPI';

const SignUp = () => {
    const [type, setType] = useState("");
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onSubmit = async (values) => {
        await sleep(1000);
        const isHouse = type === "house" ? true : false;
        let data = { isHouse: isHouse, ...values };
        console.log(data);
        data.room = data.room?.value;
        data.suite = data.suite?.value;
        data.parking = data.parking?.value;
        data.livingRoom = data.livingRoom?.value;
        data.diningRoom = data.diningRoom?.value;
        data["neighborhood"] = selectedNeighborhood
        console.log(data);

        post("properties", data);
    };

    const [neighborhoodList, setNeighborhoodList] = useState([]);
    const [selectedNeighborhood, setSelectedNeighborhood] = useState("Anchieta");

    useEffect(() => {
        getNeighborhoodList().then((resp) => {
            if (resp.status) {
                setNeighborhoodList(resp.neighborhoodList)
            }
        })
    }, [])


    const changeNeighborhood = (neighborhood) => {
        console.log(neighborhood);
        setSelectedNeighborhood(neighborhood);
    }

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
