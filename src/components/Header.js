import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" color="success" sx={{backgroundColor:"#444",}}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Hallo
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
