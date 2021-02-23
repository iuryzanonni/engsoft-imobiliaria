import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Homer from "./Card";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        maxWidth: 850,
        minWidth: 600,
    },
    font: {
        fontSize: "12px",
    },
});

function Home(props) {
    const {
        area,
        cep,
        city,
        condoFee,
        description,
        diningRoom,
        doorman24h,
        floor,
        id,
        includesWardrobe,
        isHouse,
        livingRoom,
        neighbourhood,
        parking,
        rent,
        room,
        street,
        suite,
    } = props.model;

    const buttonFunction = props.buttonFunction;
    const styles = useStyles();

    return (
        <Card className={styles.root}>
            <Grid container justify="center" alignItems="center">
                <CardContent>
                    <Grid item xs={2}>
                        <Typography variant="h1">
                            {!isHouse ? "🏢" : "🏠"}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "bold" }}
                        >
                            {`R$ ${parseFloat(rent).toFixed(2)}`}
                        </Typography>
                    </Grid>
                </CardContent>
                <Grid item xs={9}>
                    <CardContent>
                        <Grid container direction="row">
                            <Grid item xs={10}>
                                <Typography variant="subtitle1">
                                    {description}
                                </Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => buttonFunction(id)}
                                >
                                    Agendar
                                </Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="subtitle1">
                                    {`${street}, ${neighbourhood}, ${city}, MG. CEP: ${cep}`}
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container alignItems="center" spacing={1}>
                                    <Grid item xs={2}>
                                        <Typography
                                            style={{ fontWeight: "bold" }}
                                            className={styles.font}
                                        >
                                            Área
                                        </Typography>
                                        <Typography className={styles.font}>
                                            {area} m²
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2}>
                                        <Typography
                                            style={{ fontWeight: "bold" }}
                                            className={styles.font}
                                        >
                                            Quartos
                                        </Typography>
                                        <Typography className={styles.font}>
                                            {room}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2}>
                                        <Typography
                                            style={{ fontWeight: "bold" }}
                                            className={styles.font}
                                        >
                                            Suites
                                        </Typography>
                                        <Typography className={styles.font}>
                                            {suite}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2}>
                                        <Typography
                                            style={{ fontWeight: "bold" }}
                                            className={styles.font}
                                        >
                                            Sala de Estar
                                        </Typography>
                                        <Typography className={styles.font}>
                                            {livingRoom}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <Typography
                                            style={{ fontWeight: "bold" }}
                                            className={styles.font}
                                        >
                                            Possui armários
                                        </Typography>
                                        <Typography className={styles.font}>
                                            {includesWardrobe ? "Sim" : "Não"}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2}>
                                        <Typography
                                            style={{ fontWeight: "bold" }}
                                            className={styles.font}
                                        >
                                            Estacionamento
                                        </Typography>
                                        <Typography className={styles.font}>
                                            {parking}
                                        </Typography>
                                    </Grid>

                                    {!isHouse && (
                                        <Grid item xs={2}>
                                            <Typography
                                                style={{ fontWeight: "bold" }}
                                                className={styles.font}
                                            >
                                                Sala de Jantar
                                            </Typography>
                                            <Typography className={styles.font}>
                                                {diningRoom ? "Sim" : "Não"}
                                            </Typography>
                                        </Grid>
                                    )}

                                    {!isHouse && (
                                        <Grid item xs={2}>
                                            <Typography
                                                style={{ fontWeight: "bold" }}
                                                className={styles.font}
                                            >
                                                Andar
                                            </Typography>
                                            <Typography className={styles.font}>
                                                {`${floor}º`}
                                            </Typography>
                                        </Grid>
                                    )}

                                    {!isHouse && (
                                        <Grid item xs={2}>
                                            <Typography
                                                style={{ fontWeight: "bold" }}
                                                className={styles.font}
                                            >
                                                Condomínio
                                            </Typography>
                                            <Typography className={styles.font}>
                                                {`R$${parseFloat(
                                                    condoFee
                                                ).toFixed(2)}`}
                                            </Typography>
                                        </Grid>
                                    )}

                                    {!isHouse && (
                                        <Grid item xs={3}>
                                            <Typography
                                                style={{ fontWeight: "bold" }}
                                                className={styles.font}
                                            >
                                                Portaria 24 hrs
                                            </Typography>
                                            <Typography className={styles.font}>
                                                {doorman24h ? "Sim" : "Não"}
                                            </Typography>
                                        </Grid>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
}

export default Home;
