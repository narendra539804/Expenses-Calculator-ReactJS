import React from "react";
import "./ExpenseItem.css";
const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div className="expense-item__description">March 28th 2021</div>
      <h2>Car Insurance</h2>
      <div className="expense-item__price">$294.67</div>
    </div>
  );
};

export default ExpenseItem;
