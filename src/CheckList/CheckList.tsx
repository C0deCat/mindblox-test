import React, { useCallback, useContext, useMemo } from "react";
import "./CheckList.styles.css";
import { CheckListItem } from "./components/CheckListItem";
import {
  FilterMode,
  TodoDispatchContext,
  TodoStateContext,
} from "../TodoContext";

export const CheckList: React.FC = () => {
  const { todos, filter } = useContext(TodoStateContext);
  const dispatch = useContext(TodoDispatchContext);

  const handleChange = useCallback(
    (index: number) => (e: any) => {
      dispatch({
        type: "toggle_todo",
        todoIndex: index,
        newCompletedValue: !!e.target.checked,
      });
    },
    [dispatch]
  );

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
      .map((todo, index) => (
        <CheckListItem
          key={index}
          checked={todo.completed}
          text={todo.text}
          onChange={handleChange(index)}
        />
      ));
  }, [todos, filter, handleChange]);

  return <ul className="checkList">{todoList}</ul>;
};
