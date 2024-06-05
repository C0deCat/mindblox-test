import React, { useContext, useMemo } from "react";
import "./CheckList.styles.css";
import { CheckListItem } from "./components/CheckListItem";
import { FilterMode, TodoStateContext } from "../TodoContext";

export const CheckList: React.FC = () => {
  const { todos, filter } = useContext(TodoStateContext);

  const todoList = useMemo(() => {
    return todos
      .filter((todo) => {
        switch (filter) {
          case FilterMode.ACTIVE:
            return !todo.completed;
          case FilterMode.COMPLETED:
            return todo.completed;
          case FilterMode.ALL:
            return true;
          default:
            break;
        }
        return true;
      })
      .map((todo) => (
        <CheckListItem checked={todo.completed} text={todo.text} />
      ));
  }, [todos, filter]);

  return <ul className="checkList">{todoList}</ul>;
};
