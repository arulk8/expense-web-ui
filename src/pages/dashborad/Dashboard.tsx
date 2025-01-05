import ExpenseList from "../../components/expense-list/ExpenseList";
import NavBar from "../../components/nav-bar/NavBar";
import useExpenses from "../../hooks/useExpenses";

function Dashboard() {
  const { isloading, errors, expenses } = useExpenses();
  return (
    <div className="container mx-auto">
      {isloading && "Loading ..."}
      {errors && <div>{errors}</div>}
      {expenses.length > 0 && <ExpenseList expenses={expenses} />}
    </div>
  );
}

export default Dashboard;
