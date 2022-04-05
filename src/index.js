import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "./context/context";

const theme = createTheme();

ReactDOM.render(
  <Provider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
