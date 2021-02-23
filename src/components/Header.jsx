import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

const Header = () => (
    <AppBar
        style={{
            display: "flex",
            padding: "5px",
            marginBottom: "30px",
        }}
        position="fixed"
    >
        <Toolbar variant="dense">
            <Typography style={{ fontSize: "30px" }} variant="h1">
                Imobiliária top do Iury
            </Typography>
            <Button
                style={{ margin: "0 20px 0 auto" }}
                variant="contained"
                href="/"
            >
                Home
            </Button>
            <Button variant="contained" href="/register">
                Cadastrar
            </Button>
        </Toolbar>
    </AppBar>
);

export default Header;
