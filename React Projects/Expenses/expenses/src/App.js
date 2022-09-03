import React, { useState } from "react";
import AddExpense from "./Components/AddExpense";
import Card from "./Components/Card";

const Items = [
  { id: "e1", title: "Tv", price: 156.96, date: new Date(2019, 8, 15) },
  { id: "e2", title: "Watch", price: 43.48, date: new Date(2019, 10, 12) },
  { id: "e3", title: "Mobile", price: 87.74, date: new Date(2020, 3, 25) },
  { id: "e4", title: "Laptop", price: 216.39, date: new Date(2020, 9, 4) },
  { id: "e5", title: "Car", price: 5974.19, date: new Date(2021, 7, 30) },
];

function App() {
  const [items, setItems] = useState(Items);
  const addExpenseHandler = (expense) => {
    setItems((prev) => [expense, ...prev]);
  };

  return (
    <>
      <AddExpense onAddExpense={addExpenseHandler} />
      <Card Items={items} />
    </>
  );
}

export default App;
