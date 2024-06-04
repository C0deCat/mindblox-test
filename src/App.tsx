import React from "react";
import "./App.css";
import Title from "./Title";
import TodoContainer from "./TodoContainer";
import Input from "./Input";
import CheckList from "./CheckList";
import Control from "./Control";

const App: React.FC = () => {
  return (
    <div className="App">
      <Title />
      <TodoContainer>
        <Input />
        <CheckList />
        <Control />
      </TodoContainer>
    </div>
  );
};

export default App;
