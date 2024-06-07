import React, { useEffect, useReducer } from "react";
import "./App.css";
import Title from "./Title";
import TodoContainer from "./TodoContainer";
import Input from "./Input";
import CheckList from "./CheckList";
import Control from "./Control";
import { TodoDispatchContext, TodoStateContext, reducer } from "./TodoContext";
import { getInitialState, setStateToLocalstorage } from "./App.utils";

const App: React.FC = () => {
  const [todos, dispatch] = useReducer(reducer, getInitialState());

  useEffect(() => {
    setStateToLocalstorage(todos);
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
