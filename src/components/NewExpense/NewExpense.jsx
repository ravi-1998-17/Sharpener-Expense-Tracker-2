import React from "react";
import "components/NewExpense/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData)
    const expenseData = {...enteredExpenseData, id: Math.random().toString()}
    console.log(expenseData)

  }

  return (
    <>
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
      </div>
    </>
  );
};

export default NewExpense;
