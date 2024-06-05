import React, { useReducer } from "react";
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
      { completed: true, text: "Пункт 1" },
      { completed: false, text: "Пункт 2" },
      { completed: false, text: "Пункт 3" },
      { completed: true, text: "Пункт 4" },
    ],
    filter: FilterMode.ALL,
  });

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
