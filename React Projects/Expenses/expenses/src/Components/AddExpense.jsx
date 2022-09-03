import React, { useState } from "react";
import Form from "./Form";
import "./ComponentsStyle/AddExpense.css";

const AddExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="form-container">
      {!showForm ? (
        <div className="add-btn">
          <button type="button" onClick={toggleForm}>
            Add new Expense
          </button>
        </div>
      ) : (
        <Form toggle={toggleForm} onAddExpense={props.onAddExpense} />
      )}
    </div>
  );
};

export default AddExpense;
