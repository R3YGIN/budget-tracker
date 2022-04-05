import React, { useState, useContext } from "react";
import {
  TextField,
  Grid,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ExpenseTrackerContext } from "../../../context/context";
import { v4 as uuidv4 } from "uuid";

import formatDate from "../../../utils/formatDate";
import useStyles from "./styles";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
import Snackbar from "../../Snackbar/Snackbar";

const initialState = {
  amount: "",
  category: "",
  type: "Доходы",
  date: formatDate(new Date()),
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const [open, setOpen] = useState(false);

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };

    setOpen(true);
    addTransaction(transaction);
    setFormData(initialState);
  };

  const selectedCategories =
    formData.type === "Доходы" ? incomeCategories : expenseCategories;

  return (
    <>
      <Snackbar open={open} setOpen={setOpen} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" variant="subtitle2" gutterBottom>
            ...
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Тип</InputLabel>
            <Select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              variant="standard"
            >
              <MenuItem value="Доходы">Доход</MenuItem>
              <MenuItem value="Расходы">Расход</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Категория</InputLabel>
            <Select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              variant="standard"
            >
              {selectedCategories.map((c) => (
                <MenuItem key={c.type} value={c.type}>
                  {c.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            label="Сумма"
            fullWidth
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="date"
            label="Дата"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: formatDate(e.target.value) })
            }
          />
        </Grid>
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        Создать
      </Button>
    </>
  );
};

export default Form;
