import { useState } from "react";

import { DataGrid, isArray } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

const HousesTable = ({ onSubmit, sent }) => {
    const [open, setOpen] = useState(false);

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
                    Agendar horário
                </Button>
            ),
        },
    ];

    return (
        <div style={{ height: "50vh" }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
            <Dialog
                // onClose={handleClose}
                aria-labelledby="simple-dialog-title"
                open={open}
            >
                <p>mama</p>
            </Dialog>
        </div>
    );
};
export default HousesTable;
