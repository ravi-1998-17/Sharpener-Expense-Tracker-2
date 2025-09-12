import React from "react";
import Chart from "components/Chart/Chart";

const ExpensesChart = (props) => {
  return (
    <>
      <Chart chartExpenses={props.chartData}/>
    </>
  );
};

export default ExpensesChart;
