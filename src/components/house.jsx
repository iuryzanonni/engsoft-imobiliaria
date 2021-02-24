import { Fade, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Field, Form } from "react-final-form";
import arr from "../pages/api/types";
import Dropdown from "./dropdown";
import Styles from "./styles";
import { SelectAdapter, ToggleAdapter } from "./utils";

const TextFieldAdapter = ({ input, meta, ...rest }) => (
    <TextField {...input} {...rest} />
);

const HouseForm = ({
    onSubmit,
    sent,
    neighborhoodList,
    changeNeighborhood,
    selectedNeighborhood,
}) => {
    return (
        <Styles>
            <Fade in={true} timeout={2000}>
                <Typography variant="h1">🏠</Typography>
            </Fade>
            <Fade in={true} timeout={2000}>
                <Typography variant="h2">Cadastrar nova casa</Typography>
            </Fade>
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
                                        neighborhoodList={neighborhoodList}
                                        handleChange={changeNeighborhood}
                                        value={selectedNeighborhood}
                                    />
                                    {/* <label>Bairros</label>
                                    <Field
                                        name="bairro"
                                        component={SelectAdapter}
                                        options={bairros}
                                        placeholder="Quartos"
                                    /> */}
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
                                        options={arr}
                                        placeholder="CEP"
                                    />
                                </Grid>
                                <Grid item xs={6} sm={12}>
                                    <Field
                                        name="rent"
                                        component={TextFieldAdapter}
                                        options={arr}
                                        placeholder="Valor de aluguel"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={6}>
                                    <label>Quartos</label>
                                    <Field
                                        name="room"
                                        component={SelectAdapter}
                                        options={arr}
                                        placeholder="Quartos"
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <label>Suites</label>
                                    <Field
                                        name="suite"
                                        component={SelectAdapter}
                                        options={arr}
                                        placeholder="Suítes"
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <label>Sala de estar</label>

                                    <Field
                                        name="livingRoom"
                                        component={SelectAdapter}
                                        options={arr}
                                        placeholder="Salas de estar"
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <label>Estacionamentos</label>
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
                                        name="area"
                                        component={TextFieldAdapter}
                                        options={arr}
                                        placeholder="Area (m²)"
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Field
                                        name="includesWardrobe"
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
                                fullWidth
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
};
export default HouseForm;
