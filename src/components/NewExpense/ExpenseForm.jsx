import React, { useState } from "react";
import "components/NewExpense/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
    setIsEditing(false);
  };

  const startEditingHandler = () => setIsEditing(true);

  const cancelEditingHandler = () => setIsEditing(false);

  return (
    <>
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add Expense</button>
        )}
        {isEditing && (
          <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  value={userInput.enteredTitle}
                  onChange={titleChangeHandler}
                />
              </div>
              <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  id="amount"
                  value={userInput.enteredAmount}
                  onChange={amountChangeHandler}
                />
              </div>
              <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  min="2023-01-01"
                  max="2024-12-31"
                  id="date"
                  value={userInput.enteredDate}
                  onChange={dateChangeHandler}
                />
              </div>
            </div>
            <div className="new-expense__actions">
              <button type="button" onClick={cancelEditingHandler}>Cancel</button>
              <button type="submit">Add Expense</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default ExpenseForm;
