import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 10000,
    category: "Счета",
    type: "Расходы",
    date: "2022-03-25",
    id: "56dcec85-afff-44a6-bd4e-573b660c28b4",
  },
  {
    amount: 7000,
    category: "Еда",
    type: "Расходы",
    date: "2022-03-25",
    id: "8e550923-f80c-4590-a6cf-49fb825ec74e",
  },
  {
    amount: 12000,
    category: "Дом",
    type: "Расходы",
    date: "2022-03-25",
    id: "ae13cfa2-55c4-4813-aff9-5f08a2e3c16f",
  },
  {
    amount: 50000,
    category: "Доход от аренды",
    type: "Доходы",
    date: "2022-03-25",
    id: "3cef0170-4132-45ac-91af-a6fc1947f99b",
  },
  {
    amount: 150000,
    category: "Зарплата",
    type: "Доходы",
    date: "2022-03-25",
    id: "c5e597d4-f208-466d-b424-99932e79f226",
  },
  {
    amount: 11000,
    category: "Инвестиции",
    type: "Доходы",
    date: "2022-03-25",
    id: "84644e3d-9445-4896-bf83-b0439e28cc4c",
  },
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });

  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === "Расходы"
      ? acc - currVal.amount
      : acc + currVal.amount;
  }, 0);

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
