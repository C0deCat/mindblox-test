import React, { useCallback, useContext } from "react";
import "./Clear.styles.css";
import { TodoDispatchContext } from "../../TodoContext";

export const Clear: React.FC = () => {
  const dispatch = useContext(TodoDispatchContext);

  const handleClearCompleted = useCallback(() => {
    dispatch({ type: "remove_completed_todos" });
  }, [dispatch]);

  return (
    <button className="clearButton" onClick={handleClearCompleted}>
      Clear completed
    </button>
  );
};
