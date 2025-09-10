import ExpenseDate from "components/Expenses/ExpenseDate";
import Card from "components/UI/Card";
import "components/Expenses/ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  function editBtnHandler(evt) {
    setTitle("New Title");
  }

  // function deleteBtnHandler(evt){
  //   console.log('Edit Btn')
  // }

  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
        <button className="action-btn" onClick={editBtnHandler}>
          ✎
        </button>
        {/* <button className='action-btn' onClick={deleteBtnHandler}>🗙</button> */}
      </Card>
    </>
  );
};

export default ExpenseItem;
