import React from "react";
import "./Checkbox.styles.css";

interface CheckboxProps {
  checked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input" checked={checked} />
      <span className="checkbox__inner"></span>
    </label>
  );
};
