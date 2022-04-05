import React from "react";
import { Grid } from "@mui/material";
import Details from "./components/Details/Details";

import useStyles from "./styles";
import Main from "./components/Main/Main";

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Details title="Доходы" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={11} sm={4} className={classes.desktop}>
          <Details title="Доходы" />
        </Grid>
        <Grid item xs={11} sm={3} className={classes.last}>
          <Details title="Расходы" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
