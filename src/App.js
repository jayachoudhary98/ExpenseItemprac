import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


let Dummy_Expenses=[
  {
    id: 'e1',
    title: 'school Fee',
    amount: 250,
    date: new Date(2021, 4, 10)
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 253,
    date: new Date(2021, 4, 11)
  },
  {
    id: 'e3',
    title: 'House Rent',
    amount: 350,
    date: new Date(2021, 4, 10)
  },
  {
    id: 'e4',
    title: ' Food',
    amount: 250,
    date: new Date(2021, 4, 12)
  }
  
];
function App() {
  // let expenseDate = new Date(2021, 3, 28);
  // let expenseTitle = "School Fee";
  // let expenseAmount = 3000;
  const [expenses, setExpenses]= useState(Dummy_Expenses);
  
  const addExpenseHandler=(expense) =>{
    const updatedExpense=[expense, ...expenses];
    setExpenses(updatedExpense);
    console.log(expense);
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses item={expenses}/>
    </div>
  );
}

export default App;
