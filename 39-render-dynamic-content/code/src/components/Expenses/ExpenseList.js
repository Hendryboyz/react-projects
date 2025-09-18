import React from "react";

import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.items.length > 0) {
    return (
      <ul className="expenses-list">
        {props.items.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    )
  } else {
    return (<p className="expenses-list__fallback">No expenses found.</p>);
  }
}

export default ExpenseList;