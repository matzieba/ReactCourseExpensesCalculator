import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = function (props) {
  const [isEdditing, setIsEditting] = useState(false);

  const startEditingHandler = function () {
    setIsEditting(true);
  };

  const stopEditingHandler = () => setIsEditting(false);

  const saveExpenseDataHanlder = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditting(false);
  };

  return (
    <div className="new-expense">
      {!isEdditing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {isEdditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHanlder}
          onClickCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
