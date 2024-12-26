interface Expense {
  id?: number;
  expenseId?: string;
  name: string;
  note: string;
  amount: number;
  category: string;
  date: string;
  createdAt?: string;
  updatedAt?: string;
}

export default Expense;
