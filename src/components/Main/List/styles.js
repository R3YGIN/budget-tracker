import { green, red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  avatarIncome: {
    "&.MuiAvatar-root": {
      color: "#fff",
      backgroundColor: green[500],
    },
  },
  avatarExpense: {
    "&.MuiAvatar-root": {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
    },
  },
  list: {
    maxHeight: "150px",
    overflow: "auto",
  },
}));
