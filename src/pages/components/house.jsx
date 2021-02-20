import React, { useState } from "react";

import { Fade, Grid, Typography } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { SelectAdapter, ToggleAdapter } from "./utils";
import { defaultHouse } from "../api/types";
import arr from "../api/types";
import Styles from "./styles";
import TextField from "@material-ui/core/TextField";

const TextFieldAdapter = ({ input, meta, ...rest }) => (
    <TextField {...input} {...rest} />
);

const HouseForm = ({ onSubmit, sent }) => {
    const [house, setHouse] = useState(defaultHouse);

    /*     const numbers = Array.from(Array(10).keys());
     */
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const required = (value) => (value ? undefined : "Required");

    return (
        <Styles>
            <Fade in={true} timeout={2000}>
                <Typography variant="h1">🏠</Typography>
            </Fade>
            <Fade in={true} timeout={2000}>
                <Typography variant="h2">Cadastrar nova casa</Typography>
            </Fade>
            {/*
    area: 0,
    includesWardrobe: false,
    description: "", */}

            <Form
                onSubmit={onSubmit}
                render={({
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
                    values,
                }) => (
                    <Fade in={true} timeout={3000}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={6}>
                                    <Field
                                        name="room"
                                        component={SelectAdapter}
                                        options={arr}
                                        placeholder="Quartos"
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Field
                                        name="suite"
                                        component={SelectAdapter}
                                        options={arr}
                                        placeholder="Suítes"
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Field
                                        name="livingRoom"
                                        component={SelectAdapter}
                                        options={arr}
                                        placeholder="Salas"
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Field
                                        name="parking"
                                        style={{ maxWidth: "50%" }}
                                        component={SelectAdapter}
                                        options={arr}
                                        placeholder="Estacionamentos"
                                    />{" "}
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item>
                                    <Field
                                        name="includesWardrobe"
                                        label="Inclui Armários"
                                        component={ToggleAdapter}
                                        labelposition="left"
                                        defaultValue={false}
                                    />
                                    Possui armários?
                                </Grid>
                            </Grid>
                            <Field
                                name="description"
                                multiline={true}
                                component={TextFieldAdapter}
                                validate={required}
                                fullWidth
                                className={"salve"}
                                placeholder="Descrição"
                            />
                            <div className="buttons">
                                <button type="submit" disabled={submitting}>
                                    Cadastrar
                                </button>
                                <button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                >
                                    Limpar
                                </button>
                            </div>

                            <pre>{JSON.stringify(values, 0, 2)}</pre>
                        </form>
                    </Fade>
                )}
            />
        </Styles>
    );
};
export default HouseForm;
