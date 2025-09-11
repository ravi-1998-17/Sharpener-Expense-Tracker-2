import ExpenseDate from "components/Expenses/ExpenseDate";
import Card from "components/UI/Card";
import "components/Expenses/ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {

  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>        
      </Card>
    </>
  );
};

export default ExpenseItem;
