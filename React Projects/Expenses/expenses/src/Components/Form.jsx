import React, { useState } from "react";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      id: Math.random().toString(),
      title: title,
      price: price,
      date: new Date(date),
    };
    props.onAddExpense(expense);
    setTitle("");
    setPrice("");
    setDate("");

    props.toggle();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-items">
        <div className="title">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="price">
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="date">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="btns">
          <div className="cancel-btn">
            <button type="button" onClick={props.toggle}>
              Cancel
            </button>
          </div>
          <div className="submit-btn">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
