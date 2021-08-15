import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import styles from './Expenses.module.css';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const dateChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    expense => expense.date.getFullYear() === +filteredYear
  );

  return (
    <div>
      <Card className={styles['expenses']}>
        <ExpensesFilter
          onDateChange={dateChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
