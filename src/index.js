import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import { ThemeProvider, createTheme, Box } from "@mui/material";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const theme = createTheme();

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{backgroundColor:"#255", minHeight: "100vh"}}>
    <App/>
    </Box>
  </ThemeProvider>
);
