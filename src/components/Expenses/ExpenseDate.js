import React from 'react';

import styles from './ExpenseDate.module.css';

const ExpenseDate = props => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className={styles['expense-date']}>
      <div className={styles['expense-date__month']}>{month}</div>
      <div className={styles['expense-date__year']}>{year}</div>
      <div className={styles['expense-date__day']}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
