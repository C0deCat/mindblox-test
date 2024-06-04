import React from "react";
import "./TodoContainer.styles.css";

export const TodoContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="todoContainer">
      <div className="todoContent">{children}</div>
      <div className="todoContainer--StackFirst"></div>
      <div className="todoContainer--StackSecond"></div>
    </div>
  );
};
