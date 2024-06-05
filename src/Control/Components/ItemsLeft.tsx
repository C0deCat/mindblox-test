import React, { useContext, useMemo } from "react";
import { TodoStateContext } from "../../TodoContext";

export const ItemsLeft: React.FC = () => {
  const todos = useContext(TodoStateContext).todos;

  const itemsLeft = useMemo(() => {
    return todos.filter((todo) => !todo.completed).length;
  }, [todos]);

  return (
    <div className="control--itemsLeft">
      {itemsLeft} {itemsLeft === 1 ? "item" : "items"} left
    </div>
  );
};
