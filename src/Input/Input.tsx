import React, { useCallback, useContext, useState } from "react";
import "./Input.styles.css";
import { TodoDispatchContext } from "../TodoContext";

export const Input: React.FC = () => {
  const dispatch = useContext(TodoDispatchContext);
  const [value, setValue] = useState("");

  const handleChange = useCallback(
    (e: any) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const handleKeyPress = useCallback(
    (event: any) => {
      if (event.key === "Enter" && value !== "") {
        dispatch({
          type: "add_todo",
          newTodo: { completed: false, text: value },
        });
        setValue("");
      }
    },
    [dispatch, value, setValue]
  );

  return (
    <input
      className="todo-input"
      type="text"
      placeholder="What needs to be done"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
    />
  );
};
