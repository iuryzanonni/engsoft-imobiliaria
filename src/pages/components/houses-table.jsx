import { useState } from "react";

import { DataGrid, isArray } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Fade, Grid, Typography } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { SelectAdapter, ToggleAdapter } from "./utils";
import arr from "../api/types";
import Styles from "./styles";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import Chip from "@material-ui/core/Chip";

const hours = [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
];

let isSelected = {
    "8:00": false,
    "9:00": false,
    "10:00": false,
    "11:00": false,
    "12:00": false,
    "13:00": false,
    "14:00": false,
    "15:00": false,
    "16:00": false,
    "17:00": false,
    "18:00": false,
};

const resetIsSelected = () =>
    (isSelected = {
        "8:00": false,
        "9:00": false,
        "10:00": false,
        "11:00": false,
        "12:00": false,
        "13:00": false,
        "14:00": false,
        "15:00": false,
        "16:00": false,
        "17:00": false,
        "18:00": false,
    });

let swap = 0;
const clearSwap = () => (swap = 0);

const TextFieldAdapter = ({ input, meta, ...rest }) => (
    <TextField {...input} {...rest} />
);

const HousesTable = ({ onSubmit, sent }) => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(
        new Date("2014-08-18T21:11:54")
    );
    const [showHours, setShowHours] = useState(false);
    const [selectedHours, setSelectedHours] = useState(isSelected);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowHours(true);
    };

    const handleChipClick = (label) => {
        resetIsSelected();
        isSelected[label] = true;
        setSelectedHours(isSelected);
        console.log(label);
    };

    const rows = [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
        { id: 6, lastName: "Vagabunda", firstName: "Melissandre", age: 150 },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    ];

    const columns = [
        { field: "id", headerName: "ID", flex: 1 },
        { field: "firstName", headerName: "First name", flex: 1 },
        { field: "lastName", headerName: "Last name", flex: 1 },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            flex: 1,
        },
        {
            field: "edit",
            headerName: "Editar",
            flex: 1,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => setOpen(true)}
                >
                    Agendar
                </Button>
            ),
        },
    ];

    return (
        <div style={{ height: "50vh" }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
            <Dialog
                fullWidth
                maxWidth={"md"}
                aria-labelledby="simple-dialog-title"
                open={open}
                onClose={() => setOpen(false)}
            >
                {/* <Styles> */}
                <DialogContent>
                    <Form
                        onSubmit={onSubmit}
                        render={({
                            handleSubmit,
                            form,
                            submitting,
                            pristine,
                            values,
                        }) => (
                            <>
                                <DialogTitle id="alert-dialog-title">
                                    Registrar horário
                                </DialogTitle>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={4} sm={4}>
                                            <Field
                                                name="name"
                                                component={TextFieldAdapter}
                                                placeholder="Nome"
                                            />
                                        </Grid>

                                        <Grid item xs={4} sm={4}>
                                            <Field
                                                name="cpf"
                                                component={TextFieldAdapter}
                                                placeholder="CPF"
                                                size={11}
                                            />
                                        </Grid>

                                        <Grid item xs={4} sm={4}>
                                            <MuiPickersUtilsProvider
                                                utils={DateFnsUtils}
                                            >
                                                <KeyboardDatePicker
                                                    format="dd/MM/yyyy"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </Grid>
                                    </Grid>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignContent: "center",
                                            margin: "5px",
                                        }}
                                    >
                                        {hours.map((label) => {
                                            swap++;
                                            if (swap % 2)
                                                return (
                                                    showHours && (
                                                        <Chip
                                                            style={{
                                                                flex: "1",
                                                            }}
                                                            label={label}
                                                            clickable
                                                            color={
                                                                isSelected[
                                                                    label
                                                                ]
                                                                    ? "primary"
                                                                    : ""
                                                            }
                                                            onClick={() =>
                                                                handleChipClick(
                                                                    label
                                                                )
                                                            }
                                                        />
                                                    )
                                                );
                                            else
                                                return (
                                                    showHours && (
                                                        <Chip
                                                            style={{
                                                                flex: "1",
                                                            }}
                                                            label={label}
                                                            color="secondary"
                                                        />
                                                    )
                                                );
                                        })}
                                        {clearSwap()}
                                    </div>
                                </form>
                            </>
                        )}
                    />
                    {/* </Styles> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} variant="contained">
                        Cancelar
                    </Button>
                    <Button
                        onClick={() => setOpen(false)}
                        color="primary"
                        autoFocus
                        variant="contained"
                    >
                        Agendar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default HousesTable;
