import React from "react";
import { Snackbar as MuiSnackbar, Alert } from "@mui/material";

import useStyles from "./styles";

const Snackbar = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <MuiSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Транзакция успешно создана
        </Alert>
      </MuiSnackbar>
    </div>
  );
};

export default Snackbar;
