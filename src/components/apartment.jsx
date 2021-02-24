import { Fade, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Field, Form } from "react-final-form";
import arr from "../pages/api/types";
import Styles from "./styles";
import { SelectAdapter, TextFieldAdapter, ToggleAdapter } from "./utils";
import Dropdown from './Dropdown';

const ApartmentForm = ({ onSubmit, sent, neighborhoodList, changeNeighborhood, selectedNeighborhood }) => (
    <Styles>
        <Fade in={true} timeout={2000}>
            <Typography variant="h1">🏙️</Typography>
        </Fade>
        <Fade in={true} timeout={2000}>
            <Typography variant="h2">Cadastrar novo apartamento</Typography>
        </Fade>
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <Fade in={true} timeout={3000}>
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h2" gutterBottom>
                            Endereço
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    name="street"
                                    component={TextFieldAdapter}
                                    placeholder="Endereço"
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Dropdown 
                                    neighborhoodList = {neighborhoodList}
                                    handleChange = {changeNeighborhood}
                                    value = {selectedNeighborhood}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    name="city"
                                    component={TextFieldAdapter}
                                    placeholder="Cidade"
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    name="cep"
                                    component={TextFieldAdapter}
                                    placeholder="CEP"
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    name="rent"
                                    component={TextFieldAdapter}
                                    placeholder="Valor de aluguel"
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    name="condoFee"
                                    component={TextFieldAdapter}
                                    placeholder="Valor de condomínio"
                                />
                            </Grid>
                        </Grid>

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
                                    placeholder="Salas de estar"
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    name="diningRoom"
                                    component={SelectAdapter}
                                    options={arr}
                                    placeholder="Salas de jantar"
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    name="parking"
                                    style={{ maxWidth: "50%" }}
                                    component={SelectAdapter}
                                    options={arr}
                                    placeholder="Estacionamentos"
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    name="floor"
                                    component={TextFieldAdapter}
                                    placeholder="Andar"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    name="includesWardrobe"
                                    component={ToggleAdapter}
                                    labelposition="left"
                                    defaultValue={false}
                                />
                                Possui armários?
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    name="doorman24h"
                                    component={ToggleAdapter}
                                    labelposition="left"
                                    defaultValue={false}
                                />
                                Porteiro 24 horas?
                            </Grid>
                        </Grid>

                        <Field
                            name="description"
                            multiline={true}
                            component={TextFieldAdapter}
                            fullWidth
                            placeholder="Descrição"
                        />
                        <div className="buttons">
                            <button
                                onClick={() => sent(true)}
                                type="submit"
                                disabled={submitting}
                            >
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

                        {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                    </form>
                </Fade>
            )}
        />
    </Styles>
);

export default ApartmentForm;
