import React from "react";
import "./Control.styles.css";
import { ItemsLeft } from "./Components/ItemsLeft";
import { Filters } from "./Components/Filters";
import { Clear } from "./Components/Clear";

export const Control: React.FC = () => {
  return (
    <div className="control">
      <ItemsLeft />
      <Filters />
      <Clear />
    </div>
  );
};
