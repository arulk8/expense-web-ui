import React from "react";
import Expense from "../../model/Expense";

interface Props {
  expenses: Expense[];
}

function ExpenseList({ expenses }: Props) {
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.expenseId}>
              <td>{expense.expenseId}</td>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>{expense.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
