import React from "react";
import ExpenseList from "../../components/expense-list/ExpenseList";
import Expense from "../../model/Expense";

function Dashboard() {
  const expenses: Expense[] = [
    {
      id: 1,
      name: "Water bill",
      amount: 200.0,
      date: new Date().toDateString(),
      category: "Utilites",
      note: "bills",
    },
    {
      id: 2,
      name: "Electricity bill",
      amount: 500.0,
      date: new Date().toDateString(),
      category: "Utilites",
      note: "bills",
    },
  ];
  return <ExpenseList expenses={expenses} />;
}

export default Dashboard;
