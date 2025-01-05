import React from "react";
import Expense from "../../model/Expense";

interface Props {
  expenses: Expense[];
}

function ExpenseList({ expenses }: Props) {
  return (
    <div className="card">
      <h5 className="card-header">
        Expense
        <span className="float-end">Amount</span>
      </h5>
      <div className="card-body">
        {expenses.map((expense) => (
          <div className="d-flex justify-content-between border-bottom-1 p-3 text-dark">
            <div className="card-title m-0">
              <h6>{expense.name}</h6>
              <span className="fst-italic">{expense.date}</span>
            </div>
            <div className="card-subtitle">
              <span className="badge round-pill app-primary-bg-color">
                {expense.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
