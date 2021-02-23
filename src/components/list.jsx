import { useState, useEffect } from "react";
import Card from "./Card";
import { get, post } from "../api-front";
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
import arr from "../pages/api/types";
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

let isSelected;

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
resetIsSelected();

let isOcuped;

const resetIsOcuped = () =>
    (isOcuped = {
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
resetIsOcuped();

const TextFieldAdapter = ({ input, meta, ...rest }) => (
    <TextField {...input} {...rest} />
);

const List = () => {
    const [properties, setProperties] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [ocupedHours, setOcupedHours] = useState([]);
    const [showHours, setShowHours] = useState(false);
    const [currentId, setCurrentId] = useState("");
    const [currentName, setCurrentName] = useState("");
    const [currentCPF, setCurrentCPF] = useState("");
    const [loadingHours, SetLoadingHours] = useState(false);
    const [selectedHours, setSelectedHours] = useState(isSelected);
    const [selectedHour, setSelectedHour] = useState("");
    const [isHourSelected, setIsHourSelected] = useState(false);

    useEffect(() => {
        // setProperties(["aa", "bb"]);
        // setShowHours(false);

        get("properties").then((data) => {
            setProperties(data);
        });
    }, []);

    const handleModalOpen = (id) => {
        setCurrentId(id);
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
        setSelectedDate(new Date());
        setShowHours(false);
        setCurrentId("");
        setCurrentName("");
        setCurrentCPF("");
        setSelectedHour("");
        setIsHourSelected(false);
        resetIsSelected();
        setSelectedHours(isSelected);
        resetIsOcuped();
        setOcupedHours(isOcuped);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        SetLoadingHours(true);
        get("visitation", {
            id: currentId,
            date: date.toJSON().split("T")[0],
        }).then((data) => {
            resetIsOcuped();
            data.forEach((x) => (isOcuped[x.hourVisit.slice(0, -3)] = true));
            setOcupedHours(isOcuped);
            setShowHours(true);
            SetLoadingHours(false);
        });
    };

    const handleModalSend = () => {
        post("visitation", {
            dateVisit: selectedDate.toJSON().split("T")[0],
            realEstate: currentId,
            hourVisit: selectedHour,
            name: currentName,
            cpf: currentCPF,
        });
        handleModalClose();
    };

    const handleChipClick = (label) => {
        resetIsSelected();
        isSelected[label] = true;
        setSelectedHours(isSelected);
        setSelectedHour(label);
        setIsHourSelected(true);
    };

    return (
        <>
            <Grid
                container
                spacing={2}
                direction="column"
                justify="space-evenly"
                alignItems="center"
            >
                {properties &&
                    properties.map((property, index) => {
                        return (
                            <Grid key={index} item xs={12}>
                                <Card
                                    model={property}
                                    buttonFunction={(id) => handleModalOpen(id)}
                                />
                            </Grid>
                        );
                    })}
            </Grid>
            <Dialog
                fullWidth
                maxWidth="md"
                aria-labelledby="simple-dialog-title"
                open={open}
                onClose={handleModalClose}
            >
                <DialogTitle id="alert-dialog-title">
                    Agendar horário
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={4} sm={4}>
                            <TextField
                                label="Nome"
                                onChange={(event) =>
                                    setCurrentName(event.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={4} sm={4}>
                            <TextField
                                label="CPF"
                                onChange={(event) =>
                                    setCurrentCPF(event.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={4} sm={4}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    format="dd/MM/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    label="Data da visita"
                                    disablePast
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </Grid>
                    <br />
                    {showHours && (
                        <Grid container spacing={1} justify="space-evenly">
                            {hours.map((hour) => {
                                if (!isOcuped[hour])
                                    return (
                                        <Grid item xs={1}>
                                            <Chip
                                                label={hour}
                                                clickable
                                                onClick={() =>
                                                    handleChipClick(hour)
                                                }
                                                color={
                                                    isSelected[hour]
                                                        ? "primary"
                                                        : "default"
                                                }
                                            />
                                        </Grid>
                                    );
                                else
                                    return (
                                        <Grid item xs={1}>
                                            <Chip
                                                label={hour}
                                                color={"secondary"}
                                            />
                                        </Grid>
                                    );
                            })}
                        </Grid>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose} variant="contained">
                        Cancelar
                    </Button>
                    <Button
                        onClick={handleModalSend}
                        color="primary"
                        autoFocus
                        variant="contained"
                        disabled={!isHourSelected}
                    >
                        Agendar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default List;
