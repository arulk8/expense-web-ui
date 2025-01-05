import { useState, useEffect } from "react";
import Expense from "../model/Expense";
import { getExpenses } from "../services/expenses-service";

const useExpenses = () => {
  const [expenses, setExpense] = useState<Expense[]>([]);
  const [errors, setError] = useState(null);
  const [isloading, setLoading] = useState<boolean>();
  useEffect(() => {
    setLoading(true);
    getExpenses()
      .then((response) => setExpense(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { expenses, errors, isloading };
};

export default useExpenses;
