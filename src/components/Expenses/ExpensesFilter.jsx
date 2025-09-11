import React from "react";
import "components/Expenses/ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <>
      <div className="expenses-filter">
        <div className="expense-filter__control">
          <label className="expenses-filter label">Filter by Year</label>
          <select
            className="expenses-filter__control "
            value={props.selected}
            onChange={dropDownChangeHandler}
          >
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ExpensesFilter;
