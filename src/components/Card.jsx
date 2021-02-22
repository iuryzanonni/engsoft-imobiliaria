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
    const styles = useStyles();

    const area = props.model;
    const isHouse = true;
    return (
        <Card className={styles.root}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={2}>
                    <CardContent>
                        <Typography variant="h1">🏠</Typography>
                        <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "bold" }}
                        >
                            R$ 100.000,00
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={9}>
                    <CardContent>
                        <Grid container direction="row">
                            <Grid item xs={10}>
                                <Typography variant="subtitle1">
                                    Descrição
                                </Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Button variant="outlined" color="primary">
                                    Agendar
                                </Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="subtitle1">
                                    Endereço
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
                                            {area}
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
                                            {area}
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
                                            {area}
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
                                            {area}
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
                                            {area}
                                        </Typography>
                                    </Grid>

                                    {isHouse && (
                                        <Grid item xs={2}>
                                            <Typography
                                                style={{ fontWeight: "bold" }}
                                                className={styles.font}
                                            >
                                                Sala de Jantar
                                            </Typography>
                                            <Typography className={styles.font}>
                                                {area}
                                            </Typography>
                                        </Grid>
                                    )}

                                    {isHouse && (
                                        <Grid item xs={2}>
                                            <Typography
                                                style={{ fontWeight: "bold" }}
                                                className={styles.font}
                                            >
                                                Andar
                                            </Typography>
                                            <Typography className={styles.font}>
                                                {area}
                                            </Typography>
                                        </Grid>
                                    )}

                                    {isHouse && (
                                        <Grid item xs={2}>
                                            <Typography
                                                style={{ fontWeight: "bold" }}
                                                className={styles.font}
                                            >
                                                Condomínio
                                            </Typography>
                                            <Typography className={styles.font}>
                                                {area}
                                            </Typography>
                                        </Grid>
                                    )}

                                    {isHouse && (
                                        <Grid item xs={3}>
                                            <Typography
                                                style={{ fontWeight: "bold" }}
                                                className={styles.font}
                                            >
                                                Portaria 24 hrs
                                            </Typography>
                                            <Typography className={styles.font}>
                                                {area}
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
