import React from "react";
import "./Checkbox.styles.css";

interface CheckboxProps {
  checked: boolean;
  onChange: (e: any) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        onChange={onChange}
      />
      <span className="checkbox__inner"></span>
    </label>
  );
};
