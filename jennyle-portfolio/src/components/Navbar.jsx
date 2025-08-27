import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Jenny Le
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
