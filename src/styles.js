import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  desktop: {
    "&.MuiGrid-root": {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  },
  mobile: {
    "&.MuiGrid-root": {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  main: {
    "&.MuiGrid-root": {
      [theme.breakpoints.up("sm")]: {
        // paddingBottom: "5%",
      },
    },
  },
  last: {
    "&.MuiGrid-root": {
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(3),
        paddingBottom: "200px",
      },
    },
  },
  grid: {
    "&.MuiGrid-root > *": {
      margin: theme.spacing(2),
    },
  },
}));
