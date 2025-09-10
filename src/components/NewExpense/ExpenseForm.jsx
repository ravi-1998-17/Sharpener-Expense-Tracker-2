import React, { useState } from "react";
import "components/NewExpense/ExpenseForm.css";

const ExpenseForm = () => {

  const [userInput, setUserInput] = useState( {
  enteredTitle: '',
  enteredAmount: '',
  enteredDate: ''
});


  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {...prevState, enteredTitle: event.target.value}
    })
  };
  const amountChangeHandler = (event) => {
    return {...prevState, enteredAmount: event.target.value}
  };
  const dateChangeHandler = (event) => {
    return {...prevState, enteredDate: event.target.value}
  };

  return (
    <>
      <form action="">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" onChange={amountChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              min="23-01-01"
              max="2024-12-31"
              id="date"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
