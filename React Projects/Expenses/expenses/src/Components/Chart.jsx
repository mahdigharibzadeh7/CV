import React from "react";
import "./ComponentsStyle/Chart.css";

const Chart = (props) => {
  const months = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];

  for (const expense of props.data) {
    let month = expense.date.toLocaleString("en-US", { month: "short" });
    for (const val of months) {
      if (month == val.month) {
        val.value += parseFloat(expense.price);
      }
    }
  }

  return (
    <div className="chart-container">
      <div className="chart-bar">
        <div className="month">
          {months.map((m) => {
            let barChartFiller = (m.value / 500) * 100 + "%";
            return (
              <div className="chartBar" key={m.month}>
                <div className="chart-bar__inner">
                  <div
                    className="chart-bar__fill"
                    style={{ height: barChartFiller }}
                  ></div>
                </div>
                <div>{m.month}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Chart;
