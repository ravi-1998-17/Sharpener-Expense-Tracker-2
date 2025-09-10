import ExpenseItem from "components/Expenses/ExpenseItem";
import Card from "components/UI/Card";
import "components/Expenses/Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense, idx) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
            key={expense.id}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
