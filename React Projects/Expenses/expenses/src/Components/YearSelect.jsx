import React from "react";
import "./ComponentsStyle/YearSelect.css";
const YearSelect = (props) => {
  let year = props.date;
  year = year.map((y) => y.getFullYear());
  const newSetYear = new Set(year);
  year = [...newSetYear].sort();

  const yearPicker = (event) => {
    props.yearFilter(event.target.value);
  };

  return (
    <div className="select-container">
      <p>Filter by year</p>
      <select onChange={yearPicker} name="yearSelect" id="">
        {year.map((y) => (
          <option value={y} key={y} >{y}</option>
        ))}
      </select>
    </div>
  );
};

export default YearSelect;
