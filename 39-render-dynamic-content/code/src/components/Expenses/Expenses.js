import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(+selectedYear);
  };

  const filteredExpenses = props.items ? props.items.filter(
    expense => expense.date.getFullYear() === filteredYear
  ) : [];

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses}  />
      </Card>
    </div>
  );
};

export default Expenses;
