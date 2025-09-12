import React, { useState } from "react";
import ChartBar from "components/Chart/ChartBar";
import 'components/Chart/Chart.css'

const Chart = (props) => {
  const expensesOnlyArray = props.chartExpenses.map((monthExpenseData) => {
    return monthExpenseData.amount;
  });

  const maxValue = Math.max(...expensesOnlyArray);

  const chartData = [
    { expenseMonth: "Jan", expenseValue: 0 },
    { expenseMonth: "Feb", expenseValue: 0 },
    { expenseMonth: "Mar", expenseValue: 0 },
    { expenseMonth: "Apr", expenseValue: 0 },
    { expenseMonth: "May", expenseValue: 0 },
    { expenseMonth: "Jun", expenseValue: 0 },
    { expenseMonth: "Jul", expenseValue: 0 },
    { expenseMonth: "Aug", expenseValue: 0 },
    { expenseMonth: "Sep", expenseValue: 0 },
    { expenseMonth: "Oct", expenseValue: 0 },
    { expenseMonth: "Nov", expenseValue: 0 },
    { expenseMonth: "Dec", expenseValue: 0 },
  ];

  for (let expense of props.chartExpenses) {
    chartData[expense.date.getMonth()].expenseValue +=expense.amount;
  }

  return (
    <>
      <div className="chart">
        {chartData.map((monthData) => {
          return (
            <ChartBar
              label={monthData.expenseMonth}
              value={monthData.expenseValue}
              key={monthData.expenseMonth}
              maxValue={maxValue}
            />
          );
        })}
      </div>
    </>
  );
};

export default Chart;
