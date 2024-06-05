import React, { createContext } from "react";

export enum FilterMode {
  ALL = "ALL",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}

interface TodosState {
  todos: {
    text: string;
    completed: boolean;
  }[];
  filter: FilterMode;
}

export const TodoStateContext = createContext<TodosState>({
  todos: [],
  filter: FilterMode.ALL,
});
export const TodoDispatchContext = createContext<React.Dispatch<any>>(() => {});

export const reducer = (state: TodosState, action: any): TodosState => {
  switch (action.type) {
    case "set_filter":
      return {
        todos: state.todos,
        filter: action.newFilter,
      };
    case "remove_completed_todos":
      return {
        todos: state.todos.filter((todo) => !todo.completed),
        filter: state.filter,
      };
    default:
      break;
  }

  throw Error("Unknown action: " + action.type);
};
