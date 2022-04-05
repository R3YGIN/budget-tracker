import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-10px",
  },
  button: {
    "&.MuiButton-root": {
      marginTop: "20px",
    },
  },
}));
