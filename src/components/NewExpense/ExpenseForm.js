import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enTitle, setEnTitle] = useState("");
  const [enAmount, setEnAmount] = useState("");
  const [enDate, setEnDate] = useState("");

  const changeTitleHandler = (e) => {
    setEnTitle(e.target.value);
  };
  const changeAmountHandler = (e) => {
    setEnAmount(e.target.value);
  };
  const changeDateHandler = (e) => {
    setEnDate(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enTitle,
      amount: enAmount,
      date: new Date(enDate),
    };

    props.onSaveData(expenseData);
    console.log(expenseData);
    setEnTitle("");
    setEnAmount("");
    setEnDate("");
  };
  // const expenseData = {
  //             title: enTitle,
  //             amount: enAmount,
  //             date: new Date(enDate)
  //           }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>

          <input
            type="text"
            value={enTitle}
            onChange={changeTitleHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enAmount}
            onChange={changeAmountHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="Date"
            value={enDate}
            onChange={changeDateHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense_action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
