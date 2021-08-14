import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const [isClicked, setIsClicked] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsClicked(false);
  };

  const clickHandler = () => {
    setIsClicked(true);
  };

  const cancelHandler = () => {
    setIsClicked(false);
  };
  return (
    <div className="new-expense">
      {!isClicked && <button onClick={clickHandler}>Add Expense</button>}
      {isClicked && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
