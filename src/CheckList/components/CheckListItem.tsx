import React from "react";
import "./CheckListItem.styles.css";
import { Checkbox } from "./Checkbox";

export const CheckListItem: React.FC = () => {
  return (
    <li className="checkList--item">
      <Checkbox />
      <span className="checkList--item__label">Тестовое задание</span>
    </li>
  );
};
