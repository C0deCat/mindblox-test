import React from "react";
import "./Checkbox.styles.css";

export const Checkbox: React.FC = () => {
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input" />
      <span className="checkbox__inner"></span>
    </label>
  );
};
