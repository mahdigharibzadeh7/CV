import React from "react";
import "./ComponentsStyle/ExpenseItems.css";
const ExpenseItems = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  

  return (
      <div className="expense_container">
        <div className="expense_container__date">
          <div className="month">{month}</div>
          <div className="year">{year}</div>
          <div className="day">{day}</div>
        </div>
        <div className="title">
          <p className="expense_container__title">{props.title}</p>
        </div>
        <div className="price">
          <div className="expense_container__price">${props.price}</div>
        </div>
      </div>
  );
};

export default ExpenseItems;
