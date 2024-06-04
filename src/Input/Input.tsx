import React from "react";
import "./Input.styles.css";

export const Input: React.FC = () => {
  return (
    <input
      className="todo-input"
      type="text"
      placeholder="What needs to be done"
    />
  );
};
