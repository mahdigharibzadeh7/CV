import React, { useState } from "react";
import YearSelect from "./YearSelect";
import ExpenseItems from "./ExpenseItems";
import Chart from "./Chart";
import "./ComponentsStyle/Card.css";

const Card = ({ Items }) => {
  const year = Items.map((expense) => expense.date);

  const [filteredItems, setFilteredItems] = useState(
    Items.filter((i) => i.date.getFullYear() == 2019)
  );

  const filterByYear = (year) => {
    setFilteredItems(Items.filter((i) => i.date.getFullYear() == year));
  };

  return (
    <div className="card-container">
      <YearSelect yearFilter={filterByYear} date={year} />
      <Chart data={filteredItems} />
      {filteredItems.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Card;
