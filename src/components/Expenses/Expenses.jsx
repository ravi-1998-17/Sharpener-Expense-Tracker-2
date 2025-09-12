import React, { useState } from "react";
import ExpenseItem from "components/Expenses/ExpenseItem";
import Card from "components/UI/Card";
import "components/Expenses/Expenses.css";
import ExpensesFilter from "components/Expenses/ExpensesFilter";
import ExpensesChart from "components/Expenses/ExpensesChart";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses =
    filteredYear === "All"
      ? props.expenses
      : props.expenses.filter((expense) => {
          return expense.date.getFullYear().toString() === filteredYear;
        });

  let expenseContent = <p>No expenses found</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = 
      <>
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              price={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          )
        })};
        {filteredExpenses.length === 1 && (
          <p>Only one expense found. Please add more</p>
        )};
      </>
  }
  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesChart chartData={filteredExpenses} />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
