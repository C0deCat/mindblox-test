import React from "react";
import "./CheckList.styles.css";
import { CheckListItem } from "./components/CheckListItem";

export const CheckList: React.FC = () => {
  return (
    <ul className="checkList">
      <CheckListItem />
      <CheckListItem />
      <CheckListItem />
    </ul>
  );
};
