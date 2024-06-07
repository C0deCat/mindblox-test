import React, { createContext } from "react";

export enum FilterMode {
  ALL = "ALL",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}

export interface TodosState {
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
    case "add_todo":
      return {
        todos: [
          ...state.todos,
          { text: action.newTodo.text, completed: action.newTodo.completed },
        ],
        filter: state.filter,
      };
    case "toggle_todo":
      const newTodos = state.todos.filter((todo) => true);
      newTodos[action.todoIndex].completed = action.newCompletedValue;
      return {
        todos: newTodos,
        filter: state.filter,
      };
    default:
      break;
  }

  throw Error("Unknown action: " + action.type);
};
