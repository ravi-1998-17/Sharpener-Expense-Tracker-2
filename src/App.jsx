import Expenses from "components/Expenses/Expenses";
import NewExpense from "components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPNSES = [
  { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
  { id: 2, title: "Book", date: new Date(2024, 8, 25), price: 10 },
  { id: 3, title: "Pen", date: new Date(2025, 2, 10), price: 1 },
  { id: 4, title: "Laptop", date: new Date(2025, 9, 17), price: 200 },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPNSES);

  const addExpenseHandler = (expense) =>{
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      })
  }

  return (
    <div>
      {/* <h2>Let's get Started</h2> */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
