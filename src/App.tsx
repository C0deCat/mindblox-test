import React, { useEffect, useReducer } from "react";
import "./App.css";
import Title from "./Title";
import TodoContainer from "./TodoContainer";
import Input from "./Input";
import CheckList from "./CheckList";
import Control from "./Control";
import {
  FilterMode,
  TodoDispatchContext,
  TodoStateContext,
  reducer,
} from "./TodoContext";

const App: React.FC = () => {
  const [todos, dispatch] = useReducer(reducer, {
    todos: [
      { completed: true, text: "Открыть тудушки" },
      {
        completed: false,
        text: "Ввести текст и нажать Enter чтобы добавить новую",
      },
      { completed: false, text: "Поиграться с фильтрами" },
      { completed: false, text: "Clear completed чтобы удалить выполненные" },
      { completed: true, text: "Вы великолепны" },
    ],
    filter: FilterMode.ALL,
  });

  useEffect(() => {
    dispatch({ type: "pull_from_localstorage" });
    return () => dispatch({ type: "put_to_localstorage" });
  }, [todos]);

  return (
    <div className="App">
      <Title />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={dispatch}>
          <TodoContainer>
            <Input />
            <CheckList />
            <Control />
          </TodoContainer>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
};

export default App;
